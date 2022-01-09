import { inject } from 'vue';
import { IStyles } from './styled';

export const CONTEXT_SYMBOL = Symbol('context');

export interface IDaisyuiVueContext {
  styles: IStyles;
}

export function useDaisyui() {
  return inject<IDaisyuiVueContext>(CONTEXT_SYMBOL);
}
