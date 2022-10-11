import { InputChangeEvent } from 'daisyui-vue/@types/dom';
import { computed, nextTick, reactive } from 'vue';
import { isUndefined } from '../utils';

export interface IUseCheckboxOptions {
  defaultChecked?: boolean;
  checked?: boolean;
  onChange?: (e: InputChangeEvent) => void;
}

export function useCheckbox(props: IUseCheckboxOptions) {
  const state = reactive({
    checked: props.defaultChecked ?? props.checked,
  });

  const finalVal = computed(() =>
    isUndefined(props.checked) ? state.checked : props.checked,
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
