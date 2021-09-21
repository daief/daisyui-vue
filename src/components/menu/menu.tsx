import { component } from '@/shared/styled';
import { BoolConstructorToBase } from '@/shared/types/common';
import { computed } from 'vue';
import style from './style';

const props = {
  compact: Boolean,
  horizontal: Boolean,
};

export interface IMenuProps {
  compact?: boolean;
  horizontal?: boolean;
}

export const Menu = component<IMenuProps, BoolConstructorToBase<typeof props>>(
  {
    name: 'Menu',
    props: props,
    setup: (props, { slots }) => {
      const cls = computed(() => [
        'menu',
        {
          compact: props.compact,
          horizontal: props.horizontal,
        },
      ]);
      return () => <ul class={cls.value}>{slots.default?.()}</ul>;
    },
  },
  style,
);
