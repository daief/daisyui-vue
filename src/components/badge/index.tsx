import { componentV2 } from 'daisyui-vue/shared/styled';
import {
  ExtractFromProps,
  IColorType,
  ISize,
} from 'daisyui-vue/shared/types/common';
import { computed, PropType, HTMLAttributes } from 'vue';
import style from './style';

export const badgeProps = {
  outline: { type: Boolean, default: void 0 },
  type: {
    type: String as PropType<IColorType | 'ghost'>,
    default: 'netural',
  },
  size: {
    type: String as PropType<ISize>,
    default: 'md',
  },
};

export type IBadgeProps = ExtractFromProps<typeof badgeProps>;

export const Badge = componentV2<IBadgeProps, HTMLAttributes>(
  {
    name: 'Badge',
    props: badgeProps,
    setup: (props, { slots }) => {
      const size = computed(() => props.size || 'md');
      const outline = computed(() => props.outline || false);

      return () => (
        <div
          class={{
            'dv-badge': true,
            [`dv-badge-${props.type}`]: props.type,
            [`dv-badge-${size.value}`]: size.value,
            [`dv-badge-outline`]: outline.value,
          }}
        >
          {slots.default?.()}
        </div>
      );
    },
  },
  style,
);
