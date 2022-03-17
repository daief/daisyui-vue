import { componentV2 } from '@/shared/styled';
import {
  ExtractFromProps,
  IColorTypeWithGhost,
  ISize,
} from '@/shared/types/common';
import { computed, InputHTMLAttributes, PropType } from 'vue';
import styles from './style';

const props = {
  border: {
    type: Boolean,
    default: true,
  },
  type: {
    type: String as PropType<IColorTypeWithGhost>,
    default: '',
  },
  size: {
    type: String as PropType<ISize>,
    default: 'md',
  },
};

export type IInputProps = ExtractFromProps<typeof props>;

export const Input = componentV2<IInputProps, InputHTMLAttributes>(
  {
    name: 'Input',
    props,
    setup: (props) => {
      const cls = computed(() => ({
        'dv-input input': true,
        'input-bordered': props.border,
        [`input-${props.type}`]: !!props.type,
        [`input-${props.size}`]: !!props.size,
      }));
      return () => <input type="text" class={cls.value} />;
    },
  },
  styles,
);
