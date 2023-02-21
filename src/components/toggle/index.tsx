import { InputChangeEvent } from 'daisyui-vue/@types/dom';
import { componentV2 } from 'daisyui-vue/shared/styled';
import {
  ExtractFromProps,
  IColorType,
  ISize,
} from 'daisyui-vue/shared/types/common';
import { isUndefined } from 'daisyui-vue/shared/utils';
import { computed, nextTick, PropType, reactive } from 'vue';
import styles from './style';

export const toggleProps = {
  checked: {
    type: Boolean,
    default: void 0,
  },
  onChange: {
    type: Function as PropType<(e: InputChangeEvent) => void>,
    default: void 0,
  },
  variant: {
    type: String as PropType<IColorType>,
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
    setup: (props) => {
      const state = reactive({
        checked: props.checked,
      });

      const finalVal = computed(() =>
        isUndefined(props.checked) ? state.checked : props.checked,
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
              props.onChange?.(e);
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
