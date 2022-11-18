# Indicator

## Examples

Empty badge as indicator

```html :::demo
<dv-indicator>
  <dv-indicator-item>
    <dv-badge type="secondary" />
  </dv-indicator-item>
  <div class="grid w-32 h-32 bg-base-300 place-items-center"> content </div>
</dv-indicator>
```

Badge as indicator

```html :::demo
<dv-indicator>
  <dv-indicator-item>
    <dv-badge type="primary">New</dv-badge>
  </dv-indicator-item>
  <div class="grid w-32 h-32 bg-base-300 place-items-center"> content </div>
</dv-indicator>
```

for button

```html :::demo
<dv-indicator>
  <dv-indicator-item>
    <dv-badge type="secondary">99+</dv-badge>
  </dv-indicator-item>
  <dv-button>INBOX</dv-button>
</dv-indicator>
```

for avatar

```html :::demo
<dv-indicator>
  <dv-indicator-item>
    <dv-badge type="secondary">Typing...</dv-badge>
  </dv-indicator-item>
  <dv-avatar src="https://placeimg.com/160/160/people" :size="80" />
</dv-indicator>
```

for tab

```html :::demo
<dv-tabs type="lifted" modelValue="1">
  <dv-tab-panel name="1">
    <template #title>
      <dv-indicator>
        <dv-indicator-item>
          <dv-badge type="secondary">1</dv-badge>
        </dv-indicator-item>
        <a>Tiny 1</a>
      </dv-indicator>
    </template>
  </dv-tab-panel>
  <dv-tab-panel name="2" title="Tiny2" />
  <dv-tab-panel name="3" title="Tiny3" />
</dv-tabs>
```

for an input

```html :::demo
<dv-indicator>
  <dv-indicator-item>
    <dv-badge>Required</dv-badge>
  </dv-indicator-item>
  <dv-input placeholder="Your email address" />
</dv-indicator>
```

A button as an indicator for a card

```html :::demo
<dv-indicator>
  <dv-indicator-item placement="bottom-end">
    <dv-button type="primary">Apply</dv-button>
  </dv-indicator-item>
  <dv-card
    class="bg-base-100"
    bordered
    title="Job Title"
    description="Rerum reiciendis beatae tenetur excepturi"
  ></dv-card>
</dv-indicator>
```

multiple indicators

```tsx :::run
import { Badge } from 'daisyui-vue';

export default {
  setup: () => {
    const vs = 'top-middle-bottom'.split('-');
    const hs = 'start-center-end'.split('-');
    const ls = [];
    vs.forEach((v) => {
      hs.forEach((h) => {
        ls.push(v + '-' + h);
      });
    });
    return () => (
      <dv-indicator>
        {ls.map((p) => (
          <dv-indicator-item key={p} placement={p} tag={Badge} type="secondary">
            {p}
          </dv-indicator-item>
        ))}
        <div class="grid w-80 h-32 bg-base-300 place-items-center">content</div>
      </dv-indicator>
    );
  },
};
```

## Indicator

### Attributes

| name | description    | type           | default |
| ---- | -------------- | -------------- | ------- |
| tag  | render element | string, object | div     |

## IndicatorItem

### Attributes

| name      | description        | type                                                                                                             | default |
| --------- | ------------------ | ---------------------------------------------------------------------------------------------------------------- | ------- |
| tag       | render element     | string, object                                                                                                   | div     |
| placement | indicator position | top-start, top-center, top-end, middle-start, middle-center, middle-end, bottom-start, bottom-center, bottom-end | top-end |
