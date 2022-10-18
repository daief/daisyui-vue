import { IBrandColor, ISize, IText } from 'daisyui-vue/shared/types/common';

export interface ICheckboxContext {
  value: IText[];
  size: ISize;
  disabled: boolean;
  onChange: (value: IText) => void;
  register: (value: IText) => void;
  cancel: (value: IText) => void;
}

export const checkboxCtxKey = Symbol('CheckboxGroup');
