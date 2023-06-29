import globalStyles from 'daisyui-vue/components/_styles/global';
import { themeVariable } from './theme/define';
import type { ITheme } from './types/theme';
import { isBrowser } from './utils';

interface IStyleFile {
  css: string;
  id: number;
}

const STYLE_ATTR = `daisyui-vue="${VERSION}"`;
const CSS_MAP_PROP = '__DAISYUI_VUE_CSS_MAP__';

function themeToCss(theme: ITheme): string {
  return [
    `color-scheme: ${theme.variables.scheme}`,
    ...Object.entries(theme.variables.rule).map(
      ([varName, varValue]) => `${themeVariable[varName]}: ${varValue}`,
    ),
    `color: ${themeVariable['base-content'][0]}`,
  ].join(';');
}

export class StyleManager {
  private cssMap: Map<
    /* style id*/ number,
    /* css content or empty string */ string
  >;
  private themeMap: Map<
    /* theme name */ string,
    {
      count: number;
      styleNode: HTMLStyleElement | null;
      className: string;
      css: string;
    }
  >;
  private styleNode: HTMLStyleElement | null = null;

  constructor() {
    this.themeMap = new Map();

    if (isBrowser) {
      this.styleNode = document.querySelector(`style[${STYLE_ATTR}]`);
      if (!this.styleNode) {
        this.styleNode = document.createElement('style');
        this.styleNode.setAttribute('daisyui-vue', VERSION);
        document.head.prepend(this.styleNode);
      }

      this.cssMap = this.styleNode[CSS_MAP_PROP] || new Map();
      this.styleNode[CSS_MAP_PROP] ||= this.cssMap;

      const ids = (this.styleNode.dataset.ids || '').split(',');
      ids.forEach((id) => {
        this.cssMap.set(Number(id), '');
      });
    } else {
      this.cssMap = new Map();
    }

    this.insertCss(globalStyles);
  }

  insertCss(css: IStyleFile | IStyleFile[]) {
    css = Array.isArray(css) ? css : [css];

    let appendText = '';

    css.forEach((stl) => {
      if (this.cssMap.has(stl.id)) return;
      appendText += `${stl.css}\n`;
      this.cssMap.set(stl.id, stl.css);
    });

    this.styleNode?.append(appendText);
  }

  registerTheme(theme: ITheme): { className: string } {
    const item = this.themeMap.get(theme.name) || {
      count: 0,
      styleNode: null,
      className: '',
      css: '',
    };
    item.count++;
    this.themeMap.set(theme.name, item);

    if (!item.className) {
      item.className = CLASSNAME_UNIQUE + '_' + theme.name;
    }

    if (!item.styleNode && isBrowser) {
      item.styleNode = document.createElement('style');
      try {
        this.styleNode?.before(item.styleNode);
      } catch (error) {
        console.warn(`insert theme [${item.className}] error:`, error);
      }
    }

    const themeCss = `.${item.className}{${themeToCss(theme)}}`;
    item.css = themeCss;

    if (item.styleNode) {
      item.styleNode.innerHTML = themeCss;
    }
    return { className: item.className };
  }

  unregisterTheme(theme: ITheme) {
    const item = this.themeMap.get(theme.name);
    if (!item) return;
    item.count--;
    if (item.count > 0) return;
    this.themeMap.delete(theme.name);
    item.styleNode?.remove();
  }

  extractStyles() {
    let text = '';
    let ids = '';

    for (const [, theme] of this.themeMap.entries()) {
      text += theme.css;
    }

    for (const [id, css] of this.cssMap.entries()) {
      text += css;
      if (ids) {
        ids += ',';
      }
      ids += id;
    }

    return `<style ${STYLE_ATTR} data-ids="${ids}">${text}</style>`;
  }
}
