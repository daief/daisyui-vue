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

export function component<Attrs = unknown, P = {}>(
  options: {
    name: string;
    props?: any;
    inheritAttrs?: boolean;
    emits?: string[];
    setup: (
      props: P,
      ctx: {
        attrs: Omit<Attrs, keyof P>;
        slots: Slots;
        emit: any;
        expose: (exposed?: Record<string, any>) => void;
      },
    ) => any;
    [k: string]: any;
  },
  styles: string[] = [],
): DefineComponent<Attrs, any> {
  insertCss(styles);
  return defineComponent(options as any);
}
