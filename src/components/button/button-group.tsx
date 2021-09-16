import { ISize } from '../../shared/types/common';
import {
  computed,
  defineComponent,
  HTMLAttributes,
  PropType,
  provide,
} from 'vue';
import { ctxKey, ICtx } from './state';
import { IButtonShape } from './button';

export const buttonGroupProps = {
  size: {
    type: String as PropType<ISize>,
    default: 'md',
  },
  shape: { type: String as PropType<IButtonShape>, default: 'default' },
  outline: Boolean,
};

export type IButtonGroupProps = typeof buttonGroupProps;

export const ButtonGroup = defineComponent<HTMLAttributes & IButtonGroupProps>({
  name: 'ButtonGroup',
  props: buttonGroupProps as any,
  setup: (props, { slots }) => {
    const ctxVal = computed<ICtx>(() => ({
      size: props.size as any,
      shape: props.shape as any,
      outline: props.outline as any,
    }));

    provide(ctxKey, ctxVal);

    return () => <div class="btn-group">{slots?.default()}</div>;
  },
});
