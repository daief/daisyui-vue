import { useActiveChange } from 'daisyui-vue/shared/hooks/use-active-change';
import { componentV2 } from 'daisyui-vue/shared/styled';
import { ExtractFromProps } from 'daisyui-vue/shared/types/common';
import {
  debounce,
  getRenderResult,
  isString,
  isUndefined,
} from 'daisyui-vue/shared/utils';
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
import { useTheme } from 'daisyui-vue/shared/ctx';

export type ITriggerAction = 'contextMenu' | 'hover' | 'click' | 'focus';

export const popperProps = {
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
  disableTeleport: {
    type: Boolean,
    default: true,
  },
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
  escapeCloseable: {
    type: Boolean,
    default: true,
  },
  hideArrow: {
    type: Boolean,
    default: false,
  },
};

export type IPopperProps = ExtractFromProps<typeof popperProps>;

export const Popper = componentV2<
  IPopperProps,
  Omit<HTMLAttributes, 'onChange'>
>(
  {
    name: 'Popper',
    props: popperProps,
    inheritAttrs: false,
    setup: (props, { attrs, slots }) => {
      const theme = useTheme();
      const state = reactive({
        popperIns: null as Instance | null,
        isOpen: props.open,
        isFocus: false,
        /** 是否触发过 */
        hasTriggered: false,
        /** 子元素是否可见 */
        childElVisibility: true,
      });

      let enterTimer: ReturnType<typeof setTimeout> | null = null;
      let leaveTimer: ReturnType<typeof setTimeout> | null = null;

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
          ? acts.some((act) => finalActions.value?.includes(act))
          : finalActions.value?.includes(acts);

      const handleClose = () => {
        change(false);
      };

      const childRef = ref<VNode | null>(null);
      const popperNode = ref<HTMLElement | null>(null);
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
        if (!el || !popperNode.value) return;
        state.popperIns = createPopper(el, popperNode.value, {
          placement: props.placement,
          modifiers: [preventOverflow],
          strategy: 'fixed',
        });
      };

      const destroy = () => {
        if (state.popperIns) {
          state.popperIns.destroy();
          state.popperIns = null;
        }
      };

      useActiveChange(() => {
        const handleClickAway = (event: MouseEvent) => {
          const el = getClidEl();
          if (!el) {
            return;
          }

          if (
            !(['click', 'contextMenu'] as ITriggerAction[]).some((t) =>
              finalActions.value?.includes(t),
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
            props.escapeCloseable
          ) {
            getClidEl()?.blur();
            change(false);
          }
        };

        if (typeof document === 'undefined') return;

        // TODO 封装事件 hooks
        document.addEventListener('click', handleClickAway);
        document.addEventListener('contextmenu', handleClickAway);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
          document.removeEventListener('click', handleClickAway);
          document.removeEventListener('contextmenu', handleClickAway);
          document.removeEventListener('keydown', handleKeyDown);
        };
      });

      watch(
        childRef,
        (_, _2, onInvalidate) => {
          const unFns = [] as VoidFunction[];

          const on = (
            name: keyof DocumentEventMap,
            fn: any,
            bindBothChildAndPopper = false,
          ) => {
            const getEls = () => {
              const els = [getClidEl()];
              if (bindBothChildAndPopper && popperNode.value) {
                els.push(popperNode.value);
              }
              return els;
            };

            getEls().forEach((el) => {
              el?.addEventListener(name, fn);
            });

            const un = () => {
              getEls().forEach((el) => {
                el?.removeEventListener(name, fn);
              });
            };

            unFns.push(un);
            return un;
          };

          const enterDelay = 0;
          const leaveDelay = 0;

          const handleEnter = () => {
            clearTimeout(enterTimer!);
            clearTimeout(leaveTimer!);
            enterTimer = setTimeout(() => {
              change(true);
            }, enterDelay);
          };

          const handleLeave = () => {
            clearTimeout(enterTimer!);
            clearTimeout(leaveTimer!);
            leaveTimer = setTimeout(() => {
              change(false);
            }, leaveDelay);
          };

          // click
          on('click', () => {
            hasAction('click') && change(true);
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
            // 右键点击
            if (hasAction('contextMenu') && e.button === 2) {
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

      useElementStatusChange(
        () => getClidEl(),
        (visibilityChange) => {
          if (typeof visibilityChange === 'boolean') {
            state.childElVisibility = visibilityChange;
            visibilityChange && nextTick(() => state.popperIns?.update());
            return;
          }

          if (state.isOpen) {
            state.popperIns?.update();
          }
        },
      );

      useActiveChange(() => {
        finalShow.value && update(true);
        return () => {
          destroy();
        };
      });

      return () => {
        const children = slots.default?.();
        const content = getRenderResult('content', props, slots);

        childRef.value = children?.[0] || null;

        return (
          <>
            {children}
            {state.hasTriggered ? (
              <Teleport to="body" disabled={props.disableTeleport}>
                {withDirectives(
                  <div
                    {...attrs}
                    class={[theme.className, 'dv-popper-node']}
                    style={props.hideArrow ? '--popper-tail: 0px' : ''}
                    ref={popperNode}
                  >
                    <div class="dv-popper-container">
                      <div class="dv-popper-arrow" />
                      {content}
                    </div>
                  </div>,
                  [[vShow, finalShow.value && state.childElVisibility]],
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

// TODO maybe some problem
function useElementStatusChange(
  getVal: () => HTMLElement | undefined,
  cb: (visibilityChange?: boolean) => void,
) {
  watch(
    () => getVal(),
    (el, _, onInvalidate) => {
      if (!el) return;
      const debounceUpdate = debounce(cb, 233);
      const eventHandler = () => debounceUpdate();

      const mutation = () => {
        if (typeof MutationObserver === 'undefined') return;
        const observer = new MutationObserver((e) => {
          debounceUpdate();
        });

        observer.observe(el, {
          attributes: true,
          attributeFilter: ['style'],
        });

        return () => {
          observer.disconnect();
        };
      };

      const intersection = () => {
        if (typeof IntersectionObserver === 'undefined') return;
        const observer = new IntersectionObserver(
          ([e]) => {
            debounceUpdate(e.intersectionRatio > 0);
          },
          {
            threshold: [0],
          },
        );

        observer.observe(el);

        return () => observer.disconnect();
      };

      const mutationRes = mutation();
      const intersectionRes = intersection();

      el.addEventListener('animationend', eventHandler);
      el.addEventListener('transitionrun', eventHandler);

      onInvalidate(() => {
        mutationRes?.();
        intersectionRes?.();
        el.removeEventListener('animationend', eventHandler);
        el.removeEventListener('transitionrun', eventHandler);
      });
    },
    {
      flush: 'post',
    },
  );
}
