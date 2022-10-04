import { component } from 'daisyui-vue/shared/styled';
import {
  BoolConstructorToBase,
  IColorType,
  ISize,
} from 'daisyui-vue/shared/types/common';
import { computed } from 'vue';
import style from './style';

export interface IBadgeProps {
  type?: IColorType | 'ghost';
  size?: ISize;
}

const props = {
  outline: { type: Boolean, default: void 0 },
};

export const Badge = component<
  IBadgeProps,
  BoolConstructorToBase<typeof props>
>(
  {
    name: 'Badge',
    props,
    setup: (props, { attrs, slots }) => {
      const size = computed(() => attrs.size || 'md');
      const outline = computed(() => props.outline || false);

      return () => (
        <div
          class={{
            'dv-badge badge': true,
            [`badge-${attrs.type}`]: attrs.type,
            [`badge-${size.value}`]: size.value,
            [`badge-outline`]: outline.value,
          }}
        >
          {slots.default?.()}
        </div>
      );
    },
  },
  style,
);
