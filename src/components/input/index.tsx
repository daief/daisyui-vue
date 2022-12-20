import { InputChangeEvent } from 'daisyui-vue/@types/dom';
import {
  colorVariantWithGhostProps,
  V_MODEL_EVENT,
} from 'daisyui-vue/shared/constants';
import { componentV2 } from 'daisyui-vue/shared/styled';
import { ExtractFromProps, ISize } from 'daisyui-vue/shared/types/common';
import { computed, InputHTMLAttributes, PropType } from 'vue';
import styles from './style';

export const inputProps = {
  border: {
    type: Boolean,
    default: true,
  },
  ...colorVariantWithGhostProps,
  size: {
    type: String as PropType<ISize>,
    default: 'md',
  },
  modelValue: {
    type: String,
    default: '',
  },
};

export type IInputProps = ExtractFromProps<typeof inputProps>;

export const Input = componentV2<IInputProps, InputHTMLAttributes>(
  {
    name: 'Input',
    props: inputProps,
    emits: [V_MODEL_EVENT],
    setup: (props, { emit }) => {
      const cls = computed(() => ({
        'dv-input': true,
        'dv-input-bordered': props.border,
        [`dv-input-${props.variant}`]: !!props.variant,
        [`dv-input-${props.size}`]: !!props.size,
      }));

      const handleOnInput = (e: InputChangeEvent) => {
        emit(V_MODEL_EVENT, e.target.value);
      };

      return () => (
        <input
          type="text"
          class={cls.value}
          value={props.modelValue}
          onInput={handleOnInput}
        />
      );
    },
  },
  styles,
);
