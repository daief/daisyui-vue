# Space

## Examples

Space

```html :::demo
<dv-space>
  I'm a text
  <dv-button>button</dv-button>
</dv-space>
```

Vertical

```html :::demo
<dv-space direction="vertical">
  I'm a text
  <dv-button>button</dv-button>
  <dv-button>button2</dv-button>
</dv-space>
```

Spacing size

```tsx :::run
import { ref } from 'vue';

export default {
  setup: () => {
    const options = ['xs', 'sm', 'md', 'lg'].map((s) => ({
      label: s,
      value: s,
    }));
    const size = ref('md');
    return () => (
      <div class="space-y-4">
        <dv-radio-group options={options} v-model={size.value} />
        <br />
        <dv-space direction="vertical" spacing={size.value}>
          I'm a text
          <dv-button>button</dv-button>
          <dv-button>button2</dv-button>
        </dv-space>
      </div>
    );
  },
};
```

Align

```html :::run
<template>
  <div
    class="space-align-block"
    v-for="(align) in ['center', 'start', 'end', 'baseline']"
  >
    <dv-space :align="align">
      {{align}}
      <dv-button>button</dv-button>
      <div class="mock-block">block</div>
    </dv-space>
  </div>
</template>
<style scoped>
  .space-align-block {
    flex: none;
    margin: 8px 4px;
    padding: 4px;
    border: 1px solid #40a9ff;
  }
  .mock-block {
    display: inline-block;
    padding: 32px 8px 16px;
    background: rgba(150, 150, 150, 0.2);
  }
</style>
```

Custom spacing

```tsx :::run
import { ref } from 'vue';

export default {
  setup: () => {
    const size = ref('8px');
    return () => (
      <div class="space-y-4">
        <div>
          <dv-input
            value={size.value}
            onInput={(e) => (size.value = e.target.value)}
          />
        </div>
        <dv-space direction="vertical" spacing={size.value}>
          I'm a text
          <dv-button>button</dv-button>
          <dv-button>button2</dv-button>
        </dv-space>
      </div>
    );
  },
};
```

## Link

### Attributes

| name      | description       | type                         | default    |
| --------- | ----------------- | ---------------------------- | ---------- |
| align     | align             | start, end, center, baseline | -          |
| direction | direction         | vertical, horizontal         | horizontal |
| wrap      | items wrap or not | boolean                      | false      |
| block     | block or not      | boolean                      | false      |
| spacing   | items spacing     | ISize, string, number        | md         |
