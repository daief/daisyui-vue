import { Slots } from 'vue';

export const isBrowser = typeof window !== 'undefined';

export function cssUnit(unit: string | number) {
  if (typeof unit === 'number') {
    return (unit || 0) + 'px';
  }
  return unit || '';
}

export function isBool(v: any): v is boolean {
  return typeof v === 'boolean';
}

export function isUndefined(v: any): v is undefined {
  return typeof v === 'undefined';
}

export function isString(v: any): v is string {
  return typeof v === 'string';
}

export function isNil(v: any) {
  return [null, void 0].includes(v);
}

/**
 * 从 props、slots 中解析 render 方法的内容
 * @param key
 * @param props
 * @param slots
 * @param renderArgs
 * @returns
 */
export function getRenderResult(
  key: string,
  props: any,
  slots: Readonly<Slots>,
  renderArgs: () => any = () => void 0,
) {
  return (
    slots[key]?.(renderArgs()) ||
    (typeof props[key] === 'function' ? props[key](renderArgs()) : props[key])
  );
}

export function debounce<F extends (...args: any) => any>(
  fn: F,
  timeout: number,
): (...args: Parameters<F>) => void {
  let updateTimer: any = null;

  const result = (...args) => {
    clearTimeout(updateTimer);
    updateTimer = setTimeout(() => {
      fn(...args);
    }, timeout);
  };

  return result;
}
