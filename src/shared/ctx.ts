import { inject, reactive } from 'vue';
import { createStyle, IStyle } from './styled';
import { IBreakPoints } from './types/theme';

export const CONTEXT_SYMBOL = Symbol('context');

function createThemRules(): Omit<ITheme, 'style'> {
  return {
    breakpoints: {
      rule: {
        xs: 0,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
        '2xl': 1536,
      },
    },
  };
}

export function createTheme() {
  const style = createStyle();
  const ctx: ITheme = reactive({
    ...createThemRules(),
    style,
  });
  return ctx;
}

let builtInCtx: ITheme;

export interface ITheme {
  breakpoints: IBreakPoints;
  style: IStyle;
}

export function useTheme() {
  builtInCtx ||= createTheme();
  return inject<ITheme>(CONTEXT_SYMBOL, builtInCtx) || builtInCtx;
}
