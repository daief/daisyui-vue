import { IMaskType, Mask } from '../mask';
import { componentV2 } from 'daisyui-vue/shared/styled';
import { ExtractFromProps, ISize } from 'daisyui-vue/shared/types/common';
import { computed, HTMLAttributes, inject, PropType } from 'vue';
import style from './style';
import { ctxAvatarGroupKey, getSizeValue, IAvatarGroupCtx } from './state';
import { isUndefined } from 'daisyui-vue/shared/utils';

export const avatarProps = {
  src: String,
  placeholder: {
    type: String,
    default: void 0,
  },
  size: {
    type: [Number, String] as PropType<ISize | number | string>,
    default: 'md',
  },
  type: { type: String as PropType<IMaskType>, default: 'circle' },
  status: {
    type: String as PropType<'online' | 'offline'>,
    default: '',
  },
};

export type IAvatarProps = ExtractFromProps<typeof avatarProps>;

export const Avatar = componentV2<IAvatarProps, HTMLAttributes>(
  {
    name: 'Avatar',
    props: avatarProps,
    setup: (props, { slots }) => {
      const ctx = inject<IAvatarGroupCtx>(ctxAvatarGroupKey, { size: '' });
      const merged = computed(() => ({
        size: ctx.size || props.size,
      }));

      const sizeStyle = computed(() => {
        const sizeValue = getSizeValue(merged.value.size);
        return {
          width: sizeValue,
          height: sizeValue,
        };
      });
      return () => {
        const children = slots.default?.();
        const renderPls = () =>
          props.placeholder ? <span>{props.placeholder}</span> : null;
        const renderImg = () => (props.src ? <img src={props.src} /> : null);

        return (
          <div
            class={{
              'dv-avatar ': true,
              'dv-placeholder': !props.src && !isUndefined(props.placeholder),
              'dv-avatar-circle': props.type === 'circle',
              [`dv-${props.status}`]: !!props.status,
            }}
          >
            <Mask type={props.type}>
              <div style={sizeStyle.value}>
                {children || renderImg() || renderPls()}
              </div>
            </Mask>
          </div>
        );
      };
    },
  },
  style,
);
