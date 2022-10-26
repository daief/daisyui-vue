import { InputChangeEvent } from 'daisyui-vue/@types/dom';
import { brandTypeProps, sizeProps } from 'daisyui-vue/shared/constants';
import { componentV2 } from 'daisyui-vue/shared/styled';
import { ExtractFromProps, IText } from 'daisyui-vue/shared/types/common';
import { computed, ComputedRef, HTMLAttributes, inject, PropType } from 'vue';
import { IRadioContext, radioCtxKey } from './state';
import style from './style';

export const radioProps = {
  ...sizeProps,
  ...brandTypeProps,
  disabled: Boolean,
  checked: {
    type: Boolean,
    default: void 0,
  },
  value: {
    type: [String, Number] as PropType<IText>,
    default: void 0,
  },
  readOnly: Boolean,
  name: String,
};

export type IRadioProps = ExtractFromProps<typeof radioProps>;

export const Radio = componentV2<IRadioProps, HTMLAttributes>(
  {
    name: 'Radio',
    props: radioProps,
    setup: (props, { slots }) => {
      const ctx = inject<ComputedRef<IRadioContext>>(radioCtxKey, null);

      const size = computed(() => ctx?.value.size || props.size);
      const disabled = computed(() => ctx?.value.disabled ?? props.disabled);

      const checked = computed(() => {
        if (ctx) {
          return ctx.value.value === props.value;
        }

        return props.checked;
      });

      const handleOnChange = (e: InputChangeEvent) => {
        ctx?.value.onChange(e);
      };

      const wrapperCls = computed(() => ({
        'dv-radio-wrapper': true,
        [`dv-radio-wrapper-${size.value}`]: size.value,
        'dv-radio-wrapper-disabled': disabled.value,
      }));

      const inputCls = computed(() => ({
        'dv-radio': true,
        [`dv-radio-${size.value}`]: size.value,
        [`dv-radio-${props.type}`]: props.type,
      }));

      return () => (
        <label class={wrapperCls.value}>
          <input
            type="radio"
            disabled={disabled.value}
            checked={checked.value}
            class={inputCls.value}
            onChange={handleOnChange}
            readonly={props.readOnly}
            value={props.value}
            name={props.name}
          />
          {slots.default ? <span>{slots.default()}</span> : null}
        </label>
      );
    },
  },
  style,
);
