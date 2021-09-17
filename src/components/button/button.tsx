import { ISize } from '../../shared/types/common';
import { computed, defineComponent, inject, PropType, Ref, ref } from 'vue';
import { ctxKey, ICtx } from './state';

export type IButtonShape = 'defalut' | 'circle' | 'square';

export const buttonProps = {
  type: String as PropType<
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
    | 'glass'
  >,
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
  onClick: Function as PropType<(payload: MouseEvent) => any>,
};

export type IButtonProps = typeof buttonProps;

export const Button = defineComponent({
  name: 'Button',
  props: buttonProps,
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
        'btn',
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

    return () => (
      <button
        disabled={props.disabled}
        class={cls.value}
        onClick={handleOnClick}
      >
        {showContent.value ? slots.default?.() : null}
      </button>
    );
  },
});
