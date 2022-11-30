import { PropType } from 'vue';
import { IBrandColor, IColorType, ISize } from '../types/common';

export const sizeProps = {
  size: {
    type: String as PropType<ISize>,
    default: 'md',
  },
};

export const colorTypeProps = {
  type: {
    type: String as PropType<IColorType>,
    default: 'neutral',
  },
};

export const brandTypeProps = {
  type: {
    type: String as PropType<IBrandColor>,
    default: 'neutral',
  },
};
