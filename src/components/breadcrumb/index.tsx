import { component } from 'daisyui-vue/shared/styled';
import { AnchorHTMLAttributes, HTMLAttributes } from 'vue';
import style from './style';

export const Breadcrumb = component<HTMLAttributes>(
  {
    name: 'Breadcrumb',
    setup: (_, { slots }) => {
      return () => (
        <div class="dv-breadcrumbs breadcrumbs">
          <ul>{slots.default?.()}</ul>
        </div>
      );
    },
  },
  style,
);

export const BreadcrumbItem = component<AnchorHTMLAttributes>({
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
