import { computed, HTMLAttributes, PropType, StyleValue } from 'vue';
import { componentV2 } from 'daisyui-vue/shared/styled';
import { ExtractFromProps, ISize } from 'daisyui-vue/shared/types/common';
import style from './style';
import {
  cssUnit,
  flatUntilNotFragment,
  isUndefined,
} from 'daisyui-vue/shared/utils';
import { useTheme } from 'daisyui-vue/shared/ctx';

export const spaceProps = {
  align: {
    type: String as PropType<'start' | 'end' | 'center' | 'baseline'>,
    default: void 0,
  },
  direction: {
    type: String as PropType<'vertical' | 'horizontal'>,
    default: 'horizontal',
  },
  wrap: {
    type: Boolean,
    default: false,
  },
  block: {
    type: Boolean,
    default: false,
  },
  spacing: {
    type: [String, Number, Object] as PropType<
      ISize | string | number | Array<ISize | string | number>
    >,
    default: 'md',
  },
};

export type ISpaceProps = ExtractFromProps<typeof spaceProps>;

export const Space = componentV2<ISpaceProps, HTMLAttributes>(
  {
    name: 'Space',
    props: spaceProps,
    setup: (props, { slots }) => {
      const theme = useTheme();

      const sizeMap: Record<ISize, string> = {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
      };

      const gap = computed(() => {
        let [x, y] = Array.isArray(props.spacing)
          ? props.spacing
          : [props.spacing, props.spacing];
        y ||= x;
        [x, y] = [x, y].map((it) => sizeMap[it!] || cssUnit(it!));
        return `${x} ${y}`;
      });

      const style = computed<StyleValue>(() => ({
        flexWrap: props.wrap ? 'wrap' : void 0,
        display: props.block ? 'flex' : void 0,
        flexDirection: props.direction === 'vertical' ? 'column' : void 0,
        alignItems:
          isUndefined(props.align) && props.direction === 'horizontal'
            ? 'center'
            : props.align,
        gap: gap.value,
      }));

      return () => (
        <div class={[theme.className, 'dv-space']} style={style.value}>
          {flatUntilNotFragment(slots.default?.()).map((it, i) => (
            <div
              class="dv-space-item"
              key={`${i}-${(it as any)?.component?.uid}`}
            >
              {it}
            </div>
          ))}
        </div>
      );
    },
  },
  style,
);
