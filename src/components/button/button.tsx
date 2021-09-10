import { computed, defineComponent, PropType, ref } from 'vue';

export const _button: string =
  'btn | btn-lg | btn-md | btn-sm | btn-xs | btn-wide | btn-block | btn-circle | btn-square | btn-primary | btn-secondary | btn-accent | btn-info | btn-success | btn-warning | btn-error | btn-ghost | btn-link | btn-outline | btn-active | btn-disabled | glass | loading | no-animation';

export const buttonProps = {
  type: String as PropType<
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
    type: String as PropType<'xs' | 'sm' | 'md' | 'lg'>,
    default: 'md',
  },
  shape: String as PropType<'circle' | 'square'>,
  block: Boolean,
  wide: Boolean,
  loading: Boolean,
  disabled: Boolean,
  outline: Boolean,
  onClick: Function as PropType<(payload: MouseEvent) => any>,
};

export type IButtonProps = typeof buttonProps;

export const Button = defineComponent({
  name: 'Button',
  props: buttonProps,
  setup: (props, { slots }) => {
    const clickLoading = ref(false);
    const cls = computed(() => {
      return [
        'btn',
        props.type === 'glass'
          ? 'glass'
          : !!props.type
          ? `btn-${props.type}`
          : '',
        {
          [`btn-${props.size}`]: true,
          [`btn-${props.shape}`]: !!props.shape,
          'btn-block': props.block,
          'btn-wide': props.wide,
          loading: props.loading || clickLoading.value,
          'btn-disabled': props.disabled,
          'btn-outline': props.outline,
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

    return () => (
      <button
        disabled={props.disabled}
        class={cls.value}
        onClick={handleOnClick}
      >
        {slots.default ? slots.default() : null}
      </button>
    );
  },
});
