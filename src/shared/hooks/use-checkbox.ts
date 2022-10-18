import { InputChangeEvent } from 'daisyui-vue/@types/dom';
import { computed, nextTick, reactive, ToRefs } from 'vue';
import { isBool } from '../utils';

export interface IUseCheckboxOptions {
  defaultChecked?: boolean;
  checked?: boolean;
  onChange?: (e: InputChangeEvent) => void;
}

export function useCheckbox(props: ToRefs<IUseCheckboxOptions>) {
  const state = reactive({
    checked: isBool(props.checked.value)
      ? props.checked.value
      : !!props.defaultChecked.value,
  });

  const finalVal = computed(() =>
    isBool(props.checked.value) ? props.checked.value : state.checked,
  );

  const handleOnChange = (e: InputChangeEvent) => {
    const newVal = !finalVal.value;
    state.checked = newVal;
    props.onChange.value?.(e);
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
