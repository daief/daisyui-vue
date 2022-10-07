import { componentV2 } from 'daisyui-vue/shared/styled';
import { computed, PropType } from 'vue';
import { IColorType, ExtractFromProps } from 'daisyui-vue/shared/types/common';
import style from './style';

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
