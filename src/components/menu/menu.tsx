import { componentV2 } from 'daisyui-vue/shared/styled';
import { ExtractFromProps } from 'daisyui-vue/shared/types/common';
import { computed, HTMLAttributes } from 'vue';
import style from './style';

export const menuProps = {
  compact: Boolean,
  horizontal: Boolean,
};

export type IMenuProps = ExtractFromProps<typeof menuProps>;

export const Menu = componentV2<IMenuProps, HTMLAttributes>(
  {
    name: 'Menu',
    props: menuProps,
    setup: (props, { slots }) => {
      const cls = computed(() => [
        'dv-menu dv-menu-normal',
        props.horizontal ? 'dv-menu-horizontal' : 'dv-menu-vertical',
        {
          'dv-menu-compact': props.compact,
        },
      ]);
      return () => <ul class={cls.value}>{slots.default?.()}</ul>;
    },
  },
  style,
);
