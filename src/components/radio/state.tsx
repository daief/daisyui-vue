import { InputChangeEvent } from 'daisyui-vue/@types/dom';
import { ISize, IText } from 'daisyui-vue/shared/types/common';

export interface IRadioContext {
  value: IText;
  size: ISize;
  disabled: boolean;
  onChange: (e: InputChangeEvent) => void;
}

export const radioCtxKey = Symbol('RadioGroup');
