import { component } from '@/shared/styled';
import { BoolConstructorToBase, IColorType } from '@/shared/types/common';
import { isUndefined } from '@/shared/utils';
import { computed, ref } from 'vue';
import style from './style';

export interface ITooltipProps {
  tip?: string;
  open?: boolean;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  type?: IColorType;
}

const props = {
  open: { type: Boolean, default: void 0 },
};

export const Tooltip = component<
  ITooltipProps,
  BoolConstructorToBase<typeof props>
>(
  {
    name: 'Tooltip',
    props,
    setup: (props, { attrs, slots }) => {
      const state = ref(!!props.open);

      const finalOpen = computed(() => {
        return isUndefined(props.open) ? state.value : props.open;
      });

      return () => (
        <div
          class={[
            'dv-tooltip tooltip',
            {
              'tooltip-open': finalOpen.value,
              [`tooltip-${attrs.placement}`]: !!attrs.placement,
              [`tooltip-${attrs.type}`]: !!attrs.type,
            },
          ]}
          data-tip={attrs.tip}
        >
          {slots?.default?.()}
        </div>
      );
    },
  },
  style,
);
