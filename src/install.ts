import { App } from 'vue';
import * as all from './components';
import * as icons from './icons';
import { CONTEXT_SYMBOL, createTheme } from './shared/ctx';

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

  installTheme(app);

  [all, icons].forEach((set) => {
    Object.keys(set).forEach((key) => {
      const el = set[key];
      if (typeof el === 'object' && 'setup' in el && /^[A-Z]/.test(el.name)) {
        app.component(prefix + el.name, el);
      }
    });
  });
}

export function installTheme(app: App) {
  const ctx = createTheme();
  app.provide(CONTEXT_SYMBOL, ctx);
  app.config.globalProperties.$daisyui = ctx;
}
