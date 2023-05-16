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
  ref,
  Ref,
  shallowRef,
  toRef,
  unref,
  watch,
} from 'vue';
import { componentV2 } from 'daisyui-vue/shared/styled';
import style from './style';
import {
  findInTree,
  getRenderResult,
  isElementVNode,
  isNil,
  isUndefined,
  IVueNode,
  tryCall,
} from 'daisyui-vue/shared/utils';
import { V_MODEL_EVENT } from 'daisyui-vue/shared/constants';
import { useTheme } from 'daisyui-vue/shared/ctx';

const ctx = Symbol('tabs');

const tabPanelType = Symbol('TabType');

type IType = 'bordered' | 'lifted' | 'boxed';

interface ITabItem {
  uid: number;
  name: IText | Ref<IText>;
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
  variant: {
    type: String as PropType<IType>,
    default: 'bordered',
  },
  size: {
    type: String as PropType<ISize>,
    default: 'md',
  },
  modelValue: {
    type: [String, Number] as PropType<IText>,
    default: void 0,
  },
  items: {
    type: Array as PropType<
      Array<{
        title: any;
        name: IText;
        content?: any;
      }>
    >,
    default: () => [],
  },
};
export type ITabsProps = ExtractFromProps<typeof tabsProps>;

export const Tabs = componentV2<ITabsProps, HTMLAttributes>(
  {
    name: 'Tabs',
    props: tabsProps,
    emits: [V_MODEL_EVENT],
    setup: (props, { slots, emit }) => {
      const theme = useTheme();
      const children: Record<number, ITabItem> = {};
      const tabItemList = shallowRef<ITabItem[]>([]);
      const finalIItems = computed(() =>
        props.items?.length
          ? props.items.map<ITabItem>((it, i) => ({
              uid: i,
              title: (_) => tryCall(it.title, () => _),
              content: (_) => tryCall(it.content, () => _),
              name: it.name,
            }))
          : tabItemList.value,
      );

      const innerValue = ref(finalIItems.value[0]?.name);

      const onChange = (name: IText) => {
        emit(V_MODEL_EVENT, name);
        innerValue.value = name;
      };

      const instance = getCurrentInstance()!;

      const ctxVal: Ref<ICtx> = computed(() => ({
        type: props.variant!,
        size: props.size!,
        currentName: isUndefined(props.modelValue)
          ? innerValue.value
          : props.modelValue,
        onChange,
        onCollect: (it: ITabItem) => {
          if (!it.name) return;

          children[it.uid] = it;

          const tabNodeList = findInTree(
            instance!.subTree,
            (n) => n.type[tabPanelType],
          );
          const uids = tabNodeList.map((it) => it.component?.uid);
          if (uids.some((i) => isNil(i))) return;

          tabItemList.value = uids
            .map((uid) => children[uid!])
            .filter((p) => !!p);
        },
        onRemove: (uid) => {
          delete children[uid];
          tabItemList.value = tabItemList.value.filter((it) => it.uid !== uid);
        },
      }));

      provide(ctx, ctxVal);

      watch(finalIItems, () => {
        if (!isUndefined(props.modelValue)) return;
        const names = finalIItems.value.map((it) => it.name);
        if (!names.includes(innerValue.value)) {
          innerValue.value = unref(finalIItems.value[0]?.name);
        }
      });

      const tabsCls = computed(() => ({
        'dv-tabs': true,
        'dv-tabs-boxed': props.variant === 'boxed',
      }));

      return () => {
        return (
          <div class={[theme.className, 'dv-tabs-wrapper']}>
            {props.items?.length ? null : slots.default?.()}
            <div class={tabsCls.value}>
              {finalIItems.value.map((p) => (
                <TabTitle
                  key={unref(p.name)}
                  {...p}
                  type={props.variant}
                  size={props.size}
                />
              ))}
              {props.variant === 'lifted' ? (
                <div class="dv-tabs-lifted-item" />
              ) : null}
            </div>
            {finalIItems.value.map((t) => {
              const isActive = unref(t.name) === ctxVal.value.currentName;
              return (
                <div
                  key={t.uid}
                  class={[
                    'dv-tab-content',
                    {
                      'dv-tab-content--hidden': !isActive,
                    },
                  ]}
                >
                  {t.content({
                    active: isActive,
                  })}
                </div>
              );
            })}
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

      ctxVal?.value.onCollect({
        uid: ins.uid,
        // @ts-expect-error
        name: toRef(props, 'name'),
        title: renderTitle,
        content: renderContent,
      });

      onUnmounted(() => {
        ctxVal?.value.onRemove(ins.uid);
      });

      return () => null;
    },
  },
  style,
);

/** internal, for performance */
const TabTitle = componentV2<
  {},
  ITabItem & {
    type?: IType;
    size?: ISize;
  }
>({
  name: 'TabTitle',
  inheritAttrs: false,
  setup: (_, { attrs }) => {
    const ctxVal = inject<Ref<ICtx>>(ctx);
    const isTitleActive = computed(
      () => ctxVal?.value.currentName === unref(attrs.name),
    );

    const tabHeadCls = computed(() => [
      'dv-tab',
      {
        [`dv-tab-${attrs.type}`]: !!attrs.type,
        [`dv-tab-${attrs.size}`]: !!attrs.size,
      },
    ]);

    const handleOnClick = () => {
      ctxVal?.value.onChange(unref(attrs.name));
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
