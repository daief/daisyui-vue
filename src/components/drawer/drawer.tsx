import {
  defineComponent,
  PropType,
  Teleport,
  Transition,
  withDirectives,
  vShow,
} from 'vue';

// TODO 多弹框层级处理
let id = 0;

export const drawerProps = {
  open: Boolean,
  placement: String as PropType<'left' | 'right'>,
  onClose: Function as PropType<() => void>,
  disableTeleport: Boolean,
  mobileOnly: Boolean,
};

export type IDrawerProps = typeof drawerProps;

export const Drawer = defineComponent({
  name: 'Draw',
  props: drawerProps,
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
                'drawer',
                {
                  'h-screen fixed inset-0': !props.disableTeleport,
                  'drawer-end': props.placement === 'right',
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
                <div class="drawer-overlay" onClick={props.onClose} />
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
});
