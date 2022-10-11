import { componentV2 } from 'daisyui-vue/shared/styled';
import { ExtractFromProps } from 'daisyui-vue/shared/types/common';
import { IOption } from 'daisyui-vue/shared/types/components';
import { HTMLAttributes, PropType } from 'vue';
import { Checkbox } from './checkbox';

export const checkGroupProps = {
  options: {
    type: Array as PropType<IOption[]>,
    default: [],
  },
};

export type ICheckGroupProps = ExtractFromProps<typeof checkGroupProps>;

export const CheckboxGroup = componentV2<ICheckGroupProps, HTMLAttributes>({
  name: 'CheckboxGroup',
  props: checkGroupProps,
  setup: (props, { slots }) => {
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
