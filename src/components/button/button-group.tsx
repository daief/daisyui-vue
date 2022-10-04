import { ExtractFromProps, ISize } from 'daisyui-vue/shared/types/common';
import { computed, HTMLAttributes, PropType, provide } from 'vue';
import { ctxKey, ICtx } from './state';
import { IButtonShape } from './button';
import { componentV2 } from 'daisyui-vue/shared/styled';
import style from './style';

const props = {
  outline: Boolean,
  size: {
    type: String as PropType<ISize>,
    default: 'md',
  },
  shape: {
    type: String as PropType<IButtonShape>,
  },
};

export type IButtonGroupProps = ExtractFromProps<typeof props>;

export const ButtonGroup = componentV2<IButtonGroupProps, HTMLAttributes>(
  {
    name: 'ButtonGroup',
    props: props,
    setup: (props, { slots }) => {
      const ctxVal = computed<ICtx>(() => ({
        size: props.size || 'md',
        shape: props.shape || 'defalut',
        outline: props.outline,
      }));

      provide(ctxKey, ctxVal);

      return () => (
        <div class="dv-btn-group btn-group">{slots.default?.()}</div>
      );
    },
  },
  style,
);
