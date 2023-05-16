import { componentV2 } from 'daisyui-vue/shared/styled';
import { ExtractFromProps, ISize } from 'daisyui-vue/shared/types/common';
import {
  cloneVNode,
  computed,
  HTMLAttributes,
  PropType,
  provide,
  reactive,
  toRef,
} from 'vue';
import { ctxAvatarGroupKey, IAvatarGroupCtx, sizeMap } from './state';
import style from './style';
import { useTheme } from 'daisyui-vue/shared/ctx';

export const avatarGroupProps = {
  size: {
    type: [Number, String] as PropType<ISize | string | number>,
    default: 'md',
  },
  gap: {
    type: [Number, String] as PropType<string | number>,
    default: void 0,
  },
};

export type IAvatarGroupProps = ExtractFromProps<typeof avatarGroupProps>;

export const AvatrGroup = componentV2<IAvatarGroupProps, HTMLAttributes>(
  {
    name: 'AvatarGroup',
    props: avatarGroupProps,
    setup: (props, { slots }) => {
      const theme = useTheme();

      provide<IAvatarGroupCtx>(
        ctxAvatarGroupKey,
        reactive({
          size: toRef(props, 'size'),
        }),
      );

      const gapValue = computed(() => {
        const res = props.gap || sizeMap[props.size!] / 2 || 24;
        return typeof res === 'number' ? `-${res}px` : '-' + res;
      });

      return () => (
        <div class={[theme.className, 'dv-avatar-group']}>
          {(slots.default?.() || []).map((v, i) =>
            cloneVNode(v, {
              style:
                i === 0
                  ? {}
                  : {
                      marginLeft: gapValue.value,
                    },
            }),
          )}
        </div>
      );
    },
  },
  style,
);
