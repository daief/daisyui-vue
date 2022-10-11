import { InputChangeEvent } from 'daisyui-vue/@types/dom';
import { computed, nextTick, reactive } from 'vue';
import { isBool, isUndefined } from '../utils';

export interface IUseCheckboxOptions {
  defaultChecked?: boolean;
  checked?: boolean;
  onChange?: (e: InputChangeEvent) => void;
}

export function useCheckbox(props: IUseCheckboxOptions) {
  const state = reactive({
    checked: isBool(props.checked) ? props.checked : !!props.defaultChecked,
  });

  const finalVal = computed(() =>
    isBool(props.checked) ? props.checked : state.checked,
  );

  const handleOnChange = (e: InputChangeEvent) => {
    const newVal = !finalVal.value;
    state.checked = newVal;
    props.onChange?.(e);
    nextTick(() => {
      // force sync with finalVal
      e.target.checked = finalVal.value;
    });
  };

  return {
    handleOnChange,
    checked: finalVal,
  };
}
