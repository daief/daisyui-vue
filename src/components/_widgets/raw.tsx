import { componentV2 } from 'daisyui-vue/shared/styled';
import { ExtractFromProps, IColorType } from 'daisyui-vue/shared/types/common';
import { computed, createVNode, HTMLAttributes, PropType } from 'vue';
import style from './style/raw.less';
import {
  IThemeVariableColor,
  themeVariableColor,
} from 'daisyui-vue/shared/theme/define';
import { useTheme } from 'daisyui-vue/shared/ctx';

export type IRawType = IColorType | 'base-100' | 'base-200' | 'base-300';

export const rawProps = {
  tag: {
    type: String,
    default: 'div',
  },
  variant: {
    type: String as PropType<IRawType | ''>,
    default: '',
  },
  color: {
    type: String as PropType<IThemeVariableColor> | PropType<string>,
    default: '',
  },
};

export type IRawProps = ExtractFromProps<typeof rawProps>;

export const Raw = componentV2<IRawProps, HTMLAttributes>(
  {
    name: 'Raw',
    props: rawProps,
    setup: (props, { slots }) => {
      const theme = useTheme();
      const styleRef = computed(() => {
        let bg = 'none';
        let bgContent = '';
        let color = '';

        if (props.variant) {
          bg = themeVariableColor[props.variant]?.[0] || 'none';
          bgContent = props.variant.startsWith('base-')
            ? themeVariableColor['base-content'][0]
            : themeVariableColor[`${props.variant}-content`]?.[0];
        }

        if (props.color) {
          color = themeVariableColor[props.color]?.[0] || props.color;
        } else {
          color = bgContent || 'currentColor';
        }

        return {
          '--dv-raw-bg': bg,
          '--dv-raw-color': color,
        };
      });

      return () =>
        createVNode(
          props.tag || 'div',
          {
            class: `${theme.className} dv-raw`,
            style: styleRef.value,
          },
          slots.default?.(),
        );
    },
  },
  [style],
);
