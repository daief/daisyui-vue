import { componentV2 } from 'daisyui-vue/shared/styled';
import { ExtractFromProps } from 'daisyui-vue/shared/types/common';
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
        'dv-divider': true,
        'dv-divider-horizontal': props.horizontal,
      }));
      return () => <div class={cls.value}>{slots.default?.()}</div>;
    },
  },
  style,
);
