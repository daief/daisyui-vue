import { BoolConstructorToBase, ISize } from '@/shared/types/common';
import { computed, HTMLAttributes, PropType, provide } from 'vue';
import { ctxKey, ICtx } from './state';
import { IButtonShape } from './button';
import { component } from '@/shared/styled';
import style from './style';

export interface IButtonGroupProps {
  size?: ISize;
  shape?: IButtonShape;
  outline?: boolean;
}

const boolProps = {
  outline: Boolean,
};

export const ButtonGroup = component<
  HTMLAttributes & IButtonGroupProps,
  BoolConstructorToBase<typeof boolProps>
>(
  {
    name: 'ButtonGroup',
    props: boolProps,
    setup: (props, { slots, attrs }) => {
      const ctxVal = computed<ICtx>(() => ({
        size: attrs.size || 'md',
        shape: attrs.shape || 'defalut',
        outline: props.outline,
      }));

      provide(ctxKey, ctxVal);

      return () => <div class="dv-btn-group btn-group">{slots?.default()}</div>;
    },
  },
  style,
);
