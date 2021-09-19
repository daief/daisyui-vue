import { component } from '@/shared/styled';
import { HTMLAttributes } from 'vue';
import style from './style';

export interface IIconBaseProps {
  color?: string;
  size?: number | string;
  useStroke?: boolean;
}

export const IconBase = component<HTMLAttributes, IIconBaseProps>(
  {
    name: 'IconBase',
    props: {
      color: { type: String, default: 'currentColor' },
      size: [String, Number],
      useStroke: {
        type: Boolean,
        default: true,
      },
    },
    setup: (props, { slots }) => {
      return () => (
        <svg
          class="dv-icon"
          viewBox="0 0 24 24"
          focusable="false"
          aria-hidden="false"
          fill={props.useStroke ? 'none' : props.color}
          stroke={props.useStroke ? props.color : 'none'}
          style={
            props.size
              ? {
                  fontSize:
                    typeof props.size === 'number'
                      ? `${props.size}px`
                      : props.size,
                }
              : {}
          }
        >
          {slots.default?.()}
        </svg>
      );
    },
  },
  style,
);
