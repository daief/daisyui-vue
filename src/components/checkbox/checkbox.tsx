import { InputChangeEvent } from 'daisyui-vue/@types/dom';
import { brandTypeProps, sizeProps } from 'daisyui-vue/shared/constants';
import { useCheckbox } from 'daisyui-vue/shared/hooks';
import { componentV2 } from 'daisyui-vue/shared/styled';
import { ExtractFromProps } from 'daisyui-vue/shared/types/common';
import { computed, HTMLAttributes, PropType } from 'vue';
import style from './style';

export const checkProps = {
  ...sizeProps,
  ...brandTypeProps,
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
    type: [String, Number] as PropType<string | number>,
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
      const { checked, handleOnChange } = useCheckbox(props);
      const wrapperCls = computed(() => ({
        'dv-checkbox-wrapper': true,
        [`dv-checkbox-wrapper-${props.size}`]: props.size,
        'dv-checkbox-wrapper-disabled': props.disabled,
      }));

      const inputCls = computed(() => ({
        'dv-checkbox': true,
        [`dv-checkbox-${props.size}`]: props.size,
        [`dv-checkbox-${props.type}`]: props.type,
        'dv-checkbox-indeterminate': props.indeterminate,
      }));

      return () => {
        return (
          <label class={wrapperCls.value}>
            <input
              type="checkbox"
              disabled={props.disabled}
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
