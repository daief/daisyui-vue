import { componentV2 } from '@/shared/styled';
import { ExtractFromProps } from '@/shared/types/common';
import { isBool, isString, isUndefined } from '@/shared/utils';
import {
  createPopper,
  Instance,
  Placement,
  preventOverflow,
} from '@popperjs/core';
import {
  computed,
  getCurrentInstance,
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

export type ITriggerAction = 'contextMenu' | 'hover' | 'click' | 'focus';

const props = {
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
};

export type IPopperProps = ExtractFromProps<typeof props>;

export const Popper = componentV2<IPopperProps>({
  name: 'Popper',
  props,
  setup: (props, { slots }) => {
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
      if (
        state.popperIns &&
        state.popperIns.state.elements.reference === getClidEl()
      ) {
        return;
      }
      state.popperIns = createPopper(getClidEl(), popperNode.value, {
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
      finalActions,
      (_, _2, onInvalidate) => {
        const handleClickAway = (event: MouseEvent) => {
          if (!childRef.value) {
            return;
          }

          const el = childRef.value.el as HTMLElement;
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

        if (
          ['click', 'contextMenu'].some((t: ITriggerAction) =>
            finalActions.value.includes(t),
          )
        ) {
          document.addEventListener('click', handleClickAway);
          document.addEventListener('contextmenu', handleClickAway);
          onInvalidate(() => {
            document.removeEventListener('click', handleClickAway);
            document.removeEventListener('contextmenu', handleClickAway);
          });
        }
      },
      {
        immediate: true,
        flush: 'post',
      },
    );

    watch(
      [childRef, finalActions],
      (_, _2, onInvalidate) => {
        const unFns = [] as VoidFunction[];

        const on = (
          name: keyof DocumentEventMap,
          fn: any,
          bindBothChildAndPopper = false,
        ) => {
          const getEl = () => {
            const els = [getClidEl()];

            if (bindBothChildAndPopper) {
              els.push(popperNode.value);
            }
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

        const handleKeyDown = (e: KeyboardEvent) => {
          if (e.key === 'Escape' && props.escapeKeyCloseable) {
            getClidEl()?.blur();
            change(false);
          }
        };

        if (finalActions.value.includes('click')) {
          on('click', () => change(true));
          on('keydown', handleKeyDown);
        }

        if (finalActions.value.includes('hover')) {
          on('mouseenter', handleEnter, true);
          on('mouseleave', handleLeave, true);
        }

        if (finalActions.value.includes('focus')) {
          on(
            'focus',
            () => {
              state.isFocus = true;
              handleEnter();
            },
            true,
          );
          on(
            'blur',
            () => {
              state.isFocus = false;
              handleLeave();
            },
            true,
          );
          on('keydown', handleKeyDown);
        }

        if (finalActions.value.includes('contextMenu')) {
          on('contextmenu', (e) => {
            e.preventDefault();
          });
          on('mouseup', (e: MouseEvent) => {
            // 右键点击
            if (e.button === 2) {
              change(true);
            }
          });
          on('keydown', handleKeyDown);
        }

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
      () => [props.placement, childRef],
      () => {
        if (!finalShow.value) return;
        createIns();
        state.popperIns
          .setOptions({
            placement: props.placement,
          })
          .then(() => {
            update(finalShow.value);
          });
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
              {withDirectives(<div ref={popperNode}>{content}</div>, [
                [vShow, finalShow.value],
              ])}
            </Teleport>
          ) : null}
        </>
      );
    };
  },
});

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
