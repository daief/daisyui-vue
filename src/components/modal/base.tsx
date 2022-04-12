import { useEventListener } from '@/shared/hooks/useEventListener';
import { componentV2 } from '@/shared/styled';
import { ExtractFromProps } from '@/shared/types/common';
import { getRenderResult } from '@/shared/utils';
import {
  computed,
  PropType,
  reactive,
  StyleValue,
  Teleport,
  vShow,
  watch,
  withDirectives,
} from 'vue';
import style from './style/base.less';

export const modalBaseProps = {
  disableTeleport: {
    type: Boolean,
    default: false,
  },
  container: {
    type: [Function, String, Object] as PropType<
      string | Element | (() => Element)
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

  custom: { default: '' },
  // TODO
  destroyOnClose: Boolean,
};

export type IModalBaseProps = ExtractFromProps<typeof modalBaseProps>;

export const ModalBase = componentV2<IModalBaseProps>(
  {
    name: 'ModalBase',
    props: modalBaseProps,
    inheritAttrs: false,
    setup: (props, { slots, attrs }) => {
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

      return () => {
        const toContainer =
          typeof props.container === 'function'
            ? props.container()
            : props.container;

        const customNode = getRenderResult('custom', props, slots);

        return state.hasTriggered ? (
          <Teleport disabled={props.disableTeleport} to={toContainer}>
            {withDirectives(
              <div
                {...attrs}
                tabindex={-1}
                role="presentation"
                class="dv-modal-base"
                style={maskStyle.value}
                onClick={handleClickMask}
              >
                {customNode || (
                  <div class="dv-modal-box">{slots.default?.()}</div>
                )}
              </div>,
              [[vShow, props.open]],
            )}
          </Teleport>
        ) : null;
      };
    },
  },
  [style],
);
