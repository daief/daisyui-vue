import {
  Comment,
  Fragment,
  isVNode,
  Slots,
  VNode,
  VNodeNormalizedChildren,
} from 'vue';

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

/** 是否 comment 类型 */
export function isCommentVNode(n: IVueNode) {
  if (!isVNode(n)) return false;
  return n.type === Comment;
}

/** 是否 dom 元素类型 */
export function isElementVNode(n: IVueNode): n is VNode {
  return isVNode(n) && !!n.type && typeof n.type === 'string';
}

/**
 * 递归拍散 vnode 节点
 */
export function flatUntilNotFragment(
  n?: IVueNode | IVueNode[],
  opts?: {
    keepEmpty?: boolean;
  },
): IVueNode[] {
  const { keepEmpty } = { ...opts };

  if (isNil(n)) return [];

  const res: IVueNode[] = [];

  oneToArray<IVueNode>(n).forEach(function walkIn(it: IVueNode) {
    if (isNil(it)) {
      return res.push(...(keepEmpty ? [it] : []));
    }

    if (!isVNode(it)) {
      if (Array.isArray(it)) return it.forEach(walkIn as any);
      else return res.push(it);
    }

    if (isCommentVNode(it)) {
      return res.push(...(keepEmpty ? [it] : []));
    }

    if (it.type !== Fragment) {
      return res.push(it);
    }

    oneToArray<IVueNode>(it.children).forEach(walkIn);
  });

  return res;
}

export function oneToArray<T>(o: T | T[]): T[] {
  if (Array.isArray(o)) return o;
  return isNil(o) ? [] : [o];
}

export function tryCall(funcOrVal: any, args: () => any = () => void 0) {
  return typeof funcOrVal === 'function' ? funcOrVal(args()) : funcOrVal;
}

/**
 * 从 props、slots 中解析 render 方法的内容
 * @param key
 * @param props
 * @param slots
 * @param renderArg
 * @returns
 */
export function getRenderResult(
  key: string | [propsKey: string, slotsKey: string],
  props: any = {},
  slots: Readonly<Slots> = {},
  renderArg: () => any = () => void 0,
): IVueNode[] {
  const [propsKey, slotsKey] = typeof key === 'string' ? [key, key] : key;
  const getPropsResult = () => {
    const propVal = props[propsKey];
    return tryCall(propVal, renderArg);
  };
  const getSlotsResult = () => slots[slotsKey]?.(renderArg());
  return oneToArray(getSlotsResult() || getPropsResult());
}

export type IVueNode =
  | VNode
  | VNodeNormalizedChildren
  | Array<VNode | VNodeNormalizedChildren>;

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
