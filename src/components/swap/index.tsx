import { componentV2 } from 'daisyui-vue/shared/styled';
import { ExtractFromProps } from 'daisyui-vue/shared/types/common';
import { getRenderResult, isUndefined } from 'daisyui-vue/shared/utils';
import { computed, h, PropType, reactive } from 'vue';
import styles from './style';

const props = {
  on: {
    default: '',
  },
  off: {
    default: '',
  },
  tag: {
    type: String,
    default: 'label',
  },
  active: {
    type: Boolean,
    default: void 0,
  },
  animation: {
    type: String as PropType<'rotate' | 'flip'>,
    default: '',
  },
  onChange: {
    type: Function as PropType<(e: boolean) => void>,
    default: void 0,
  },
};

export type ISwapProps = ExtractFromProps<typeof props>;

export const Swap = componentV2<ISwapProps>(
  {
    name: 'Swap',
    props,
    setup: (props, { slots }) => {
      const state = reactive({
        active: props.active,
      });

      const finalActive = computed(() =>
        isUndefined(props.active) ? state.active : props.active,
      );

      const cls = computed(() => [
        'dv-swap swap',
        {
          'swap-active': finalActive.value,
          [`swap-${props.animation}`]: props.animation,
        },
      ]);

      return () => {
        const on = getRenderResult('on', props, slots);
        const off = getRenderResult('off', props, slots);

        return h(
          props.tag,
          {
            class: cls.value,
            onClick: () => {
              state.active = !finalActive.value;
              props.onChange?.(state.active);
            },
          },
          [<div class="swap-on">{on}</div>, <div class="swap-off">{off}</div>],
        );
      };
    },
  },
  styles,
);
