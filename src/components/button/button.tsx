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
import { isUndefined } from 'daisyui-vue/shared/utils';
import { useTheme } from 'daisyui-vue/shared/ctx';

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
    default: '',
  },
  size: {
    type: String as PropType<ISize>,
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
      const theme = useTheme();
      const ctxVal = inject<Ref<ICtx> | null>(ctxKey, null);
      const size = computed(() => ctxVal?.value.size || props.size || 'md');
      const shape = computed(
        () => props.shape || ctxVal?.value.shape || 'default',
      );
      const outline = computed(() => ctxVal?.value.outline || props.outline);
      const componentType = computed(() => props.tag || 'button');

      const clickLoading = ref(false);

      const finalLoading = computed(() =>
        isUndefined(props.loading) ? clickLoading.value : props.loading,
      );

      const cls = computed(() => {
        let variantCls = '';
        if (props.variant === 'glass') {
          variantCls = 'dv-glass';
        } else if (props.variant) {
          variantCls =
            props.variant !== 'neutral' ? `dv-btn-${props.variant}` : '';
        }
        return __c(theme.className, 'btn', variantCls, {
          [`btn-${size.value}`]: true,
          [`btn-${shape.value}`]: !!shape.value,
          'btn-block': props.block,
          'btn-wide': props.wide,
          loading: finalLoading.value,
          'btn-disabled': props.disabled,
          'btn-active': props.active,
          'btn-outline': outline.value,
          'no-animation': props.noAnimation || finalLoading.value,
        });
      });

      const handleOnClick = async (e: any) => {
        if (finalLoading.value || typeof props.onClick !== 'function') return;
        clickLoading.value = true;
        try {
          await props.onClick(e);
        } catch (error) {
          throw error;
        } finally {
          clickLoading.value = false;
        }
      };

      const showContent = computed(() => {
        if (['circle', 'square'].includes(props.shape!)) {
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
