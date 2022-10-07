import { componentV2 } from 'daisyui-vue/shared/styled';
import styles from './style';
import { computed, createVNode, DefineComponent, PropType } from 'vue';
import { ExtractFromProps } from 'daisyui-vue/shared/types/common';

export const indicatorProps = {
  tag: {
    type: [String, Object] as PropType<string | DefineComponent>,
    default: 'div',
  },
};

export type IIndicatorProps = ExtractFromProps<typeof indicatorProps>;

export const Indicator = componentV2<IIndicatorProps>(
  {
    name: 'Indicator',
    props: indicatorProps,
    setup: (props, { slots }) => {
      return () => {
        // TODO warning
        //  Non-function value encountered for default slot. Prefer function slots for better performance.
        const Component = props.tag || 'div';
        return <Component class="dv-indicator">{slots}</Component>;
      };
    },
  },
  styles,
);

export const indicatorItemProps = {
  tag: {
    type: [String, Object] as PropType<string | DefineComponent>,
    default: 'div',
  },
  placement: {
    type: String as PropType<`${'top' | 'middle' | 'bottom'}-${
      | 'start'
      | 'center'
      | 'end'}`>,
    default: 'start-end',
  },
};

export type IIndicatorItemProps = ExtractFromProps<typeof indicatorItemProps>;

export const IndicatorItem = componentV2<IIndicatorItemProps>(
  {
    name: 'IndicatorItem',
    props: indicatorItemProps,
    setup: (props, { slots }) => {
      const propsPassed = computed(() => {
        const [v, h] = props.placement!.split('-');
        return {
          class: [
            'dv-indicator-item',
            {
              [`dv-indicator-${h}`]: true,
              [`dv-indicator-${v}`]: true,
            },
          ],
        };
      });
      return () => {
        const children = slots.default?.();
        return createVNode(props.tag || 'div', propsPassed.value, children);
      };
    },
  },
  styles,
);
