import { DefineComponent, defineComponent, Slots } from 'vue';
import { useDaisyui } from './ctx';

export const EMOTION_SYMBOL = Symbol('emotion');

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
  return defineComponent({
    ...(options as any),
    setup: (props, ctx) => {
      useDaisyui()?.styles.insertCss(styles);
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
export function componentV2<Props = unknown, Attrs = unknown>(
  ...args: IComponentOptions<Props, Props & Attrs>
) {
  return component<Props & Attrs, Props>(
    // @ts-ignore
    ...args,
  );
}

export interface IStyles {
  insertCss: (css: string | string[]) => void;
  extractStyles: () => string;
}

export function createStyles(): IStyles {
  const m = new Map<string, boolean>();
  const STYLE_ATTR = `daisyui-vue="${VERSION}"`;

  let style: HTMLStyleElement = null;
  if (typeof document !== 'undefined') {
    style = document.querySelector(`style[${STYLE_ATTR}]`);

    if (!style) {
      style = document.createElement('style');
      style.setAttribute('daisyui-vue', VERSION);
      document.head.prepend(style);
    }
  }

  return {
    insertCss: (css: string | string[]) => {
      css = Array.isArray(css) ? css : [css];

      let appendText = '';
      const styleText = style.textContent || '';

      css.forEach((text) => {
        if (styleText.includes(text)) return;
        appendText += `${text}\n`;
        m.set(text, true);
      });

      style?.append(appendText);
    },
    /**
     * 提取首屏样式
     * @returns
     */
    extractStyles: () => {
      let text = '';
      for (const it of m.entries()) {
        text += it[0];
      }
      return `<style ${STYLE_ATTR}>${text}</style>`;
    },
  };
}
