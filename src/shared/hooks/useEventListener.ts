import { watch } from 'vue';

export function useEventListener<
  E extends HTMLElement | Document | Window,
  K extends keyof DocumentEventMap,
>(getEl: () => E, type: K, cb: (this: E, ev: DocumentEventMap[K]) => any) {
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
