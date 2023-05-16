import { componentV2 } from 'daisyui-vue/shared/styled';
import { HTMLAttributes } from 'vue';
import style from './style';
import { useTheme } from 'daisyui-vue/shared/ctx';

export const Navbar = componentV2<HTMLAttributes>(
  {
    name: 'Navbar',
    setup: (_, { slots }) => {
      const theme = useTheme();
      return () => (
        <div class={[theme.className, 'dv-navbar']}>{slots.default?.()}</div>
      );
    },
  },
  style,
);

export const NavbarStart = componentV2<HTMLAttributes>(
  {
    name: 'NavbarStart',
    setup: (_, { slots }) => {
      const theme = useTheme();
      return () => (
        <div class={[theme.className, 'dv-navbar-start']}>
          {slots.default?.()}
        </div>
      );
    },
  },
  style,
);

export const NavbarCenter = componentV2<HTMLAttributes>(
  {
    name: 'NavbarCenter',
    setup: (_, { slots }) => {
      const theme = useTheme();
      return () => (
        <div class={[theme.className, 'dv-navbar-center']}>
          {slots.default?.()}
        </div>
      );
    },
  },
  style,
);

export const NavbarEnd = componentV2<HTMLAttributes>(
  {
    name: 'NavbarEnd',
    setup: (_, { slots }) => {
      const theme = useTheme();
      return () => (
        <div class={[theme.className, 'dv-navbar-end']}>
          {slots.default?.()}
        </div>
      );
    },
  },
  style,
);
