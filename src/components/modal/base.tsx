import { useEventListener } from 'daisyui-vue/shared/hooks/use-event-listener';
import { componentV2 } from 'daisyui-vue/shared/styled';
import { ExtractFromProps } from 'daisyui-vue/shared/types/common';
import { getRenderResult } from 'daisyui-vue/shared/utils';
import {
  computed,
  PropType,
  reactive,
  StyleValue,
  Teleport,
  Transition,
  TransitionProps,
  watch,
} from 'vue';
import style from './style/base.less';
import { useTheme } from 'daisyui-vue/shared/ctx';

export const modalBaseProps = {
  disableTeleport: {
    type: Boolean,
    default: false,
  },
  container: {
    type: [Function, String, Object] as PropType<
      string | Element | (() => Element | string)
    >,
    default: 'body',
  },
  open: Boolean,
  hideMask: Boolean,
  maskCloseable: {
    type: Boolean,
    default: true,
  },
  onMaskClick: Function as PropType<(e: MouseEvent) => void>,
  escapeCloseable: {
    type: Boolean,
    default: true,
  },
  onEscKeyDown: Function as PropType<(e: KeyboardEvent) => void>,
  onClose: Function as PropType<
    (e: MouseEvent | KeyboardEvent, trigger: 'esc' | 'mask') => void
  >,

  custom: { default: null },
  destroyOnClose: Boolean,
  transitionProps: {
    type: Object as PropType<Partial<TransitionProps>>,
  },
};

export type IModalBaseProps = ExtractFromProps<typeof modalBaseProps>;

export const ModalBase = componentV2<IModalBaseProps>(
  {
    name: 'ModalBase',
    props: modalBaseProps,
    inheritAttrs: false,
    setup: (props, { slots, attrs }) => {
      const theme = useTheme();

      const state = reactive({
        hasTriggered: !!props.open,
      });

      const maskStyle = computed<StyleValue>(() => [
        props.hideMask
          ? {
              pointerEvents: 'none',
              background: 'none',
            }
          : '',
        !props.maskCloseable ? { cursor: 'auto' } : '',
        props.disableTeleport ? { position: 'absolute' } : '',
      ]);

      const stop = watch(
        () => props.open,
        (newVal) => {
          if (newVal) {
            state.hasTriggered = true;
            stop();
          }
        },
      );

      const handleClickMask = (e: MouseEvent) => {
        if (props.maskCloseable && e.target === e.currentTarget) {
          props.onMaskClick?.(e);
          props.onClose?.(e, 'mask');
        }
      };

      useEventListener(
        () => document,
        'keydown',
        (e) => {
          if (props.escapeCloseable && e.key === 'Escape') {
            props.onEscKeyDown?.(e);
            props.onClose?.(e, 'esc');
          }
        },
      );

      const getCustomNodes = () => getRenderResult('custom', props, slots);

      return () => {
        const toContainer =
          typeof props.container === 'function'
            ? props.container()
            : props.container;

        return (
          <Teleport disabled={props.disableTeleport} to={toContainer}>
            <Transition
              name="dv-modal-base-t"
              duration={300}
              {...props.transitionProps}
            >
              {state.hasTriggered ? (
                <div
                  {...attrs}
                  tabindex={-1}
                  role="presentation"
                  class={[theme.className, 'dv-modal-base']}
                  style={maskStyle.value}
                  onClick={handleClickMask}
                  data-modal-status={props.open ? 'open' : 'close'}
                  v-show={props.open}
                >
                  {(() => {
                    if (!props.open && props.destroyOnClose) {
                      return null;
                    }

                    const customNodes = getCustomNodes();
                    return customNodes.length ? (
                      customNodes
                    ) : (
                      <div class="dv-modal-box">{slots.default?.()}</div>
                    );
                  })()}
                </div>
              ) : null}
            </Transition>
          </Teleport>
        );
      };
    },
  },
  [style],
);
