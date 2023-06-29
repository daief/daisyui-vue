import { componentV2 } from 'daisyui-vue/shared/styled';
import styles from './styles';
import { flatUntilNotFragment } from 'daisyui-vue/shared/utils';
import { HTMLAttributes, cloneVNode, computed, isVNode } from 'vue';
import { ExtractFromProps } from 'daisyui-vue/shared/types/common';
import { useTheme } from 'daisyui-vue/shared/ctx';

export const joinProps = {
  vertical: Boolean,
};

export type IJoinProps = ExtractFromProps<typeof joinProps>;

export const Join = componentV2<IJoinProps, HTMLAttributes>(
  {
    name: 'Join',
    props: joinProps,
    setup: (props, { slots }) => {
      const theme = useTheme();
      const cls = computed(() =>
        __c(
          theme.className,
          'join',
          `join-${props.vertical ? 'vertical' : 'horizontal'}`,
        ),
      );
      return () => (
        <div class={cls.value}>
          {flatUntilNotFragment(slots.default?.()).map((it) =>
            isVNode(it)
              ? cloneVNode(it, {
                  class: __c`join-item`,
                })
              : null,
          )}
        </div>
      );
    },
  },
  styles,
);
