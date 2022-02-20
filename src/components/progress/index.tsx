import { componentV2 } from '@/shared/styled';
import { computed, PropType } from 'vue';
import { IColorType, ExtractFromProps } from '@/shared/types/common';
import style from './style';

const props = {
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

export type IProgressProps = ExtractFromProps<typeof props>;

export const Progress = componentV2<IProgressProps>(
  {
    name: 'Progress',
    props,
    setup: (props) => {
      const cls = computed(() => [
        'dv-progress progress',
        {
          [`progress-${props.type}`]: !!props.type,
        },
      ]);
      return () => (
        <progress class={cls.value} value={props.value} max={props.max} />
      );
    },
  },
  style,
);
