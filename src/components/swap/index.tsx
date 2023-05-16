import { componentV2 } from 'daisyui-vue/shared/styled';
import { ExtractFromProps } from 'daisyui-vue/shared/types/common';
import { getRenderResult, isUndefined } from 'daisyui-vue/shared/utils';
import { computed, h, PropType, reactive } from 'vue';
import styles from './style';
import { useTheme } from 'daisyui-vue/shared/ctx';

export const swapProps = {
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

export type ISwapProps = ExtractFromProps<typeof swapProps>;

export const Swap = componentV2<ISwapProps>(
  {
    name: 'Swap',
    props: swapProps,
    setup: (props, { slots }) => {
      const theme = useTheme();

      const state = reactive({
        active: props.active,
      });

      const finalActive = computed(() =>
        isUndefined(props.active) ? state.active : props.active,
      );

      const cls = computed(() => [
        theme.className,
        'dv-swap',
        {
          'dv-swap-active': finalActive.value,
          [`dv-swap-${props.animation}`]: props.animation,
        },
      ]);

      return () => {
        const on = getRenderResult('on', props, slots);
        const off = getRenderResult('off', props, slots);

        return h(
          props.tag!,
          {
            class: cls.value,
            onClick: () => {
              state.active = !finalActive.value;
              props.onChange?.(state.active);
            },
          },
          [
            <div class="dv-swap-on">{on}</div>,
            <div class="dv-swap-off">{off}</div>,
          ],
        );
      };
    },
  },
  styles,
);
