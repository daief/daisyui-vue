import { ISize } from '../../shared/types/common';
import { IButtonShape } from './button';

export const ctxKey = Symbol('ButtonGroup');

export interface ICtx {
  size: ISize;
  shape: IButtonShape;
  outline: boolean;
}
