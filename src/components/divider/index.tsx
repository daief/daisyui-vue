import { componentV2 } from '@/shared/styled';
import { ExtractFromProps } from '@/shared/types/common';
import { computed, HtmlHTMLAttributes } from 'vue';
import style from './style';

const props = {
  horizontal: {
    type: Boolean,
    default: false,
  },
};

export type IDividerProps = ExtractFromProps<typeof props>;

export const Divider = componentV2<IDividerProps, HtmlHTMLAttributes>(
  {
    name: 'Divider',
    props,
    setup: (props, { slots }) => {
      const cls = computed(() => ({
        divider: true,
        'dv-divider': true,
        'divider-horizontal': props.horizontal,
      }));
      return () => <div class={cls.value}>{slots.default?.()}</div>;
    },
  },
  style,
);
