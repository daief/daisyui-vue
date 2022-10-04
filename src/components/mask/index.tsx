import { component } from 'daisyui-vue/shared/styled';
import { cloneVNode, PropType } from 'vue';
import style from './style';

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

const props = {
  type: {
    type: String as PropType<IMaskType>,
    default: 'squircle',
  },
};

export interface IMaskProps {
  type?: IMaskType;
}

export const Mask = component<IMaskProps, IMaskProps>(
  {
    name: 'Mask',
    props,
    setup: (props, { slots }) => {
      return () => {
        const child = slots.default?.()?.[0];
        return child
          ? cloneVNode(child, {
              class: `dv-mask mask mask-${props.type}`,
            })
          : null;
      };
    },
  },
  style,
);
