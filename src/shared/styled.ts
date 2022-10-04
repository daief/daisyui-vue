import { DefineComponent, defineComponent, Slots } from 'vue';
import { useTheme } from './ctx';
import { isBrowser } from './utils';
import globalStyles from '../components/_styles/global';

export const EMOTION_SYMBOL = Symbol('emotion');

interface IStyleFile {
  css: string;
  id: number;
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
  styles?: IStyleFile[],
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
  return defineComponent({
    ...(options as any),
    setup: (props, ctx) => {
      useTheme().style.insertCss(styles);
      // @ts-ignore
      return options.setup(props, ctx);
    },
  });
}

/**
 * - Props 类型
 * - Attar props 外的类型，如原生 div 的一些属性
 * @param args
 * @returns
 */
export function componentV2<Props = {}, Attrs = unknown>(
  ...args: IComponentOptions<Props, Props & Attrs>
) {
  return component<Props & Attrs, Props>(
    // @ts-ignore
    ...args,
  ) as DefineComponent<Props & Attrs, {}>;
}

export interface IStyle {
  insertCss: (css: IStyleFile | IStyleFile[]) => void;
  extractStyles: () => string;
}

export function createStyle(): IStyle {
  const m = new Map<number, string>();
  const STYLE_ATTR = `daisyui-vue="${VERSION}"`;

  let style: HTMLStyleElement | null = null;
  if (isBrowser) {
    style = document.querySelector(`style[${STYLE_ATTR}]`);

    if (!style) {
      style = document.createElement('style');
      style.setAttribute('daisyui-vue', VERSION);
      document.head.prepend(style);
    } else {
      const ids = (style.dataset.ids || '').split(',');
      ids.forEach((id) => {
        m.set(Number(id), '');
      });
    }
  }

  const insertCss = (css: IStyleFile | IStyleFile[]) => {
    css = Array.isArray(css) ? css : [css];

    let appendText = '';

    css.forEach((stl) => {
      if (m.has(stl.id)) return;
      appendText += `${stl.css}\n`;
      m.set(stl.id, stl.css);
    });

    style?.append(appendText);
  };

  insertCss(globalStyles);

  return {
    insertCss,
    /**
     * 提取首屏样式
     */
    extractStyles: () => {
      let text = '';
      let ids = '';
      for (const [id, css] of m.entries()) {
        text += css;
        if (ids) {
          ids += ',';
        }
        ids += id;
      }
      return `<style ${STYLE_ATTR} data-ids="${ids}">${text}</style>`;
    },
  };
}
