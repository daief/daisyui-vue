import { ExtractFromProps, ISize } from 'daisyui-vue/shared/types/common';
import { computed, HTMLAttributes, PropType, provide } from 'vue';
import { ctxKey, ICtx } from './state';
import { IButtonShape } from './button';
import { componentV2 } from 'daisyui-vue/shared/styled';
import style from './style';
import { Join } from '../join';

export const buttonGroupProps = {
  outline: Boolean,
  size: {
    type: String as PropType<ISize>,
    default: 'md',
  },
  shape: {
    type: String as PropType<IButtonShape>,
  },
};

export type IButtonGroupProps = ExtractFromProps<typeof buttonGroupProps>;

export const ButtonGroup = componentV2<IButtonGroupProps, HTMLAttributes>(
  {
    name: 'ButtonGroup',
    props: buttonGroupProps,
    setup: (props, { slots }) => {
      const ctxVal = computed<ICtx>(() => ({
        size: props.size || 'md',
        shape: props.shape || 'defalut',
        outline: props.outline!,
      }));

      provide(ctxKey, ctxVal);

      return () => <Join class={__c`dv-btn-group`}>{slots.default?.()}</Join>;
    },
  },
  style,
);
