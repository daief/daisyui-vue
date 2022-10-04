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

const props = {
  size: {
    type: [Number, String] as PropType<ISize | string | number>,
    default: 'md',
  },
  gap: {
    type: [Number, String] as PropType<string | number>,
    default: void 0,
  },
};

export const AvatrGroup = componentV2<
  ExtractFromProps<typeof props>,
  HTMLAttributes
>(
  {
    name: 'AvatarGroup',
    props,
    setup: (props, { slots }) => {
      provide<IAvatarGroupCtx>(
        ctxAvatarGroupKey,
        reactive({
          size: toRef(props, 'size'),
        }),
      );

      const gapValue = computed(() => {
        const res = props.gap || sizeMap[props.size] / 2 || 24;
        return typeof res === 'number' ? `-${res}px` : '-' + res;
      });

      return () => (
        <div class="dv-avatar-group avatar-group">
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
