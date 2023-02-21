import { InputChangeEvent } from 'daisyui-vue/@types/dom';
import { V_MODEL_EVENT } from 'daisyui-vue/shared/constants';
import { componentV2 } from 'daisyui-vue/shared/styled';
import {
  ExtractFromProps,
  IBrandColor,
  ISize,
} from 'daisyui-vue/shared/types/common';
import { isUndefined } from 'daisyui-vue/shared/utils';
import { computed, nextTick, PropType, reactive } from 'vue';
import styles from './style';

export const toggleProps = {
  modelValue: {
    type: Boolean,
    default: void 0,
  },
  defaultValue: {
    type: Boolean,
    default: void 0,
  },
  variant: {
    type: String as PropType<IBrandColor>,
    default: 'neutral',
  },
  size: {
    type: String as PropType<ISize>,
    default: 'md',
  },
};

export type IToggleProps = ExtractFromProps<typeof toggleProps>;

export const Toggle = componentV2<IToggleProps>(
  {
    name: 'Toggle',
    props: toggleProps,
    emits: [V_MODEL_EVENT],
    setup: (props, { emit }) => {
      const state = reactive({
        checked: props.defaultValue ?? props.modelValue,
      });

      const finalVal = computed(() =>
        isUndefined(props.modelValue) ? state.checked : props.modelValue,
      );

      const cls = computed(() => [
        'dv-toggle',
        {
          [`dv-toggle-${props.variant}`]: props.variant,
          [`dv-toggle-${props.size}`]: props.size,
        },
      ]);

      return () => {
        return (
          <input
            type="checkbox"
            class={cls.value}
            checked={finalVal.value}
            onChange={(e: InputChangeEvent) => {
              const newVal = !finalVal.value;
              state.checked = newVal;
              emit(V_MODEL_EVENT, newVal);
              nextTick(() => {
                // force sync with finalVal
                e.target.checked = finalVal.value;
              });
            }}
          />
        );
      };
    },
  },
  styles,
);
