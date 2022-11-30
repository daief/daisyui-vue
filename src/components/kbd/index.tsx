import { sizeProps } from 'daisyui-vue/shared/constants';
import { componentV2 } from 'daisyui-vue/shared/styled';
import { ExtractFromProps } from 'daisyui-vue/shared/types/common';
import { computed, HTMLAttributes } from 'vue';
import style from './style';

export const kbdProps = {
  ...sizeProps,
};

export type IKbdProps = ExtractFromProps<typeof kbdProps>;

export const Kbd = componentV2<IKbdProps, HTMLAttributes>(
  {
    name: 'Kbd',
    props: kbdProps,
    setup(props, ctx) {
      const cls = computed(() => ({
        'dv-kbd': true,
        [`dv-kbd-${props.size}`]: !!props.size,
      }));
      return () => <kbd class={cls.value}>{ctx.slots.default?.()}</kbd>;
    },
  },
  style,
);
