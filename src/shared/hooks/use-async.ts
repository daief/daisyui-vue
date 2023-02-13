import { reactive, UnwrapRef } from 'vue';

type IFun<R> = (...args: any[]) => R | Promise<R>;

export interface IUseAsyncOptions {
  /**
   * 是否立刻执行，mounted 的时候
   * @default false
   */
  immediate?: boolean;
}

export function useAsync<F extends IFun<any>>(
  fn: F,
  defaultValue: Awaited<ReturnType<F>> | null,
  options: IUseAsyncOptions = {},
): [
  {
    loading: boolean;
    data: typeof defaultValue extends null
      ? UnwrapRef<Awaited<ReturnType<F>>> | null
      : UnwrapRef<Awaited<ReturnType<F>>>;
    error: any;
  },
  F,
] {
  const { immediate = false } = { ...options };
  const state = reactive({
    loading: immediate,
    data: defaultValue ?? null,
    error: null as any,
  });

  let count = 0;

  async function call(...args: any[]) {
    const times = ++count;
    state.error = false;
    state.loading = true;

    try {
      const result = (await fn(...args)) ?? defaultValue;
      if (times !== count) return result;

      state.data = result;
      state.loading = false;
      state.error = false;
      return state.data;
    } catch (error) {
      error ||= new Error('Call async fn error.');
      if (times !== count) throw error;

      state.data = defaultValue as any;
      state.error = error;
      state.loading = false;
      throw state.error;
    }
  }

  return [state, call as any];
}
