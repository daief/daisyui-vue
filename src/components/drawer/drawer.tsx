import { useMediaParse } from '@/shared/hooks/useMedia';
import { componentV2 } from '@/shared/styled';
import { ExtractFromProps } from '@/shared/types/common';
import { getRenderResult } from '@/shared/utils';
import { PropType, computed, Transition, vShow, withDirectives } from 'vue';
import { ModalBase } from '../modal';
import style from './style';

const props = {
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

export type IDrawerProps = ExtractFromProps<typeof props>;

export const Drawer = componentV2<IDrawerProps>(
  {
    name: 'Drawer',
    props: props,
    inheritAttrs: false,
    setup: (props, { attrs, slots }) => {
      const matchMobile = useMediaParse({
        xs: true,
        lg: false,
      });

      const clsStatus = computed(() => ({
        'dv-drawer-side-parent': true,
        'drawer-end': props.placement === 'right',
        'dv-drawer--mobile-unmatched': !matchMobile.value,
        'dv-drawer--mobile-only': props.mobileOnly,
        'dv-drawer--open': props.open,
      }));

      const rootCls = computed(() => ['dv-drawer', clsStatus.value]);

      const overlayCls = computed(() => ['dv-drawer-overlay', clsStatus.value]);

      return () => {
        const transitionName =
          (props.placement === 'right' ? '-' : '') + 'dv-t-translate-x';

        const contentNode = () => getRenderResult('content', props, slots);
        const defaultNode = () => slots.default?.();
        const sideNode = () => <div class="drawer-side">{defaultNode()}</div>;

        const showSideDirectly = props.mobileOnly && !matchMobile.value;

        return (
          <div {...attrs} class={rootCls.value}>
            <div class="drawer-content">{contentNode()}</div>
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
