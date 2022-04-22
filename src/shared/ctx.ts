import { inject, reactive } from 'vue';
import { createStyle, IStyle } from './styled';

export const CONTEXT_SYMBOL = Symbol('context');

export function createTheme() {
  const style = createStyle();
  const ctx: ITheme = reactive({
    style,
  });
  return ctx;
}

const builtInCtx = createTheme();

export interface ITheme {
  style: IStyle;
}

export function useDaisyui() {
  return inject<ITheme>(CONTEXT_SYMBOL, builtInCtx);
}
