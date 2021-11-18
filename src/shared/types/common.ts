import { PropType } from 'vue';

export type ISize = 'xs' | 'sm' | 'md' | 'lg';

export type IStateColor = 'info' | 'success' | 'warning' | 'error';

export type IBrandColor = 'netural' | 'primary' | 'secondary' | 'accent';

export type IColorType = IBrandColor | IStateColor;

/**
 * Bool => bool
 */
export type BoolConstructorToBase<T> = {
  [k in keyof T]: T[k] extends BooleanConstructor ? boolean : T[k];
};

type ExtractFromPropType<T> = T extends PropType<infer U> ? U : T;

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
