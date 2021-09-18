import { component } from '@/shared/styled';
import { BoolConstructorToBase } from '@/shared/types/common';
import { createVNode, computed, HTMLAttributes } from 'vue';
import style from './style';

const props = {
  asTitle: Boolean,
  disabled: Boolean,
};

export interface IMuneItemProps {
  /**
   * is menu title
   */
  asTitle?: boolean;
  disabled?: boolean;
  childWrapper?: 'a' | 'span' | false;
}

export const MenuItem = component<
  IMuneItemProps & HTMLAttributes,
  BoolConstructorToBase<typeof props>
>(
  {
    name: 'MenuItem',
    props: props,
    setup: (props, { slots, attrs }) => {
      const cls = computed(() => [
        {
          'menu-title': props.asTitle,
          disabled: props.disabled,
        },
      ]);

      const wrapper = computed(() => {
        if (!('childWrapper' in attrs)) {
          return props.asTitle ? 'span' : 'a';
        }
        if (attrs.childWrapper === false) {
          return null;
        }
        return attrs.childWrapper;
      });

      return () => {
        const children = slots.default?.();
        return (
          <li class={cls.value}>
            {wrapper.value
              ? createVNode(wrapper.value, {}, children)
              : children}
          </li>
        );
      };
    },
  },
  style,
);
