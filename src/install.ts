import { App } from 'vue';
import * as all from './components';
import * as icons from './icons';

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

  [all, icons].forEach((set) => {
    Object.keys(set).forEach((key) => {
      const el = set[key];
      if (typeof el === 'object' && 'setup' in el && /^[A-Z]/.test(el.name)) {
        app.component(prefix + el.name, el);
      }
    });
  });
}
