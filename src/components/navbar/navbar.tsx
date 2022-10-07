import { componentV2 } from 'daisyui-vue/shared/styled';
import { HTMLAttributes } from 'vue';
import style from './style';

export const Navbar = componentV2<HTMLAttributes>(
  {
    name: 'Navbar',
    setup: (_, { slots }) => {
      return () => <div class="dv-navbar">{slots.default?.()}</div>;
    },
  },
  style,
);

export const NavbarStart = componentV2<HTMLAttributes>(
  {
    name: 'NavbarStart',
    setup: (_, { slots }) => {
      return () => <div class="dv-navbar-start">{slots.default?.()}</div>;
    },
  },
  style,
);

export const NavbarCenter = componentV2<HTMLAttributes>(
  {
    name: 'NavbarCenter',
    setup: (_, { slots }) => {
      return () => <div class="dv-navbar-center">{slots.default?.()}</div>;
    },
  },
  style,
);

export const NavbarEnd = componentV2<HTMLAttributes>(
  {
    name: 'NavbarEnd',
    setup: (_, { slots }) => {
      return () => <div class="dv-navbar-end">{slots.default?.()}</div>;
    },
  },
  style,
);
