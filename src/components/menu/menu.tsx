import { computed, defineComponent, PropType, ref } from 'vue';

export const menuProps = {
  compact: Boolean,
};

export type IMenuProps = typeof menuProps;

export const Menu = defineComponent({
  name: 'Menu',
  props: menuProps,
  setup: (props, { slots }) => {
    const cls = computed(() => [
      'menu',
      {
        compact: props.compact,
      },
    ]);
    return () => <ul class={cls.value}>{slots.default?.()}</ul>;
  },
});
