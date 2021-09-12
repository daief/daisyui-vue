import { defineComponent, createVNode, computed, PropType } from 'vue';

export const menuItemProps = {
  asTitle: Boolean,
  disabled: Boolean,
  /**
   * @default true
   */
  childWrapper: {
    type: [String, Boolean] as PropType<'a' | 'span' | boolean>,
    default: true,
  },
};

export type IMuneItemProps = typeof menuItemProps;

export const MenuItem = defineComponent({
  name: 'MenuItem',
  props: menuItemProps,
  setup: (props, { slots }) => {
    const cls = computed(() => [
      {
        'menu-title': props.asTitle,
        disabled: props.disabled,
      },
    ]);

    const wrapper = computed(() => {
      if (props.childWrapper === true) {
        return props.asTitle ? 'span' : 'a';
      }
      if (props.childWrapper === false) {
        return null;
      }
      return props.childWrapper;
    });

    return () => {
      const children = slots.default?.();
      return (
        <li class={cls.value}>
          {wrapper.value ? createVNode(wrapper.value, {}, children) : children}
        </li>
      );
    };
  },
});
