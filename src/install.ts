import { App } from 'vue';
// import {
//   Button,
//   ButtonGroup,
//   Drawer,
//   Menu,
//   MenuItem,
//   Tabs,
//   Tab,
//   Table,
// } from './components';
import * as all from './components';

// const components = [Button, ButtonGroup, Drawer, Menu, MenuItem, Tabs, Tab, Table]

export function install(
  app: App,
  options?: {
    prefix?: string;
  },
) {
  const { prefix } = {
    prefix: 'Dv',
    ...options,
  };

  Object.keys(all).forEach((key) => {
    const el = all[key];
    if (typeof el === 'object' && 'setup' in el && /^[A-Z]/.test(el.name)) {
      app.component(prefix + el.name, el);
    }
  });
}
