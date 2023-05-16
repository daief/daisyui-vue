import { componentV2 } from 'daisyui-vue/shared/styled';
import { ExtractFromProps } from 'daisyui-vue/shared/types/common';
import { cloneVNode, PropType } from 'vue';
import style from './style';
import { useTheme } from 'daisyui-vue/shared/ctx';

export type IMaskType =
  | 'squircle'
  | 'heart'
  | 'hexagon'
  | 'hexagon-2'
  | 'decagon'
  | 'pentagon'
  | 'diamond'
  | 'square'
  | 'circle'
  | 'parallelogram'
  | 'parallelogram-2'
  | 'parallelogram-3'
  | 'parallelogram-4'
  | 'star'
  | 'star-2'
  | 'triangle'
  | 'triangle-2'
  | 'triangle-3'
  | 'triangle-4';

export const maskProps = {
  type: {
    type: String as PropType<IMaskType>,
    default: 'squircle',
  },
};

export type IMaskProps = ExtractFromProps<typeof maskProps>;

export const Mask = componentV2<IMaskProps, IMaskProps>(
  {
    name: 'Mask',
    props: maskProps,
    setup: (props, { slots }) => {
      const theme = useTheme();
      return () => {
        const child = slots.default?.()?.[0];
        return child
          ? cloneVNode(child, {
              class: `${theme.className} dv-mask dv-mask-${props.type}`,
            })
          : null;
      };
    },
  },
  style,
);
