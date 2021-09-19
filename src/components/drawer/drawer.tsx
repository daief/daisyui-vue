import { component } from '@/shared/styled';
import { BoolConstructorToBase } from '@/shared/types/common';
import {
  Teleport,
  Transition,
  withDirectives,
  vShow,
  ref,
  watch,
  nextTick,
} from 'vue';
import style from './style';

// TODO 多弹框层级处理
let id = 0;

const boolProps = {
  open: Boolean,
  disableTeleport: Boolean,
  mobileOnly: Boolean,
};

export interface IDrawerProps {
  placement?: 'left' | 'right';
  disableTeleport?: boolean;
  mobileOnly?: boolean;
  onClose?: () => void;
}

// TODO lazy mount
export const Drawer = component<
  IDrawerProps,
  BoolConstructorToBase<typeof boolProps>
>(
  {
    name: 'Drawer',
    props: boolProps,
    inheritAttrs: false,
    setup: (props, { attrs, slots }) => {
      // for side animation
      const finalChecked = ref(props.open);
      watch(
        () => props.open,
        async () => {
          await nextTick();
          await new Promise((r) => setTimeout(r));
          finalChecked.value = props.open;
        },
      );

      return () => {
        const drawNode = (
          <Transition
            enterFromClass="dv-drawer--opacity-0"
            enterActiveClass="dv-drawer--transition-opacity"
            leaveActiveClass="dv-drawer--transition-opacity"
            leaveToClass="dv-drawer--opacity-0"
          >
            {withDirectives(
              <div
                {...attrs}
                class={[
                  'dv-drawer drawer',
                  {
                    'dv-drawer--teleport': !props.disableTeleport,
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
                  checked={finalChecked.value}
                />
                <div class="drawer-content">{slots.content?.()}</div>
                <div class="drawer-side">
                  <div class="drawer-overlay" onClick={attrs.onClose} />
                  {slots.default?.()}
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
