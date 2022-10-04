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

const props = {
  block: Boolean,
  wide: Boolean,
  disabled: Boolean,
  outline: Boolean,
  active: Boolean,
  loading: Boolean,
  noAnimation: Boolean,
  variant: {
    type: String as PropType<IButtonType>,
    default: 'netural',
  },
  shape: {
    type: String as PropType<IButtonShape>,
    default: 'netural',
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

export type IButtonProps = ExtractFromProps<typeof props>;

export const Button = componentV2<
  IButtonProps,
  AnchorHTMLAttributes & InputHTMLAttributes
>(
  {
    name: 'Button',
    props,
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
          'dv-btn btn',
          props.variant === 'glass'
            ? 'glass'
            : !!props.variant
            ? `btn-${props.variant}`
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
