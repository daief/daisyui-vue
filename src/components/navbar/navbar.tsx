import { component } from 'daisyui-vue/shared/styled';
import { HTMLAttributes } from 'vue';
import style from './style';

export const Navbar = component<HTMLAttributes>(
  {
    name: 'Navbar',
    setup: (_, { slots }) => {
      return () => <div class="navbar">{slots.default?.()}</div>;
    },
  },
  style,
);

export const NavbarStart = component<HTMLAttributes>(
  {
    name: 'NavbarStart',
    setup: (_, { slots }) => {
      return () => <div class="navbar-start">{slots.default?.()}</div>;
    },
  },
  style,
);

export const NavbarCenter = component<HTMLAttributes>(
  {
    name: 'NavbarCenter',
    setup: (_, { slots }) => {
      return () => <div class="navbar-center">{slots.default?.()}</div>;
    },
  },
  style,
);

export const NavbarEnd = component<HTMLAttributes>(
  {
    name: 'NavbarEnd',
    setup: (_, { slots }) => {
      return () => <div class="navbar-end">{slots.default?.()}</div>;
    },
  },
  style,
);
