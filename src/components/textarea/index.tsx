import { colorVariantProps } from 'daisyui-vue/shared/constants';
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
};

export type ITextareaProps = ExtractFromProps<typeof textareaProps>;

export const Textarea = componentV2<ITextareaProps, InputHTMLAttributes>(
  {
    name: 'Textarea',
    props: textareaProps,
    setup: (props) => {
      const cls = computed(() => ({
        'dv-textarea': true,
        'dv-textarea-bordered': props.border,
        [`dv-textarea-${props.variant}`]: !!props.variant,
      }));
      return () => <textarea class={cls.value} />;
    },
  },
  styles,
);
