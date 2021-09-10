import { reactive, UnwrapRef } from 'vue';

type IFun<R> = (...args: any[]) => R | Promise<R>;

export interface IUseAsyncOptions<T> {
  /**
   * 是否立刻执行，mounted 的时候
   * @default false
   */
  immediate?: boolean;
  defaultValue?: T;
}

export function useAsync<F extends IFun<any>>(
  fn: F,
  options: IUseAsyncOptions<ReturnType<F>> = {},
): [
  {
    loading: boolean;
    data: UnwrapRef<ReturnType<F>>;
    error: any;
  },
  F,
] {
  const { immediate = false, defaultValue } = { ...options };
  const state = reactive({
    loading: immediate,
    data: defaultValue ?? null,
    error: null as any,
  });

  async function call(...args: any[]) {
    state.error = false;
    state.loading = true;

    try {
      state.data = (await fn(...args)) ?? defaultValue;
      state.loading = false;
      state.error = false;
      return state.data;
    } catch (error) {
      state.data = defaultValue;
      state.error = error || new Error('Call async fn error.');
      state.loading = false;
      throw state.error;
    }
  }

  return [state, call as any];
}
