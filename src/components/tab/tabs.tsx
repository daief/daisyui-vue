import { ISize } from '../../shared/types/common';
import {
  computed,
  defineComponent,
  Fragment,
  inject,
  PropType,
  provide,
  Ref,
  VNode,
} from 'vue';

export const _tabs =
  'tab-bordered tab-boxed tab-lifted tab-xs tab-sm tab-md tab-lg';

const ctx = Symbol('tabs');

const TabType = Symbol('TabType');

type IType = 'bordered' | 'lifted' | 'boxed';

interface ICtx {
  type: IType;
  size: ISize;
  currentName: string;
  onChange: (name: string) => void;
}

export const tabsProps = {
  type: {
    type: String as PropType<IType>,
  },
  size: {
    type: String as PropType<ISize>,
    default: 'md',
  },
  value: String,
};

export const Tabs = defineComponent({
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
        if (type && type[TabType]) {
          list.push(node.props);
        } else if (type === Fragment || type === 'template') {
          getPaneInstanceFromSlot(node.children as any, list);
        }
      });
      return list;
    };

    const tabHeadCls = computed(() => [
      'tab',
      `tab-${props.type}`,
      `tab-${props.size}`,
    ]);

    return () => {
      const vns = slots.default?.() || [];
      const tabPropsList = getPaneInstanceFromSlot(vns);

      return (
        <>
          <div {...attrs} class="tabs">
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
              <div class="flex-1 cursor-default tab tab-lifted" />
            ) : null}
          </div>
          {vns}
        </>
      );
    };
  },
});

export const Tab = defineComponent({
  name: 'Tab',
  [TabType]: true,
  props: {
    title: String,
    name: String,
  },
  setup: (props, { slots }) => {
    const ctxVal = inject<Ref<ICtx>>(ctx);
    return () => (
      <div
        class={[
          'mt-2',
          {
            hidden: props.name !== ctxVal.value.currentName,
          },
        ]}
      >
        {slots.default?.()}
      </div>
    );
  },
});
