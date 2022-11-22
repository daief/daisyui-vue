import { onActivated, onBeforeUnmount, onDeactivated, onMounted } from 'vue';

export function useActiveChange(fn: () => VoidFunction | void) {
  let clean: VoidFunction | void;

  onMounted(() => {
    clean = fn();
  });

  onBeforeUnmount(() => {
    clean && clean();
  });

  onActivated(() => {
    clean = fn();
  });

  onDeactivated(() => {
    clean && clean();
  });
}
