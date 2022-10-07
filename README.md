# daisyui-vue

基于 [daisyui](https://github.com/saadeghi/daisyui) 封装的 vue 组件库。

## Usage

全局注册：

```tsx
// main.ts
import daisyui from 'daisyui-vue';
import { createApp, defineComponent } from 'vue';

app.use(daisyui); // 注册

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

按需使用：

```tsx
// main.ts
import { installTheme } from 'daisyui-vue';

const app = createApp({
  // ...
});

app.use(installTheme); // 注册组件库 context，当需要提取首屏样式时使用，否则可以不注册

// App.tsx
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

SSR 提取首屏样式，避免 FOUC 问题：

```tsx
// entry-server.ts

export function render() {
  const app = createApp({
    // ...
  });

  const style = app.config.globalProperties.$daisyui.style.extractStyles(); // <style>...</style>

  const html = renderToString(app);

  return html.replace('<!-- YOUR_STYLE_PLACEHOLDER -->', style);
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
- [ ] footer
- [ ] hero
- [x] icon - 🛠 [xicons](https://github.com/07akioni/xicons)
  - [ ] context
- [ ] indicator
- [x] input
- [ ] kbd
- [x] link
- [x] mask
- [x] menu
- [x] modal
- [x] navbar
- [ ] pagination
- [x] progress
- [x] popper - 🆕 new
- [ ] swap - 🛠 refactor
- [ ] stack
- [ ] stat
- [ ] steps
- [ ] tab
- [ ] table
- [ ] toggle
- [x] tooltip - 🛠 refactor
- [ ] form-checkbox
- [ ] form-input
- [ ] form-radio
- [ ] form-range
- [ ] form-select
- [ ] form-textarea
- [ ] form-toggle
- [ ] mockup-code
- [ ] mockup-phone
- [ ] mockup-window

## 命名规则

- 事件名称，`onNameAction`：onMaskClick、onEscKeyDown
- 事件控制，`xxxYyable`: keyboardCloseable
- 响应式：mobile first
