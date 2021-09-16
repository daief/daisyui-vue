import { App } from 'vue';
import * as all from './components';

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
