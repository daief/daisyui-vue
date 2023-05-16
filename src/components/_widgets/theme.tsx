import { THEME_CONTEXT_SYMBOL, useStyleManager } from 'daisyui-vue/shared/ctx';
import { componentV2 } from 'daisyui-vue/shared/styled';
import { ExtractFromProps } from 'daisyui-vue/shared/types/common';
import { ITheme, IThemeContext } from 'daisyui-vue/shared/types/theme';
import {
  HTMLAttributes,
  PropType,
  computed,
  h,
  provide,
  reactive,
  watch,
} from 'vue';

export const themeProviderProps = {
  theme: {
    type: Object as PropType<ITheme>,
    require: true,
  },
  wrapper: {
    type: [String, Boolean] as PropType<string | boolean>,
    default: 'div',
  },
};

export type IThemeProviderProps = ExtractFromProps<typeof themeProviderProps>;

export const ThemeProvider = componentV2<IThemeProviderProps, HTMLAttributes>({
  name: 'ThemeProvider',
  props: themeProviderProps,
  setup: (props, { slots }) => {
    const styleMgr = useStyleManager();
    const themeCtx: IThemeContext = reactive({} as any);
    const wrapperEl = computed(() => {
      if (typeof props.wrapper === 'string') return props.wrapper;
      if (props.wrapper) return 'div';
      return '';
    });

    watch(
      () => props.theme,
      (val, _, clear) => {
        if (val) {
          Object.assign(themeCtx, props.theme, {
            className: styleMgr?.registerTheme(val)?.className || '',
          });
        }
        clear(() => val && styleMgr?.unregisterTheme(val));
      },
      {
        immediate: true,
        flush: 'sync',
      },
    );

    provide(THEME_CONTEXT_SYMBOL, themeCtx);

    return () =>
      wrapperEl.value
        ? h(wrapperEl.value, { class: themeCtx.className }, slots.default?.())
        : slots.default?.();
  },
});
