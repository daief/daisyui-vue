import { DefineComponent, defineComponent, Slots } from 'vue';
import { useStyleManager } from './ctx';

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
function component<Attrs = unknown, P = {}>(
  ...args: IComponentOptions<P, Attrs>
): DefineComponent<Attrs, any> {
  const [options, styles = []] = args;
  return defineComponent({
    ...(options as any),
    setup: (props, ctx) => {
      useStyleManager()?.insertCss(styles);
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
