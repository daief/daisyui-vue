import { brandVariantProps, sizeProps } from 'daisyui-vue/shared/constants';
import { componentV2 } from 'daisyui-vue/shared/styled';
import { ExtractFromProps, IText } from 'daisyui-vue/shared/types/common';
import { IOption } from 'daisyui-vue/shared/types/components';
import { computed, HTMLAttributes, PropType, provide, reactive } from 'vue';
import { Checkbox } from './checkbox';
import { checkboxCtxKey, ICheckboxContext } from './state';
import { useTheme } from 'daisyui-vue/shared/ctx';

export const checkGroupProps = {
  ...sizeProps,
  ...brandVariantProps,
  disabled: Boolean,
  options: {
    type: Array as PropType<IOption[]>,
    default: [],
  },
  modelValue: {
    type: Array as PropType<IText[]>,
    default: void 0,
  },
  defaultValue: {
    type: Array as PropType<IText[]>,
    default: [],
  },
};

export type ICheckGroupProps = ExtractFromProps<typeof checkGroupProps>;

export const CheckboxGroup = componentV2<ICheckGroupProps, HTMLAttributes>({
  name: 'CheckboxGroup',
  props: checkGroupProps,
  emits: ['update:modelValue'],
  setup: (props, { slots, emit }) => {
    const theme = useTheme();

    const state = reactive({
      value: props.modelValue || props.defaultValue || [],
      registeredValues: new Set<IText>(),
    });

    const finalValue = computed(() =>
      Array.isArray(props.modelValue) ? props.modelValue : state.value,
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

      if (!Array.isArray(props.modelValue)) {
        state.value = newValue;
      }

      emit('update:modelValue', newValue);
    };

    const register = (v: IText) => {
      state.registeredValues.add(v);
    };

    const cancel = (v: IText) => {
      state.registeredValues.delete(v);
    };

    const ctxVal = computed<ICheckboxContext>(() => ({
      size: props.size!,
      disabled: props.disabled!,
      value: finalValue.value,
      onChange: handleChange,
      register,
      cancel,
    }));

    provide(checkboxCtxKey, ctxVal);

    return () => (
      <div class={[theme.className, 'dv-checkbox-group']}>
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
