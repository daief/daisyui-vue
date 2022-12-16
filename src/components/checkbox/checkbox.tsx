import { InputChangeEvent } from 'daisyui-vue/@types/dom';
import { brandVariantProps, sizeProps } from 'daisyui-vue/shared/constants';
import { useCheckbox } from 'daisyui-vue/shared/hooks';
import { componentV2 } from 'daisyui-vue/shared/styled';
import { ExtractFromProps, IText } from 'daisyui-vue/shared/types/common';
import {
  computed,
  ComputedRef,
  HTMLAttributes,
  inject,
  PropType,
  watch,
} from 'vue';
import { checkboxCtxKey, ICheckboxContext } from './state';
import style from './style';

export const checkProps = {
  ...sizeProps,
  ...brandVariantProps,
  defaultChecked: {
    type: Boolean,
    default: void 0,
  },
  checked: {
    type: Boolean,
    default: void 0,
  },
  onChange: {
    type: Function as PropType<(e: InputChangeEvent) => void>,
  },
  disabled: Boolean,
  readOnly: Boolean,
  indeterminate: Boolean,
  value: {
    type: [String, Number] as PropType<IText>,
    default: void 0,
  },
  name: String,
};

export type ICheckProps = ExtractFromProps<typeof checkProps>;

export const Checkbox = componentV2<ICheckProps, HTMLAttributes>(
  {
    name: 'Checkbox',
    props: checkProps,
    setup(props, { slots }) {
      const ctx = inject<ComputedRef<ICheckboxContext>>(checkboxCtxKey, null);

      const size = computed(() => ctx?.value.size || props.size);
      const disabled = computed(() => ctx?.value.disabled ?? props.disabled);

      const { checked, handleOnChange } = useCheckbox({
        checked: computed(
          () => ctx?.value.value.includes(props.value) ?? props.checked,
        ),
        defaultChecked: props.defaultChecked,
        onChange: (e: InputChangeEvent) => {
          ctx?.value.onChange(props.value);
          props.onChange?.(e);
        },
      });

      const wrapperCls = computed(() => ({
        'dv-checkbox-wrapper': true,
        [`dv-checkbox-wrapper-${size.value}`]: size.value,
        'dv-checkbox-wrapper-disabled': disabled.value,
      }));

      const inputCls = computed(() => ({
        'dv-checkbox': true,
        [`dv-checkbox-${size.value}`]: size.value,
        [`dv-checkbox-${props.variant}`]: props.variant,
        'dv-checkbox-indeterminate': props.indeterminate,
      }));

      watch(
        () => props.value,
        (newValue, _, onInvalidate) => {
          ctx?.value.register(newValue);
          onInvalidate(() => {
            ctx?.value.cancel(newValue);
          });
        },
        {
          immediate: true,
          flush: 'post',
        },
      );

      return () => {
        return (
          <label class={wrapperCls.value}>
            <input
              type="checkbox"
              disabled={disabled.value}
              checked={checked.value}
              class={inputCls.value}
              onChange={handleOnChange}
              readonly={props.readOnly}
              value={props.value}
              name={props.name}
            />
            {slots.default ? <span>{slots.default()}</span> : null}
          </label>
        );
      };
    },
  },
  style,
);
