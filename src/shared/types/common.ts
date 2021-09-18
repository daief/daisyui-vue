export type ISize = 'xs' | 'sm' | 'md' | 'lg';

/**
 * Bool => bool
 */
export type BoolConstructorToBase<T> = {
  [k in keyof T]: T[k] extends BooleanConstructor ? boolean : T[k];
};
