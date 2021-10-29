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
