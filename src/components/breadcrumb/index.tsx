import { componentV2 } from 'daisyui-vue/shared/styled';
import { AnchorHTMLAttributes, HTMLAttributes } from 'vue';
import style from './style';

export const Breadcrumb = componentV2<{}, HTMLAttributes>(
  {
    name: 'Breadcrumb',
    setup: (_, { slots }) => {
      return () => (
        <div class="dv-breadcrumbs">
          <ul>{slots.default?.()}</ul>
        </div>
      );
    },
  },
  style,
);

export const BreadcrumbItem = componentV2<{}, AnchorHTMLAttributes>({
  name: 'BreadcrumbItem',
  inheritAttrs: false,
  setup: (_, { attrs, slots }) => {
    return () => (
      <li>
        <a {...attrs}>{slots.default?.()}</a>
      </li>
    );
  },
});
