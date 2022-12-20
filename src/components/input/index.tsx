import { componentV2 } from 'daisyui-vue/shared/styled';
import {
  ExtractFromProps,
  IColorTypeWithGhost,
  ISize,
} from 'daisyui-vue/shared/types/common';
import { computed, InputHTMLAttributes, PropType } from 'vue';
import styles from './style';

export const inputProps = {
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

export type IInputProps = ExtractFromProps<typeof inputProps>;

export const Input = componentV2<
  IInputProps,
  Omit<InputHTMLAttributes, 'onChange'>
>(
  {
    name: 'Input',
    props: inputProps,
    setup: (props) => {
      const cls = computed(() => ({
        'dv-input': true,
        'dv-input-bordered': props.border,
        [`dv-input-${props.type}`]: !!props.type,
        [`dv-input-${props.size}`]: !!props.size,
      }));
      return () => <input type="text" class={cls.value} />;
    },
  },
  styles,
);
