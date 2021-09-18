import { component } from '@/shared/styled';
import { BoolConstructorToBase } from '@/shared/types/common';
import { Teleport, Transition, withDirectives, vShow } from 'vue';
import style from './style';

// TODO 多弹框层级处理
let id = 0;

const boolProps = {
  open: Boolean,
  disableTeleport: Boolean,
  mobileOnly: Boolean,
};

export interface IDrawerProps {
  open?: boolean;
  placement?: 'left' | 'right';
  disableTeleport?: boolean;
  mobileOnly?: boolean;
  onClose?: () => void;
}

export const Drawer = component<
  IDrawerProps,
  BoolConstructorToBase<typeof boolProps>
>(
  {
    name: 'Draw',
    props: boolProps,
    inheritAttrs: false,
    setup: (props, { attrs, slots }) => {
      return () => {
        const drawNode = (
          <Transition
            enterFromClass="opacity-0"
            enterActiveClass="transition-opacity"
            leaveActiveClass="transition-opacity"
            leaveToClass="opacity-0"
          >
            {withDirectives(
              <div
                {...attrs}
                class={[
                  'dv-drawer drawer',
                  {
                    'h-screen fixed inset-0': !props.disableTeleport,
                    'drawer-end': attrs.placement === 'right',
                    'drawer-mobile': !!props.mobileOnly,
                  },
                ]}
                style={{
                  zIndex: 100 + id,
                }}
              >
                <input
                  type="checkbox"
                  class="drawer-toggle"
                  checked={props.open}
                />
                <div class="drawer-content">{slots?.content()}</div>
                <div class="drawer-side">
                  <div class="drawer-overlay" onClick={attrs.onClose} />
                  {slots?.default()}
                </div>
              </div>,
              [[vShow, props.mobileOnly ? true : props.open]],
            )}
          </Transition>
        );
        return !props.disableTeleport ? (
          <Teleport to="body">{drawNode}</Teleport>
        ) : (
          drawNode
        );
      };
    },
  },
  style,
);
