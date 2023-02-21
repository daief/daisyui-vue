import { colorVariantProps } from 'daisyui-vue/shared/constants';
import { componentV2 } from 'daisyui-vue/shared/styled';
import { ExtractFromProps } from 'daisyui-vue/shared/types/common';
import { HTMLAttributes } from 'vue';
import { IPopperProps, popperProps, Popper } from '../popper';
import style from './style';

export const toolTipprops = {
  ...popperProps,
  ...colorVariantProps,
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
              [`dv-tooltip-${props.variant}`]: !!props.variant,
            },
          ]}
          {...props}
          v-slots={slots}
        />
      );
    },
  },
  style,
);
