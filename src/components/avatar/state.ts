import { ISize } from 'daisyui-vue/shared/types/common';
import { cssUnit } from 'daisyui-vue/shared/utils';

export const ctxAvatarGroupKey = Symbol('AvatarGroup');

export const sizeMap: Record<ISize, number> = {
  xs: 24,
  sm: 32,
  md: 40,
  lg: 64,
};

export interface IAvatarGroupCtx {
  size?: string | number;
}

export function getSizeValue(size: string | number = '') {
  return cssUnit(sizeMap[size] || size);
}
