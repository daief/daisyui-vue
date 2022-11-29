import { componentV2 } from 'daisyui-vue/shared/styled';
import { computed, PropType } from 'vue';
import { IColorType, ExtractFromProps } from 'daisyui-vue/shared/types/common';
import style, { radialProgressStyle } from './style';
import { cssUnit } from 'daisyui-vue/shared/utils';

export const progressProps = {
  type: String as PropType<IColorType>,
  value: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: 100,
  },
};

export type IProgressProps = ExtractFromProps<typeof progressProps>;

export const Progress = componentV2<IProgressProps>(
  {
    name: 'Progress',
    props: progressProps,
    setup: (props) => {
      const cls = computed(() => [
        'dv-progress',
        {
          [`dv-progress-${props.type}`]: !!props.type,
        },
      ]);
      return () => (
        <progress class={cls.value} value={props.value} max={props.max} />
      );
    },
  },
  style,
);

export const radialProgressProps = {
  type: String as PropType<IColorType>,
  value: {
    type: Number,
    default: 0,
  },
  size: {
    type: [Number, String] as PropType<number | string>,
    default: '80px',
  },
  thickness: {
    type: [Number, String] as PropType<number | string>,
    default: '',
  },
};

export type IRadialProgressProps = ExtractFromProps<typeof radialProgressProps>;

export const RadialProgress = componentV2<IRadialProgressProps>(
  {
    name: 'RadialProgress',
    props: radialProgressProps,
    setup: (props, { slots }) => {
      const cptdStyle = computed(() => ({
        '--value': props.value!,
        '--size': cssUnit(props.size),
        '--thickness': cssUnit(props.thickness) || 'calc(var(--size)/10)',
      }));
      return () => (
        <div
          class={[
            'dv-radial-progress',
            {
              [`dv-radial-progress-${props.type}`]: props.type,
            },
          ]}
          style={cptdStyle.value as any}
        >
          {slots.default?.() || props.value + '%'}
        </div>
      );
    },
  },
  radialProgressStyle,
);
