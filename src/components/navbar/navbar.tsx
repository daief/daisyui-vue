import { defineComponent } from '@vue/runtime-core';

export const Navbar = defineComponent({
  name: 'Navbar',
  setup: (_, { slots }) => {
    return () => <div class="navbar">{slots.default?.()}</div>;
  },
});

export const NavbarStart = defineComponent({
  name: 'NavbarStart',
  setup: (_, { slots }) => {
    return () => <div class="navbar-start">{slots.default?.()}</div>;
  },
});

export const NavbarCenter = defineComponent({
  name: 'NavbarCenter',
  setup: (_, { slots }) => {
    return () => <div class="navbar-center">{slots.default?.()}</div>;
  },
});

export const NavbarEnd = defineComponent({
  name: 'NavbarEnd',
  setup: (_, { slots }) => {
    return () => <div class="navbar-end">{slots.default?.()}</div>;
  },
});
