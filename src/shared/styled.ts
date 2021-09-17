let cache: string[] = [];
let style: HTMLStyleElement = null;

export function insertCss(css: string) {
  if (typeof document === 'undefined') return;
  if (!style) {
    style = document.createElement('style');
    style.setAttribute('daisyui-vue', VERSION);
    document.head.appendChild(style);
  }
  cache.push(css);
  setTimeout(() => {
    style.append(cache.join('\n'));
    cache = [];
  });
}
