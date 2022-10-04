import { ISize } from '../../shared/types/common';
import {
  computed,
  Fragment,
  HTMLAttributes,
  inject,
  PropType,
  provide,
  Ref,
  VNode,
} from 'vue';
import { component } from 'daisyui-vue/shared/styled';
import style from './style';

const ctx = Symbol('tabs');

const tabType = Symbol('TabType');

type IType = 'bordered' | 'lifted' | 'boxed';

interface ICtx {
  type: IType;
  size: ISize;
  currentName: string;
  onChange: (name: string) => void;
}

const tabsProps = {
  type: {
    type: String as PropType<IType>,
  },
  size: {
    type: String as PropType<ISize>,
    default: 'md',
  },
  value: String,
};
export interface ITabsProps {
  type?: IType;
  size?: ISize;
  value?: string;
}

export const Tabs = component<HTMLAttributes, ITabsProps>(
  {
    name: 'Tabs',
    props: tabsProps,
    inheritAttrs: false,
    emits: ['update:value'],
    setup: (props, { slots, emit, attrs }) => {
      const onChange = (name: string) => {
        emit('update:value', name);
      };

      const ctxVal: Ref<ICtx> = computed(() => ({
        type: props.type,
        size: props.size,
        currentName: props.value,
        onChange,
      }));

      provide(ctx, ctxVal);

      const getPaneInstanceFromSlot = (vnode: VNode[], list: any[] = []) => {
        Array.from((vnode || []) as ArrayLike<VNode>).forEach((node) => {
          const type = node.type;
          if (type && type[tabType]) {
            list.push(node.props);
          } else if (type === Fragment || type === 'template') {
            getPaneInstanceFromSlot(node.children as any, list);
          }
        });
        return list;
      };

      const tabHeadCls = computed(() => [
        'dv-tab tab',
        `tab-${props.type}`,
        `tab-${props.size}`,
      ]);

      return () => {
        const vns = slots.default?.() || [];
        const tabPropsList = getPaneInstanceFromSlot(vns);

        return (
          <>
            <div
              {...attrs}
              class={{
                'dv-tabs tabs': true,
                'tabs-boxed': props.type === 'boxed',
              }}
            >
              {tabPropsList.map((p) => (
                <a
                  class={[
                    tabHeadCls.value,
                    {
                      'tab-active': props.value === p.name,
                    },
                  ]}
                  onClick={() => {
                    onChange(p.name);
                  }}
                >
                  {p.title}
                </a>
              ))}
              {props.type === 'lifted' ? (
                <div class="dv-tabs__lifted-item" />
              ) : null}
            </div>
            {vns}
          </>
        );
      };
    },
  },
  style,
);

export const Tab = component<
  HTMLAttributes,
  {
    title?: string;
    name?: string;
  }
>(
  {
    name: 'Tab',
    [tabType]: true,
    props: {
      title: String,
      name: String,
    },
    setup: (props, { slots }) => {
      const ctxVal = inject<Ref<ICtx>>(ctx);
      return () => (
        <div
          class={[
            'dv-tab-content',
            {
              'dv-tab-content--hidden': props.name !== ctxVal.value.currentName,
            },
          ]}
        >
          {slots.default?.()}
        </div>
      );
    },
  },
  style,
);
