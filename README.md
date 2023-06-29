# daisyui-vue(WIP)

Vue3 UI components based on [daisyui](https://github.com/saadeghi/daisyui).

> <small>Work is busy, and progress is slow.</small>

## Usage

Installation:

```bash
$ pnpm add daisyui-vue
# or
$ npm add daisyui-vue
# or
$ yarn add daisyui-vue
```

Import All(❌ not recommended):

```tsx
// main.ts
import daisyui from 'daisyui-vue';
import { createApp, defineComponent } from 'vue';

app.use(daisyui); // register all components expect icons

// App.tsx
const App = defineComponent({
  // ...
  setup: () => {
    return () => {
      return (
        <div>
          <dv-button>click</dv-button>
        </div>
      );
    };
  },
});
```

Import On-demand(👍 recommended):

```tsx
// App.tsx
// import what you need
import { Button } from 'daisyui-vue';

const App = defineComponent({
  // ...
  setup: () => {
    return () => {
      return (
        <div>
          <Button>click</Button>
        </div>
      );
    };
  },
});
```

Avoid `FOUC` problem when SSR:

```tsx
// entry-server.ts
import { STYLE_MANAGER_CONTEXT_SYMBOL, StyleManager } from 'daisyui-vue';

export function render() {
  const app = createApp({
    // ...
  });

  const styleManager = new StyleManager();
  app.provide(STYLE_MANAGER_CONTEXT_SYMBOL, styleManager);

  const html = renderToString(app);

  const styleTagStr = styleManager.extractStyles(); // <style>...</style>

  return html.replace('<!-- YOUR_STYLE_PLACEHOLDER -->', styleTagStr);
}
```

## TODOs

- [x] style files
  - [x] auto require style conntent when using a component (now css-in-js)
    - [x] ~~it is easy to use in SSR, but there is no style on first render (`FOUC`, because css inserted by js)~~. Use `extractStyles` to extract critical css.
- [x] media query & responsive
- [x] refine style insertion detect(~~maybe use a content hash~~ self-increasing id)
- [x] pre insert all global style
- [ ] popper/modal/drawer animation(maybe some preset animations)
  - [x] modal, drawer
- [x] refine theme usage
- [ ] inline-block(radio, checkbox, toggle) vertical-align
- [ ] fix types check

## Naming Rules

- event handler name, `onNameAction`: onMaskClick、onEscKeyDown
- action flag name, `xxxYyable`: keyboardCloseable
- responsive: mobile first
