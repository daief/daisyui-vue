import { componentV2 } from 'daisyui-vue/shared/styled';
import { ExtractFromProps, IColorType } from 'daisyui-vue/shared/types/common';
import { computed, createVNode, HTMLAttributes, PropType } from 'vue';
import style from './style/raw.less';
import { IThemeVariableColor } from 'daisyui-vue/shared/theme/define';
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

      const bg = computed(() => {
        const cssVar = theme.variables.css[props.variant || ''];
        if (cssVar) return `hsl(${cssVar} / var(--tw-bg-opacity, 1))`;
        return 'none';
      });

      const color = computed(() => {
        if (!props.color && props.variant) {
          const bgContent = props.variant.startsWith('base-')
            ? theme.variables.css['base-content']
            : theme.variables.css[`${props.variant}-content`];
          return `hsl(${bgContent} / var(--tw-text-opacity, 1))`;
        }

        const colorFromTheme = theme.variables.css[props.color || ''];
        if (props.color && colorFromTheme) {
          return `hsl(${colorFromTheme} / var(--tw-text-opacity, 1))`;
        }

        return props.color || 'currentColor';
      });

      const styleRef = computed(() => {
        return {
          '--dv-raw-bg': bg.value,
          '--dv-raw-color': color.value,
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
