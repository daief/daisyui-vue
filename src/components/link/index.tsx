import { componentV2 } from 'daisyui-vue/shared/styled';
import { ExtractFromProps, IBrandColor } from 'daisyui-vue/shared/types/common';
import { computed, PropType } from 'vue';
import styles from './style';

export const linkProps = {
  type: {
    type: String as PropType<IBrandColor>,
    default: 'neutral',
  },
  enableHoverClass: {
    type: Boolean,
    default: false,
  },
};

export type ILinkProps = ExtractFromProps<typeof linkProps>;

export const Link = componentV2<ILinkProps>(
  {
    name: 'Link',
    props: linkProps,
    setup: (props, { slots }) => {
      const cls = computed(() => [
        'dv-link',
        {
          [`dv-link-${props.type}`]: !!props.type,
          'dv-link-hover': props.enableHoverClass,
        },
      ]);
      return () => <a class={cls.value}>{slots.default?.()}</a>;
    },
  },
  styles,
);
