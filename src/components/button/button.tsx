import {
  ExtractFromProps,
  IColorType,
  ISize,
} from 'daisyui-vue/shared/types/common';
import {
  AnchorHTMLAttributes,
  computed,
  createVNode,
  inject,
  InputHTMLAttributes,
  Ref,
  ref,
  PropType,
} from 'vue';
import { ctxKey, ICtx } from './state';
import { componentV2 } from 'daisyui-vue/shared/styled';
import style from './style';

export type IButtonShape = 'defalut' | 'circle' | 'square';

export type IButtonType = IColorType | 'ghost' | 'link' | 'glass';

export const buttonProps = {
  block: Boolean,
  wide: Boolean,
  disabled: Boolean,
  outline: Boolean,
  active: Boolean,
  loading: Boolean,
  noAnimation: Boolean,
  variant: {
    type: String as PropType<IButtonType>,
    default: 'neutral',
  },
  shape: {
    type: String as PropType<IButtonShape>,
    default: 'neutral',
  },
  size: {
    type: String as PropType<ISize>,
    default: 'md',
  },
  tag: {
    type: String as PropType<'button' | 'a' | 'input'>,
    default: 'button',
  },
  onClick: Function as PropType<(e: MouseEvent) => any>,
};

export type IButtonProps = ExtractFromProps<typeof buttonProps>;

export const Button = componentV2<
  IButtonProps,
  AnchorHTMLAttributes & InputHTMLAttributes
>(
  {
    name: 'Button',
    props: buttonProps,
    setup: (props, { slots }) => {
      const ctxVal = inject<Ref<ICtx>>(ctxKey, null);
      const size = computed(() => props.size || ctxVal?.value.size || 'md');
      const shape = computed(
        () => props.shape || ctxVal?.value.shape || 'default',
      );
      const outline = computed(() => ctxVal?.value.outline || props.outline);
      const componentType = computed(() => props.tag || 'button');

      const clickLoading = ref(false);

      const finalLoading = computed(() => props.loading || clickLoading.value);

      const cls = computed(() => {
        return [
          'dv-btn',
          props.variant === 'glass'
            ? 'dv-glass'
            : !!props.variant
            ? `dv-btn-${props.variant}`
            : '',
          {
            [`dv-btn-${size.value}`]: true,
            [`dv-btn-${shape.value}`]: true,
            'dv-btn-block': props.block,
            'dv-btn-wide': props.wide,
            'dv-loading': finalLoading.value,
            'dv-btn-disabled': props.disabled,
            'dv-btn-active': props.active,
            'dv-btn-outline': outline.value,
            'dv-no-animation': props.noAnimation,
          },
        ];
      });

      const handleOnClick = async (e: any) => {
        if (clickLoading.value || typeof props.onClick !== 'function') return;
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
          componentType.value,
          {
            disabled: props.disabled || void 0,
            class: cls.value,
            onClick: handleOnClick,
          },
          [showContent.value ? slots.default?.() : null],
        );
    },
  },
  style,
);
