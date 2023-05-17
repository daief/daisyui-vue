# daisyui-vue

Vue3 UI components based on [daisyui](https://github.com/saadeghi/daisyui).

## Usage

Install:

```bash
$ pnpm add daisyui-vue
# or
$ npm add daisyui-vue
# or
$ yarn add daisyui-vue
```

Import all(❌ not recommended):

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

Use as needed(👍 recommended):

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

  const styleTagStr = styleManager.extractStyles(); // <style>...</style>

  const html = renderToString(app);

  return html.replace('<!-- YOUR_STYLE_PLACEHOLDER -->', styleTagStr);
}
```

## Todo

- [x] style files
  - [x] auto require style conntent when using a component (now css-in-js)
    - [x] ~~it is easy to use in SSR, but there is no style on first render (`FOUC`, because css inserted by js)~~. Use `extractStyles` to extract critical css.
- [x] media query & responsive
- [x] refine style insertion detect(~~maybe use a content hash~~ self-increasing id)
- [x] pre insert all global style
- [ ] popper/modal/drawer animation(maybe some preset animations)
  - [x] modal, drawer
- [ ] refine theme usage

## Components

- [x] alert
- [x] artboard
- [x] avatar
- [x] badge
- [x] breadcrumb
- [x] button
- [x] button-group
- [x] card
- [ ] carousel
- [ ] collapse
- [x] counter 🆕 new
- [x] divider
- [x] drawer - 🛠 refactor
- [x] dropdown - 🛠 refactor(popper inside)
- [ ] widgets 🆕 new
  - [x] element
- [ ] footer
- [ ] hero
- [x] icon - 🛠 [xicons](https://github.com/07akioni/xicons)
- [x] indicator
- [x] input
- [x] kbd
- [x] link
- [x] mask
- [x] menu
- [x] modal
- [x] navbar
- [x] pagination
- [x] progress
  - [x] radial progress
- [x] popper - 🆕 new
- [x] space - 🆕 new
- [x] swap - 🛠 refactor
- [ ] stack
- [ ] stat
- [ ] steps
- [x] tab
- [x] table
- [x] toggle
- [x] tooltip - 🛠 refactor
- [x] form-checkbox
  - [x] checkbox-group
- [x] form-input
- [x] form-radio
  - [x] radio-group
- [ ] form-range
- [ ] form-select
- [x] form-textarea
- [ ] form-toggle
- [ ] mockup-code
- [ ] mockup-phone
- [ ] mockup-window

## 命名规则

- event handler name, `onNameAction`: onMaskClick、onEscKeyDown
- action flag name, `xxxYyable`: keyboardCloseable
- responsive: mobile first
