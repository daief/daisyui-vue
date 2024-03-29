import { AnimationTimer } from 'daisyui-vue/shared/animation-timer';
import { componentV2 } from 'daisyui-vue/shared/styled';
import { ExtractFromProps } from 'daisyui-vue/shared/types/common';
import { onUnmounted, onMounted, ref, PropType, watch } from 'vue';
import styles from './style';
import { useTheme } from 'daisyui-vue/shared/ctx';

export const counterProps = {
  from: {
    type: Number,
    default: 0,
  },
  to: {
    type: Number,
    default: 0,
  },
  duration: {
    type: Number,
    default: 0,
  },
  format: {
    type: Function as PropType<(v: number) => string>,
  },
  transitionDuration: {
    type: Number,
    default: 0,
  },
};

export type ICounterProps = ExtractFromProps<typeof counterProps>;

export const Conter = componentV2<ICounterProps>(
  {
    name: 'Counter',
    props: counterProps,
    setup: (props) => {
      const theme = useTheme();

      const value2display = (val: number) => {
        val = Math.trunc(val);
        const pred = props.format ? props.format(val || 0) : val;
        return String(pred || 0)
          .split(/(\d)/g)
          .filter(Boolean);
      };

      const display = ref<string[]>(value2display(props.from!));
      const at = new AnimationTimer<number>({
        initialValue: props.from!,
        duration: props.duration!,
        updater: (ctx, p) => {
          return props.from! + (props.to! - props.from!) * p;
        },
        onUpdate: (ctx) => {
          display.value = value2display(ctx.current);
        },
      });

      watch([() => props.from, () => props.duration], () => {
        at.updateOptions({
          duration: props.duration,
          initialValue: props.from,
        });
        at.reset();
        at.play();
      });

      onMounted(() => {
        at.play();
      });

      onUnmounted(() => {
        at.reset();
      });

      return () => (
        <span
          class={[theme.className, 'dv-counter']}
          style={`--t-d: ${props.transitionDuration || 0}ms`}
        >
          {display.value.map((char, i) => {
            const isNumber = /^\d$/.test(char);
            return (
              <span
                key={i}
                class={isNumber ? 'dv-counter-number' : 'dv-conter-chars'}
                style={isNumber ? `--value: ${char}` : ''}
              >
                {isNumber ? '' : char}
              </span>
            );
          })}
        </span>
      );
    },
  },
  styles,
);
