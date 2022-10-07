import { CSSProperties, PropType, Ref, StyleValue } from 'vue';

export type ISize = 'xs' | 'sm' | 'md' | 'lg';

export type IStateColor = 'info' | 'success' | 'warning' | 'error';

export type IBrandColor = 'netural' | 'primary' | 'secondary' | 'accent';

export type IColorType = IBrandColor | IStateColor;

export type IColorTypeWithGhost = IColorType | 'ghost';

type ExtractFromPropType<T> = T extends PropType<infer U> ? U : any;

/**
 * 从 props 对象类型中反推出类型
 */
export type ExtractFromProps<T> = {
  [k in keyof T]?: ExtractFromPropType<
    T[k] extends {
      type: any;
    }
      ? T[k]['type']
      : T[k]
  >;
};

export interface IStyleProps {
  class?: any;
  style?: StyleValue;
}

export type IMaybeRef<T> = T | Ref<T>;
