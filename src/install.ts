import { App, reactive } from 'vue';
import * as all from './components';
import * as icons from './icons';
import { CONTEXT_SYMBOL, IDaisyuiVueContext } from './shared/ctx';
import { createStyles } from './shared/styled';

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

  installContext(app);

  [all, icons].forEach((set) => {
    Object.keys(set).forEach((key) => {
      const el = set[key];
      if (typeof el === 'object' && 'setup' in el && /^[A-Z]/.test(el.name)) {
        app.component(prefix + el.name, el);
      }
    });
  });
}

export function installContext(app: App) {
  const ctx: IDaisyuiVueContext = reactive({
    styles: createStyles(),
  });

  app.provide(CONTEXT_SYMBOL, ctx);
  app.config.globalProperties.$daisyui = ctx;
}
