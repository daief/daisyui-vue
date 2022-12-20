import { brandVariantProps } from 'daisyui-vue/shared/constants';
import { componentV2 } from 'daisyui-vue/shared/styled';
import { ExtractFromProps } from 'daisyui-vue/shared/types/common';
import { computed, HTMLAttributes } from 'vue';
import styles from './style';

export const linkProps = {
  ...brandVariantProps,
  enableHoverClass: {
    type: Boolean,
    default: false,
  },
};

export type ILinkProps = ExtractFromProps<typeof linkProps>;

export const Link = componentV2<ILinkProps, HTMLAttributes>(
  {
    name: 'Link',
    props: linkProps,
    setup: (props, { slots }) => {
      const cls = computed(() => [
        'dv-link',
        {
          [`dv-link-${props.variant}`]: !!props.variant,
          'dv-link-hover': props.enableHoverClass,
        },
      ]);
      return () => <a class={cls.value}>{slots.default?.()}</a>;
    },
  },
  styles,
);
