import { sizeProps } from 'daisyui-vue/shared/constants';
import { componentV2 } from 'daisyui-vue/shared/styled';
import { ExtractFromProps } from 'daisyui-vue/shared/types/common';
import { HTMLAttributes, PropType, computed } from 'vue';
import style from './style';
import { Raw, rawProps } from '../_widgets/raw';

export const loadingProps = {
  variant: {
    type: String as PropType<
      'spinner' | 'dots' | 'ring' | 'ball' | 'bars' | 'infinity'
    >,
    default: 'spinner',
  },
  ...sizeProps,
  color: rawProps.color,
};

export type ILoadingProps = ExtractFromProps<typeof loadingProps>;

export const Loading = componentV2<ILoadingProps, HTMLAttributes>(
  {
    name: 'Loading',
    props: loadingProps,
    setup(props, ctx) {
      const cls = computed(() =>
        __c('loading', `loading-${props.variant}`, `loading-${props.size}`),
      );
      return () => <Raw tag="span" class={cls.value} color={props.color} />;
    },
  },
  style,
);
