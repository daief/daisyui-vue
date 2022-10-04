import { componentV2 } from '@/shared/styled';
import { ExtractFromProps } from '@/shared/types/common';
import { cssUnit } from '@/shared/utils';
import { HTMLAttributes, cloneVNode, PropType, h } from 'vue';
import style from './style';

export const iconProps = {
  color: {
    type: String,
    default: 'currentColor',
  },
  size: {
    type: [Number, String] as PropType<number | string>,
  },
  tag: {
    type: String,
    default: 'span',
  },
};

export type IIconProps = ExtractFromProps<typeof iconProps>;

export const Icon = componentV2<IIconProps, HTMLAttributes>(
  {
    name: 'Icon',
    props: iconProps,
    setup: (props, { slots }) => {
      return () => {
        const child = slots.default?.()[0];
        return h(
          props.tag!,
          {
            class: 'dv-icon',
            style: {
              fontSize: cssUnit(props.size),
              color: props.color,
            },
          },
          [
            child
              ? cloneVNode(child, {
                  focusable: false,
                  ariaHidden: false,
                })
              : null,
          ],
        );
      };
    },
  },
  style,
);
