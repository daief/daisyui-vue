import { brandTypeProps, sizeProps } from 'daisyui-vue/shared/constants';
import { componentV2 } from 'daisyui-vue/shared/styled';
import { ExtractFromProps, IText } from 'daisyui-vue/shared/types/common';
import { IOption } from 'daisyui-vue/shared/types/components';
import { computed, HTMLAttributes, PropType, provide, reactive } from 'vue';
import { Checkbox } from './checkbox';
import { checkboxCtxKey, ICheckboxContext } from './state';

export const checkGroupProps = {
  ...sizeProps,
  ...brandTypeProps,
  disabled: Boolean,
  options: {
    type: Array as PropType<IOption[]>,
    default: [],
  },
  value: {
    type: Array as PropType<IText[]>,
    default: void 0,
  },
  defaultValue: {
    type: Array as PropType<IText[]>,
    default: [],
  },
  onChange: {
    type: Function as PropType<(values: IText[]) => void>,
  },
};

export type ICheckGroupProps = ExtractFromProps<typeof checkGroupProps>;

export const CheckboxGroup = componentV2<ICheckGroupProps, HTMLAttributes>({
  name: 'CheckboxGroup',
  props: checkGroupProps,
  setup: (props, { slots }) => {
    const state = reactive({
      value: props.value || props.defaultValue || [],
      registeredValues: new Set<IText>(),
    });

    const finalValue = computed(() =>
      Array.isArray(props.value) ? props.value : state.value,
    );

    const handleChange = (v: IText) => {
      const optionIndex = finalValue.value.indexOf(v);
      const newValue = finalValue.value.filter((it) =>
        state.registeredValues.has(it),
      );

      if (optionIndex === -1) {
        newValue.push(v);
      } else {
        newValue.splice(optionIndex, 1);
      }

      if (!Array.isArray(props.value)) {
        state.value = newValue;
      }

      props.onChange?.(newValue);
    };

    const register = (v: IText) => {
      state.registeredValues.add(v);
    };

    const cancel = (v: IText) => {
      state.registeredValues.delete(v);
    };

    const ctxVal = computed<ICheckboxContext>(() => ({
      size: props.size,
      disabled: props.disabled,
      value: finalValue.value,
      onChange: handleChange,
      register,
      cancel,
    }));

    provide(checkboxCtxKey, ctxVal);

    return () => (
      <div class="dv-checkbox-group">
        {props.options?.length
          ? props.options.map((option) => (
              <Checkbox
                key={option.value}
                class="dv-checkbox-group-item"
                value={option.value}
              >
                {option.label}
              </Checkbox>
            ))
          : slots.default?.()}
      </div>
    );
  },
});
