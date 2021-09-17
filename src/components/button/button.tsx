import { ISize } from '../../shared/types/common';
import {
  AnchorHTMLAttributes,
  computed,
  createVNode,
  defineComponent,
  inject,
  InputHTMLAttributes,
  PropType,
  Ref,
  ref,
} from 'vue';
import { ctxKey, ICtx } from './state';

export type IButtonShape = 'defalut' | 'circle' | 'square';

export type IButtonType =
  | 'netural'
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'info'
  | 'success'
  | 'warning'
  | 'error'
  | 'ghost'
  | 'link'
  | 'glass';

export const buttonProps = {
  type: String as PropType<IButtonType>,
  size: {
    type: String as PropType<ISize>,
  },
  shape: String as PropType<IButtonShape>,
  block: Boolean,
  wide: Boolean,
  disabled: Boolean,
  outline: Boolean,
  active: Boolean,
  loading: Boolean,
  noAnimation: Boolean,
  onClick: Function as PropType<(e: MouseEvent) => any>,
  component: {
    type: String as PropType<'button' | 'a' | 'input'>,
    default: 'button',
  },
};

export interface IButtonProps {
  type?: IButtonType;
  size?: ISize;
  shape?: IButtonShape;
  block?: boolean;
  wide?: boolean;
  disabled?: boolean;
  outline?: boolean;
  active?: boolean;
  loading?: boolean;
  noAnimation?: boolean;
  component?: 'button' | 'a' | 'input';
  onClick?: (e: MouseEvent) => any;
}

export const Button = defineComponent<
  AnchorHTMLAttributes & InputHTMLAttributes & IButtonProps
>({
  name: 'Button',
  props: buttonProps as any,
  setup: (props, { slots }) => {
    const ctxVal = inject<Ref<ICtx>>(ctxKey, null);
    const size = computed(() => props.size || ctxVal?.value.size || 'md');
    const shape = computed(
      () => props.shape || ctxVal?.value.shape || 'default',
    );
    const outline = computed(() => ctxVal?.value.outline || props.outline);

    const clickLoading = ref(false);

    const finalLoading = computed(() => props.loading || clickLoading.value);

    const cls = computed(() => {
      return [
        'dv-btn btn',
        props.type === 'glass'
          ? 'glass'
          : !!props.type
          ? `btn-${props.type}`
          : '',
        {
          [`btn-${size.value}`]: true,
          [`btn-${shape.value}`]: true,
          'btn-block': props.block,
          'btn-wide': props.wide,
          loading: finalLoading.value,
          'btn-disabled': props.disabled,
          'btn-active': props.active,
          'btn-outline': outline.value,
          'no-animation': props.noAnimation,
        },
      ];
    });

    const handleOnClick = async (e: any) => {
      if (clickLoading.value) return;
      clickLoading.value = true;
      try {
        await props.onClick(e);
      } catch (error) {}
      clickLoading.value = false;
    };

    const showContent = computed(() => {
      if (['circle', 'square'].includes(props.shape)) {
        return !finalLoading.value;
      }
      return true;
    });

    return () =>
      createVNode(
        props.component,
        {
          disabled: props.disabled || void 0,
          class: cls.value,
          onClick: handleOnClick,
        },
        [showContent.value ? slots.default?.() : null],
      );
  },
});
