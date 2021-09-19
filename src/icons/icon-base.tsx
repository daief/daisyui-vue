import { component } from '@/shared/styled';
import { HTMLAttributes } from 'vue';
import style from './style';

export interface IIconBaseProps {
  color?: string;
  size?: number | string;
  useStroke?: boolean;
  viewBox?: string;
}

export const IconBase = component<
  HTMLAttributes & IIconBaseProps,
  IIconBaseProps
>(
  {
    name: 'IconBase',
    props: {
      color: { type: String, default: 'currentColor' },
      size: [String, Number],
      useStroke: {
        type: Boolean,
        default: true,
      },
      viewBox: {
        type: String,
        default: '0 0 1024 1024',
      },
    },
    setup: (props, { slots }) => {
      return () => (
        <svg
          class="dv-icon"
          viewBox={props.viewBox}
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
