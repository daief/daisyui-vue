import { componentV2 } from 'daisyui-vue/shared/styled';
import { ExtractFromProps, IColorType } from 'daisyui-vue/shared/types/common';
import { HTMLAttributes, PropType } from 'vue';
import { IPopperProps, popperProps, Popper } from '../popper';
import style from './style';

export const toolTipprops = {
  ...popperProps,
  type: {
    type: String as PropType<IColorType>,
    default: 'neutral',
  },
};

export type ITooltipProps = ExtractFromProps<typeof toolTipprops> &
  IPopperProps;

export const Tooltip = componentV2<ITooltipProps, HTMLAttributes>(
  {
    name: 'Tooltip',
    props: toolTipprops,
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
