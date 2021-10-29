import {
  BoolConstructorToBase,
  IColorType,
  ISize,
} from '@/shared/types/common';
import {
  AnchorHTMLAttributes,
  computed,
  createVNode,
  inject,
  InputHTMLAttributes,
  Ref,
  ref,
} from 'vue';
import { ctxKey, ICtx } from './state';
import { component } from '@/shared/styled';
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
  onClick: Function as unknown as IButtonProps['onClick'],
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

export const Button = component<
  AnchorHTMLAttributes & InputHTMLAttributes & IButtonProps,
  BoolConstructorToBase<typeof props>
>(
  {
    name: 'Button',
    props: {
      block: Boolean,
      wide: Boolean,
      disabled: Boolean,
      outline: Boolean,
      active: Boolean,
      loading: Boolean,
      noAnimation: Boolean,
      onClick: Function,
    },
    setup: (props, { slots, attrs }) => {
      const ctxVal = inject<Ref<ICtx>>(ctxKey, null);
      const size = computed(() => attrs.size || ctxVal?.value.size || 'md');
      const shape = computed(
        () => attrs.shape || ctxVal?.value.shape || 'default',
      );
      const outline = computed(() => ctxVal?.value.outline || props.outline);
      const componentType = computed(() => attrs.component || 'button');

      const clickLoading = ref(false);

      const finalLoading = computed(() => props.loading || clickLoading.value);

      const cls = computed(() => {
        return [
          'dv-btn btn',
          attrs.type === 'glass'
            ? 'glass'
            : !!attrs.type
            ? `btn-${attrs.type}`
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
        if (['circle', 'square'].includes(attrs.shape)) {
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
