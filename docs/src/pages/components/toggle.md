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
<div class="text-center">
  <dv-toggle checked />
  <div class="h-2" />
  <dv-toggle checked type="primary" />
  <div class="h-2" />
  <dv-toggle checked type="secondary" />
  <div class="h-2" />
  <dv-toggle checked type="accent" />
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

| name     | description                        | type                                | default |
| -------- | ---------------------------------- | ----------------------------------- | ------- |
| checked  | toggle checked status              | boolean                             | -       |
| onChange | toggle checked status change event | Function                            | -       |
| type     | toogle color type                  | neutral, primary, secondary, accent | neutral |
| size     | toogle size                        | xs, sm, md, lg                      | -       |
