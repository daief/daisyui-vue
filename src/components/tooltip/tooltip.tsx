import { componentV2 } from 'daisyui-vue/shared/styled';
import { ExtractFromProps, IColorType } from 'daisyui-vue/shared/types/common';
import { HTMLAttributes, PropType } from 'vue';
import { IPopperProps, popperProps, Popper } from '../popper';
import style from './style';

const props = {
  ...popperProps,
  type: {
    type: String as PropType<IColorType>,
    default: 'netural',
  },
};

export type ITooltipProps = ExtractFromProps<typeof props> & IPopperProps;

export const Tooltip = componentV2<ITooltipProps, HTMLAttributes>(
  {
    name: 'Tooltip',
    props,
    setup: (props, { attrs, slots }) => {
      return () => (
        <Popper
          class={[
            'dv-tooltip',
            attrs.class,
            {
              [`dv-tooltip-${props.type}`]: !!props.type,
            },
          ]}
          {...props}
        >
          {slots}
        </Popper>
      );
    },
  },
  style,
);
