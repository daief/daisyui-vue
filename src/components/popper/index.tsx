import { componentV2 } from '@/shared/styled';
import { ExtractFromProps } from '@/shared/types/common';
import { isString, isUndefined } from '@/shared/utils';
import {
  createPopper,
  Instance,
  Placement,
  preventOverflow,
} from '@popperjs/core';
import {
  computed,
  HTMLAttributes,
  nextTick,
  onActivated,
  onBeforeUnmount,
  onDeactivated,
  onMounted,
  PropType,
  reactive,
  ref,
  Teleport,
  VNode,
  vShow,
  watch,
  withDirectives,
} from 'vue';
import style from './style/index.less';

export type ITriggerAction = 'contextMenu' | 'hover' | 'click' | 'focus';

export const props = {
  content: {
    default: '',
  },
  open: {
    type: Boolean,
    default: void 0,
  },
  placement: {
    type: String as PropType<Placement>,
    default: 'auto',
  },
  disableTeleport: Boolean,
  disabled: Boolean,
  onChange: {
    type: Function as PropType<(v: boolean) => void>,
  },
  triggerAction: {
    type: [String, Array] as PropType<ITriggerAction | ITriggerAction[]>,
    default: 'hover',
  },
  outsideCloseable: {
    type: Boolean,
    default: true,
  },
  escapeKeyCloseable: {
    type: Boolean,
    default: true,
  },
  hideArrow: {
    type: Boolean,
    default: false,
  },
};

export type IPopperProps = ExtractFromProps<typeof props>;

export const Popper = componentV2<
  IPopperProps,
  Omit<HTMLAttributes, 'onChange'>
>(
  {
    name: 'Popper',
    props,
    inheritAttrs: false,
    setup: (props, { attrs, slots }) => {
      const state = reactive({
        popperIns: null as Instance,
        isOpen: false,
        isFocus: false,
        hasTriggered: false,
      });

      let enterTimer = null;
      let leaveTimer = null;

      const finalShow = computed(() =>
        props.disabled
          ? false
          : isUndefined(props.open)
          ? state.isOpen
          : !!props.open,
      );

      const finalActions = computed(() => {
        if (!props.triggerAction) return ['hover'] as ITriggerAction[];
        if (isString(props.triggerAction)) return [props.triggerAction];
        if (Array.isArray(props.triggerAction)) return props.triggerAction;
      });

      const hasAction = (acts: ITriggerAction | ITriggerAction[]) =>
        Array.isArray(acts)
          ? acts.some((act) => finalActions.value.includes(act))
          : finalActions.value.includes(acts);

      const handleClose = () => {
        change(false);
      };

      const childRef = ref<VNode>(null);
      const popperNode = ref<HTMLElement>(null);
      const getClidEl = () => childRef.value?.el as HTMLElement | undefined;

      const update = (v: boolean) => {
        let funWrap = (fn: VoidFunction) => fn();

        if (!state.hasTriggered) {
          state.hasTriggered = true;
          funWrap = nextTick;
        }

        funWrap(() => {
          v && createIns();
          props.onChange?.(v);
          state.isOpen = v;
          nextTick(() => {
            state.popperIns?.update();
          });
        });
      };

      const change = (v: boolean) => {
        if (v !== finalShow.value) {
          update(v);
        }
      };

      const createIns = () => {
        destroy();
        const el = getClidEl();
        if (!el) return;
        state.popperIns = createPopper(el, popperNode.value, {
          placement: props.placement,
          modifiers: [preventOverflow],
        });
      };

      const destroy = () => {
        if (state.popperIns) {
          state.popperIns.destroy();
          state.popperIns = null;
        }
      };

      watch(
        () => null,
        (_, _2, onInvalidate) => {
          const handleClickAway = (event: MouseEvent) => {
            const el = getClidEl();
            if (!el) {
              return;
            }

            if (
              !['click', 'contextMenu'].some((t: ITriggerAction) =>
                finalActions.value.includes(t),
              )
            ) {
              return;
            }

            const doc = (el && el.ownerDocument) || document;

            if (
              doc.documentElement &&
              doc.documentElement.contains(event.target as any) &&
              !el.contains(event.target as any) && // 子节点不包含event.target
              !popperNode.value?.contains(event.target as any) // Popper节点不包含event.target
            ) {
              // onClickAway && onClickAway(event);
              if (props.outsideCloseable) {
                handleClose();
              }
            }
          };

          const handleKeyDown = (e: KeyboardEvent) => {
            if (
              hasAction(['click', 'contextMenu', 'focus']) &&
              e.key === 'Escape' &&
              props.escapeKeyCloseable
            ) {
              getClidEl()?.blur();
              change(false);
            }
          };

          document.addEventListener('click', handleClickAway);
          document.addEventListener('contextmenu', handleClickAway);
          document.addEventListener('keydown', handleKeyDown);
          onInvalidate(() => {
            document.removeEventListener('click', handleClickAway);
            document.removeEventListener('contextmenu', handleClickAway);
            document.removeEventListener('keydown', handleKeyDown);
          });
        },
        {
          immediate: true,
          flush: 'post',
        },
      );

      watch(
        childRef,
        (_, _2, onInvalidate) => {
          const unFns = [] as VoidFunction[];

          const on = (
            name: keyof DocumentEventMap,
            fn: any,
            bindBothChildAndPopper = false,
          ) => {
            const getEl = () => {
              const els = [getClidEl()];
              bindBothChildAndPopper && els.push(popperNode.value);
              return els;
            };

            getEl().forEach((el) => {
              el?.addEventListener(name, fn);
            });

            const un = () => {
              getEl().forEach((el) => {
                el?.removeEventListener(name, fn);
              });
            };

            unFns.push(un);
            return un;
          };

          const enterDelay = 0;
          const leaveDelay = 0;

          const handleEnter = () => {
            clearTimeout(enterTimer);
            clearTimeout(leaveTimer);
            enterTimer = setTimeout(() => {
              change(true);
            }, enterDelay);
          };

          const handleLeave = () => {
            clearTimeout(enterTimer);
            clearTimeout(leaveTimer);
            leaveTimer = setTimeout(() => {
              change(false);
            }, leaveDelay);
          };

          // click
          on('click', () => {
            hasAction('click');
            change(true);
          });

          // hover
          on('mouseenter', () => hasAction('hover') && handleEnter(), true);
          on('mouseleave', () => hasAction('hover') && handleLeave(), true);

          // focus
          on(
            'focus',
            () => {
              if (!hasAction('focus')) return;
              state.isFocus = true;
              handleEnter();
            },
            true,
          );
          on(
            'blur',
            () => {
              if (!hasAction('focus')) return;
              state.isFocus = false;
              handleLeave();
            },
            true,
          );

          // contextMenu
          on('contextmenu', (e) => {
            if (!hasAction('contextMenu')) return;
            e.preventDefault();
          });
          on('mouseup', (e: MouseEvent) => {
            if (!hasAction('contextMenu')) return;
            // 右键点击
            if (e.button === 2) {
              change(true);
            }
          });

          onInvalidate(() => {
            unFns.forEach((un) => un());
          });
        },
        {
          immediate: true,
          flush: 'post',
        },
      );

      watch(
        [() => props.placement, () => getClidEl()],
        () => {
          if (!finalShow.value || !state.hasTriggered) return;
          update(true);
        },
        {
          flush: 'post',
        },
      );

      onMounted(() => {
        finalShow.value && update(true);
      });

      onBeforeUnmount(() => {
        destroy();
      });

      onActivated(() => {
        finalShow.value && update(true);
      });

      onDeactivated(() => {
        destroy();
      });

      return () => {
        const children = slots.default?.();
        const content = getRenderResult('content', props, slots);

        childRef.value = children?.[0];

        return (
          <>
            {children}
            {state.hasTriggered ? (
              <Teleport to="body" disabled={props.disableTeleport}>
                {withDirectives(
                  <div
                    {...attrs}
                    class={[
                      'dv-popper-node',
                      {
                        'with-arrow': !props.hideArrow,
                      },
                    ]}
                    ref={popperNode}
                  >
                    <div class="popper-container">
                      <div class="popper-arrow" />
                      {content}
                    </div>
                  </div>,
                  [[vShow, finalShow.value]],
                )}
              </Teleport>
            ) : null}
          </>
        );
      };
    },
  },
  [style],
);

function getRenderResult(
  key: string,
  props: any,
  slots: any,
  renderArgs: () => any = () => void 0,
) {
  return (
    slots[key]?.(renderArgs()) ||
    (typeof props[key] === 'function' ? props[key](renderArgs()) : props[key])
  );
}
