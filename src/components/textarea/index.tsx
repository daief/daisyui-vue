import { InputChangeEvent } from 'daisyui-vue/@types/dom';
import { colorVariantProps, V_MODEL_EVENT } from 'daisyui-vue/shared/constants';
import { componentV2 } from 'daisyui-vue/shared/styled';
import { ExtractFromProps } from 'daisyui-vue/shared/types/common';
import { computed, InputHTMLAttributes } from 'vue';
import styles from './style';

export const textareaProps = {
  ...colorVariantProps,
  border: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: String,
    default: '',
  },
};

export type ITextareaProps = ExtractFromProps<typeof textareaProps>;

export const Textarea = componentV2<ITextareaProps, InputHTMLAttributes>(
  {
    name: 'Textarea',
    props: textareaProps,
    emits: [V_MODEL_EVENT],
    setup: (props, { emit }) => {
      const cls = computed(() => ({
        'dv-textarea': true,
        'dv-textarea-bordered': props.border,
        [`dv-textarea-${props.variant}`]: !!props.variant,
      }));

      const handleOnInput = (e: InputChangeEvent) => {
        emit(V_MODEL_EVENT, e.target.value);
      };

      return () => (
        <textarea
          class={cls.value}
          value={props.modelValue}
          onInput={handleOnInput}
        />
      );
    },
  },
  styles,
);
