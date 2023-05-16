import { inject } from 'vue';
import { IThemeContext } from './types/theme';
import { createThemeLight } from './theme/themes';
import { StyleManager } from './style-manager';
import { isBrowser } from './utils';

export const THEME_CONTEXT_SYMBOL = Symbol('theme');
export const STYLE_MANAGER_CONTEXT_SYMBOL = Symbol('style-manager');

let builtInCtx: IThemeContext | null = null;
export function useTheme(): Readonly<IThemeContext> {
  const val = inject<IThemeContext | null>(THEME_CONTEXT_SYMBOL, builtInCtx);

  if (val) return val;

  if (!builtInCtx) {
    const buildInTheme = createThemeLight();
    builtInCtx = {
      ...buildInTheme,
      className: styleManager.registerTheme(buildInTheme).className,
    };
  }

  return builtInCtx;
}

const styleManager = new StyleManager();

export function useStyleManager() {
  // keep singleton in browser
  if (isBrowser) return styleManager;
  return inject<StyleManager>(STYLE_MANAGER_CONTEXT_SYMBOL);
}
