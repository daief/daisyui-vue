import { isVNode, Slots, VNode, VNodeNormalizedChildren } from 'vue';

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
  key: string | [propsKey: string, slotsKey: string],
  props: any = {},
  slots: Readonly<Slots> = {},
  renderArgs: () => any = () => void 0,
) {
  const [propsKey, slotsKey] = typeof key === 'string' ? [key, key] : key;
  const getPropsResult = () => {
    const propVal = props[propsKey];
    return typeof propVal === 'function' ? propVal(renderArgs()) : propVal;
  };
  const getSlotsResult = () => slots[slotsKey]?.(renderArgs());
  return getPropsResult() ?? getSlotsResult();
}

type IVueNode = VNode | VNodeNormalizedChildren;

export function findInTree(
  root: IVueNode | IVueNode[],
  finder: (node: VNode) => boolean,
) {
  const vnodes = Array.isArray(root) ? root : [root];
  const result: VNode[] = [];

  vnodes.forEach((child) => {
    if (Array.isArray(child)) {
      result.push(...findInTree(child, finder));
      return;
    }

    if (!isVNode(child)) {
      return;
    }

    if (finder(child)) {
      result.push(child);
    } else if (Array.isArray(child.children)) {
      result.push(...findInTree(child.children, finder));
    } else if (child.component?.subTree) {
      result.push(...findInTree(child.component.subTree, finder));
    }
  });

  return result;
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
