import { DefineComponent, defineComponent, Slots } from 'vue';

let cache: string[] = [];
let style: HTMLStyleElement = null;

export function insertCss(css: string | string[]) {
  if (typeof document === 'undefined') return;
  if (!style) {
    style = document.createElement('style');
    style.setAttribute('daisyui-vue', VERSION);
    document.head.prepend(style);
  }

  if (Array.isArray(css)) {
    cache.push(...css);
  } else {
    cache.push(css);
  }

  setTimeout(() => {
    const filterd = cache.filter((it, i) => cache.indexOf(it) === i);
    style.append(filterd.join('\n'));
    cache = [];
  });
}

type IComponentOptions<P, A> = [
  options: {
    name: string;
    props?: any;
    inheritAttrs?: boolean;
    emits?: string[];
    setup: (
      props: P,
      ctx: {
        attrs: Omit<A, keyof P>;
        slots: Slots;
        emit: any;
        expose: (exposed?: Record<string, any>) => void;
      },
    ) => any;
    [k: string]: any;
  },
  styles?: string[],
];

/**
 * - Attar 组件所有属性类型
 * - Props 仅 props 中的类型
 * @deprecated
 * @param options
 * @param styles
 * @returns
 */
export function component<Attrs = unknown, P = {}>(
  ...args: IComponentOptions<P, Attrs>
): DefineComponent<Attrs, any> {
  const [options, styles = []] = args;
  insertCss(styles);
  return defineComponent(options as any);
}

/**
 * - Props 类型
 * - Attar props 外的类型，如原生 div 的一些属性
 * @param args
 * @returns
 */
export function componentV2<Props = unknown, Attrs = unknown>(
  ...args: IComponentOptions<Props, Props & Attrs>
) {
  return component<Props & Attrs, Props>(
    // @ts-ignore
    ...args,
  );
}
