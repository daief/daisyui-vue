import { useMediaParse } from 'daisyui-vue/shared/hooks/use-media';
import { componentV2 } from 'daisyui-vue/shared/styled';
import { ExtractFromProps } from 'daisyui-vue/shared/types/common';
import { getRenderResult } from 'daisyui-vue/shared/utils';
import { PropType, computed, Transition } from 'vue';
import { ModalBase } from '../modal';
import style from './style';
import { useTheme } from 'daisyui-vue/shared/ctx';

export const drawerProps = {
  open: Boolean,
  disableTeleport: Boolean,
  mobileOnly: Boolean,
  placement: {
    type: String as PropType<'left' | 'right'>,
    default: 'left',
  },
  onClose: {
    type: Function as PropType<VoidFunction>,
  },
};

export type IDrawerProps = ExtractFromProps<typeof drawerProps>;

export const Drawer = componentV2<IDrawerProps>(
  {
    name: 'Drawer',
    props: drawerProps,
    setup: (props, { slots }) => {
      const theme = useTheme();
      const matchMobile = useMediaParse({
        xs: true,
        lg: false,
      });

      const clsStatus = computed(() => ({
        'dv-drawer-side-parent': true,
        'dv-drawer-end': props.placement === 'right',
        'dv-drawer--mobile-unmatched': !matchMobile.value,
        'dv-drawer--mobile-only': props.mobileOnly,
        'dv-drawer--open': props.open,
      }));

      const rootCls = computed(() => [
        theme.className,
        'dv-drawer',
        clsStatus.value,
      ]);

      const overlayCls = computed(() => ['dv-drawer-overlay', clsStatus.value]);

      return () => {
        const transitionName =
          (props.placement === 'right' ? '-' : '') + 'dv-t-translate-x';

        const contentNode = () => getRenderResult('content', props, slots);
        const defaultNode = () => slots.default?.();
        const sideNode = () => (
          <div class="dv-drawer-side">{defaultNode()}</div>
        );

        const showSideDirectly = props.mobileOnly && !matchMobile.value;

        return (
          <div class={rootCls.value}>
            <div class="dv-drawer-content">{contentNode()}</div>
            <Transition name={transitionName} duration={300}>
              {showSideDirectly ? sideNode() : null}
            </Transition>
            {!showSideDirectly && (
              <ModalBase
                class={overlayCls.value}
                disableTeleport={props.disableTeleport}
                open={props.open}
                onClose={props.onClose}
                custom={sideNode()}
              />
            )}
          </div>
        );
      };
    },
  },
  style,
);
