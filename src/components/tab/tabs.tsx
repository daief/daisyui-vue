// TODO SSR fail ?
import { ExtractFromProps, ISize, IText } from '../../shared/types/common';
import {
  cloneVNode,
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
import {
  findInTree,
  getRenderResult,
  isElementVNode,
  isNil,
  IVueNode,
} from 'daisyui-vue/shared/utils';

const ctx = Symbol('tabs');

const tabPanelType = Symbol('TabType');

type IType = 'bordered' | 'lifted' | 'boxed';

interface ITabItem {
  uid: number;
  name: Ref<IText>;
  title: (arg: { active: boolean }) => IVueNode[];
  content: (arg: { active: boolean }) => IVueNode[];
}

interface ICtx {
  type: IType;
  size: ISize;
  currentName: IText;
  onCollect: (it: ITabItem, preName?: string) => void;
  onRemove: (uid: number) => void;
  onChange: (val: IText) => void;
}

export const tabsProps = {
  type: {
    type: String as PropType<IType>,
    default: 'bordered',
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
        onChange,
        onCollect: (it: ITabItem) => {
          children[it.uid] = it;

          const tabNodeList = findInTree(
            instance!.subTree,
            (n) => n.type[tabPanelType],
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

      const tabsCls = computed(() => ({
        'dv-tabs': true,
        'dv-tabs-boxed': props.type === 'boxed',
      }));

      return () => {
        const vns = slots.default?.() || [];
        return (
          <div class="dv-tabs-wrapper">
            {vns}
            <div {...attrs} class={tabsCls.value}>
              {tabItemList.value.map((p) => (
                <TabTitle
                  key={p.name.value}
                  {...p}
                  type={props.type}
                  size={props.size}
                />
              ))}
              {props.type === 'lifted' ? (
                <div class="dv-tabs-lifted-item" />
              ) : null}
            </div>
            {tabItemList.value.map((t) => (
              <div
                key={t.uid}
                class={[
                  'dv-tab-content',
                  {
                    'dv-tab-content--hidden':
                      t.name.value !== ctxVal.value.currentName,
                  },
                ]}
              >
                {t.content({
                  active: t.name.value === ctxVal.value.currentName,
                })}
              </div>
            ))}
          </div>
        );
      };
    },
  },
  style,
);

export const tabPanelProps = {
  title: {
    default: '',
  },
  name: {
    required: true,
    type: [String, Number] as PropType<IText>,
  },
};

export type ITabPanelProps = ExtractFromProps<typeof tabPanelProps>;

export const TabPanel = componentV2<ITabPanelProps, HTMLAttributes>(
  {
    name: 'TabPanel',
    [tabPanelType]: true,
    props: tabPanelProps,
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

/** internal, for performance */
const TabTitle = componentV2<
  {},
  ITabItem & {
    type: IType;
    size: ISize;
  }
>({
  name: 'TabTitle',
  inheritAttrs: false,
  setup: (_, { attrs }) => {
    const ctxVal = inject<Ref<ICtx>>(ctx);
    const isTitleActive = computed(
      () => ctxVal.value.currentName === attrs.name.value,
    );

    const tabHeadCls = computed(() => [
      'dv-tab',
      {
        [`dv-tab-${attrs.type}`]: !!attrs.type,
        [`dv-tab-${attrs.size}`]: !!attrs.size,
      },
    ]);

    const handleOnClick = () => {
      ctxVal.value.onChange(attrs.name.value);
    };

    const titleProps = computed(() => ({
      class: [
        tabHeadCls.value,
        {
          'dv-tab-active': isTitleActive.value,
        },
      ],
      onClick: handleOnClick,
    }));

    return () => {
      const titleNodes = attrs.title({ active: isTitleActive.value });
      return isElementVNode(titleNodes[0]) ? (
        cloneVNode(titleNodes[0], titleProps.value)
      ) : (
        <a {...titleProps.value}>{titleNodes}</a>
      );
    };
  },
});
