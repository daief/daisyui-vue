import { COLORS, IColor } from 'daisyui-vue/shared/constants';
import { componentV2 } from 'daisyui-vue/shared/styled';
import { ExtractFromProps, IColorType } from 'daisyui-vue/shared/types/common';
import { computed, createVNode, HTMLAttributes, PropType } from 'vue';
import style from './style/element.less';

export type IElementType = IColorType | 'base-100' | 'base-200' | 'base-300';

export const elementProps = {
  tag: {
    type: String,
    default: 'div',
  },
  variant: {
    type: String as PropType<IElementType>,
    default: '',
  },
  color: {
    type: String as PropType<IColor> | PropType<string>,
    default: '',
  },
};

export type IElementProps = ExtractFromProps<typeof elementProps>;

export const Element = componentV2<IElementProps, HTMLAttributes>(
  {
    name: 'Element',
    props: elementProps,
    setup: (props, { slots }) => {
      const styleRef = computed(() => {
        let bg = 'none';
        let bgContent = '';
        let color = '';

        if (props.variant) {
          bg = COLORS[props.variant] || 'none';
          bgContent = props.variant.startsWith('base-')
            ? COLORS['base-content']
            : COLORS[`${props.variant}-content`];
        }

        if (props.color) {
          color = COLORS[props.color] || props.color;
        } else {
          color = bgContent || 'currentColor';
        }

        return {
          '--dv-element-bg': bg,
          '--dv-element-color': color,
        };
      });

      return () =>
        createVNode(
          props.tag,
          {
            class: 'dv-element',
            style: styleRef.value,
          },
          slots.default?.(),
        );
    },
  },
  [style],
);
