import { createVNode, defineComponent } from 'vue';

export function styled<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  emotionClassName: string,
): (props: JSX.IntrinsicElements[K]) => JSX.Element {
  return defineComponent({
    // name: '',
    functional: true,
    setup:
      (_, { slots }) =>
      () =>
        createVNode(
          tag,
          {
            class: emotionClassName,
          },
          [slots?.default()],
        ),
  }) as any;
}
