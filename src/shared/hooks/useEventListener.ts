import { watch } from 'vue';
import { isBrowser } from '../utils';

export function useEventListener<
  E extends {
    addEventListener;
    removeEventListener;
  },
  K extends keyof DocumentEventMap,
>(getEl: () => E, type: K, cb: (this: E, ev: DocumentEventMap[K]) => any) {
  if (!isBrowser) return;
  watch(
    getEl,
    (val, _, onInvalidate) => {
      if (!val) return;
      val?.addEventListener(type, cb);
      onInvalidate(() => {
        val?.removeEventListener(type, cb);
      });
    },
    {
      immediate: true,
      flush: 'post',
    },
  );
}
