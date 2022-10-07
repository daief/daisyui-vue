# Swap

## Examples

Swap text

```html :::demo
<dv-swap on="ON" off="OFF" />
```

Swap volume icons

```tsx :::run
export default {
  setup: () => {
    return () => (
      <dv-swap
        on={() => <IconVolumeHigh size="48px" />}
        off={() => <IconVolumeMute size="48px" />}
      />
    );
  },
};
```

Swap icons with rotate effect

```html :::demo
<dv-swap animation="rotate">
  <template v-slot:on>
    <IconSunny size="48px" />
  </template>
  <template v-slot:off>
    <IconMoon size="48px" />
  </template>
</dv-swap>
```

Swap with flip effect

```tsx :::run
export default {
  setup: () => {
    return () => (
      <div class="text-center text-9xl">
        <dv-swap on="😈" off="😇" animation="flip" />
      </div>
    );
  },
};
```

Controlled swap

```tsx :::run
import { ref } from 'vue';

export default {
  setup: () => {
    const active = ref(false);
    return () => (
      <div class="text-center">
        <div class="py-2">
          <dv-button onClick={() => (active.value = true)}>on</dv-button>
          &nbsp;/&nbsp;
          <dv-button onClick={() => (active.value = false)}>off</dv-button>
        </div>
        <div class="text-9xl">
          <dv-swap on="🥳" off="😭" animation="flip" active={active.value} />
        </div>
      </div>
    );
  },
};
```

## Swap

### Attributes

| name      | description                     | type         | default |
| --------- | ------------------------------- | ------------ | ------- |
| on        | render on                       | -            | -       |
| off       | render off                      | -            | -       |
| tag       | wrap elemnt tag                 | string       | label   |
| animation | animation effect                | rotate, flip | -       |
| active    | swap active status              | boolean      | -       |
| onChange  | swap active status change event | Function     | -       |

### Solts

| name | description |
| ---- | ----------- |
| on   | render on   |
| off  | render off  |
