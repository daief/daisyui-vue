import { ExtractFromProps, ISize, IText } from '../../shared/types/common';
import {
  computed,
  getCurrentInstance,
  HTMLAttributes,
  inject,
  onUnmounted,
  PropType,
  provide,
  Ref,
  shallowRef,
  toRef,
} from 'vue';
import { componentV2 } from 'daisyui-vue/shared/styled';
import style from './style';
import { findInTree, getRenderResult, isNil } from 'daisyui-vue/shared/utils';

const ctx = Symbol('tabs');

const tabType = Symbol('TabType');

type IType = 'bordered' | 'lifted' | 'boxed';

interface ITabItem {
  uid: number;
  name: Ref<IText>;
  title: (active: boolean) => any;
  content: (active: boolean) => any;
}

interface ICtx {
  type: IType;
  size: ISize;
  currentName: IText;
  onCollect: (it: ITabItem, preName?: string) => void;
  onRemove: (uid: number) => void;
}

export const tabsProps = {
  type: {
    type: String as PropType<IType>,
  },
  size: {
    type: String as PropType<ISize>,
    default: 'md',
  },
  modelValue: {
    type: [String, Number] as PropType<IText>,
  },
};
export type ITabsProps = ExtractFromProps<typeof tabsProps>;

export const Tabs = componentV2<ITabsProps, HTMLAttributes>(
  {
    name: 'Tabs',
    props: tabsProps,
    inheritAttrs: false,
    emits: ['update:modelValue'],
    setup: (props, { slots, emit, attrs }) => {
      const children: Record<number, ITabItem> = {};
      const tabItemList = shallowRef<ITabItem[]>([]);

      const onChange = (name: IText) => {
        emit('update:modelValue', name);
      };

      const instance = getCurrentInstance()!;

      const ctxVal: Ref<ICtx> = computed(() => ({
        type: props.type,
        size: props.size,
        currentName: props.modelValue,
        onCollect: (it: ITabItem) => {
          children[it.uid] = it;

          const tabNodeList = findInTree(
            instance!.subTree,
            (n) => n.type[tabType],
          );
          const uids = tabNodeList.map((it) => it.component?.uid);
          if (uids.some((i) => isNil(i))) return;

          tabItemList.value = uids
            .map((uid) => children[uid])
            .filter((p) => !!p);
        },
        onRemove: (uid) => {
          delete children[uid];
          tabItemList.value = tabItemList.value.filter((it) => it.uid !== uid);
        },
      }));

      provide(ctx, ctxVal);

      const tabHeadCls = computed(() => [
        'dv-tab',
        `dv-tab-${props.type}`,
        `dv-tab-${props.size}`,
      ]);

      return () => {
        const vns = slots.default?.() || [];

        return (
          <div class="dv-tabs-wrapper">
            <div
              {...attrs}
              class={{
                'dv-tabs': true,
                'dv-tabs-boxed': props.type === 'boxed',
              }}
            >
              {tabItemList.value.map((p) => (
                <a
                  class={[
                    tabHeadCls.value,
                    {
                      'dv-tab-active':
                        ctxVal.value.currentName === p.name.value,
                    },
                  ]}
                  onClick={() => {
                    onChange(p.name.value);
                  }}
                >
                  {p.title(ctxVal.value.currentName === p.name.value)}
                </a>
              ))}
              {props.type === 'lifted' ? (
                <div class="dv-tabs-lifted-item" />
              ) : null}
            </div>
            {vns}
            {tabItemList.value.map((t) => (
              <div
                class={[
                  'dv-tab-content',
                  {
                    'dv-tab-content--hidden':
                      t.name.value !== ctxVal.value.currentName,
                  },
                ]}
              >
                {t.content(t.name.value === ctxVal.value.currentName)}
              </div>
            ))}
          </div>
        );
      };
    },
  },
  style,
);

export const tabProps = {
  title: {
    type: [String, Number] as PropType<IText>,
  },
  name: {
    type: [String, Number] as PropType<IText>,
  },
};

export type ITabProps = ExtractFromProps<typeof tabProps>;

export const Tab = componentV2<ITabProps, HTMLAttributes>(
  {
    name: 'Tab',
    [tabType]: true,
    props: tabProps,
    setup: (props, { slots }) => {
      const ctxVal = inject<Ref<ICtx>>(ctx);
      const renderTitle = () => getRenderResult('title', props, slots);
      const renderContent = () =>
        getRenderResult(['content', 'default'], props, slots);

      const ins = getCurrentInstance()!;

      ctxVal.value.onCollect({
        uid: getCurrentInstance()!.uid,
        name: toRef(props, 'name'),
        title: renderTitle,
        content: renderContent,
      });

      onUnmounted(() => {
        ctxVal.value.onRemove(ins.uid);
      });

      return () => {
        return null;
      };
    },
  },
  style,
);
