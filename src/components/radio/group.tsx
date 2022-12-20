import { InputChangeEvent } from 'daisyui-vue/@types/dom';
import { brandVariantProps, sizeProps } from 'daisyui-vue/shared/constants';
import { componentV2 } from 'daisyui-vue/shared/styled';
import { ExtractFromProps, IText } from 'daisyui-vue/shared/types/common';
import { IOption } from 'daisyui-vue/shared/types/components';
import { isUndefined } from 'daisyui-vue/shared/utils';
import { computed, HTMLAttributes, PropType, provide, reactive } from 'vue';
import { Radio } from './radio';
import { IRadioContext, radioCtxKey } from './state';

export const radioGroupProps = {
  ...sizeProps,
  ...brandVariantProps,
  disabled: Boolean,
  options: {
    type: Array as PropType<IOption[]>,
    default: [],
  },
  modelValue: {
    type: [String, Number] as PropType<IText>,
    default: void 0,
  },
  defaultValue: {
    type: [String, Number] as PropType<IText>,
    default: void 0,
  },
};

export type IRadioGroupProps = ExtractFromProps<typeof radioGroupProps>;

export const RadioGroup = componentV2<IRadioGroupProps, HTMLAttributes>({
  name: 'RadioGroup',
  props: radioGroupProps,
  emits: ['update:modelValue'],
  setup: (props, { slots, emit }) => {
    const state = reactive({
      value: props.modelValue || props.defaultValue || null,
    });

    const finalValue = computed(() =>
      !isUndefined(props.modelValue) ? props.modelValue : state.value,
    );

    const handleChange = (e: InputChangeEvent) => {
      const val = e.target.value;

      if (isUndefined(props.modelValue)) {
        state.value = val;
      }

      emit('update:modelValue', val);
    };

    const ctxVal = computed<IRadioContext>(() => ({
      size: props.size,
      disabled: props.disabled,
      value: finalValue.value,
      onChange: handleChange,
    }));

    provide(radioCtxKey, ctxVal);

    return () => (
      <div class="dv-radio-group">
        {props.options?.length
          ? props.options.map((option) => (
              <Radio
                key={option.value}
                class="dv-radio-group-item"
                value={option.value}
              >
                {option.label}
              </Radio>
            ))
          : slots.default?.()}
      </div>
    );
  },
});
