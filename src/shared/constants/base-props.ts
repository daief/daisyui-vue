import { PropType } from 'vue';
import {
  IBrandColor,
  IColorType,
  IColorTypeWithGhost,
  ISize,
} from '../types/common';

export const sizeProps = {
  size: {
    type: String as PropType<ISize>,
    default: 'md',
  },
};

export const colorVariantProps = {
  variant: {
    type: String as PropType<IColorType>,
    default: 'neutral',
  },
};

export const colorVariantWithGhostProps = {
  variant: {
    type: String as PropType<IColorTypeWithGhost>,
    default: 'neutral',
  },
};

export const brandVariantProps = {
  variant: {
    type: String as PropType<IBrandColor>,
    default: 'neutral',
  },
};

/**
 * @deprecated
 */
export const colorTypeProps = {
  type: {
    type: String as PropType<IColorType>,
    default: 'neutral',
  },
};

/**
 * @deprecated
 */
export const brandTypeProps = {
  type: {
    type: String as PropType<IBrandColor>,
    default: 'neutral',
  },
};
