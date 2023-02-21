# Toggle

## Examples

Toggle

```html :::demo
<div class="text-center">
  <dv-toggle />
</div>
```

Toggle color

```html :::demo
<div class="text-center space-y-2 flex items-center flex-col">
  <dv-toggle
    defaultValue
    v-for="variant in ['neutral', 'primary', 'secondary', 'accent', 'info']"
    :variant="variant"
  />
</div>
```

Toggle size

```html :::demo
<div class="text-center">
  <dv-toggle size="xs" />
  <div class="h-2" />
  <dv-toggle size="sm" />
  <div class="h-2" />
  <dv-toggle size="md" />
  <div class="h-2" />
  <dv-toggle size="lg" />
</div>
```

## Toggle

### Attributes

| name         | description            | type                                | default |
| ------------ | ---------------------- | ----------------------------------- | ------- |
| v-model      | v-model checked status | boolean                             | -       |
| defaultValue | initial checked status | Function                            | -       |
| variant      | toogle color type      | neutral, primary, secondary, accent | neutral |
| size         | toogle size            | xs, sm, md, lg                      | -       |
