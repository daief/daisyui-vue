import { InputChangeEvent } from 'daisyui-vue/@types/dom';
import { computed, nextTick, reactive, unref } from 'vue';
import { IMaybeRefs } from '../types/common';
import { isBool } from '../utils';

export type IUseCheckboxOptions = IMaybeRefs<{
  defaultChecked?: boolean;
  checked?: boolean;
  onChange?: (e: InputChangeEvent) => void;
}>;

export function useCheckbox(props: IUseCheckboxOptions) {
  const checked = computed(() => unref(props.checked));

  const state = reactive({
    checked: isBool(checked.value) ? checked.value : !!props.defaultChecked,
  });

  const finalVal = computed(() =>
    isBool(checked.value) ? checked.value : state.checked,
  );

  const handleOnChange = (e: InputChangeEvent) => {
    const newVal = !finalVal.value;
    state.checked = newVal;
    unref(props.onChange)?.(e);
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
