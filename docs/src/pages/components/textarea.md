# Textarea

## Examples

Textarea

```html :::demo
<div class="text-center">
  <dv-textarea placeholder="Type here" />
</div>
```

Textarea with border

```html :::demo
<div class="text-center">
  <dv-textarea border placeholder="Type here" />
</div>
```

Ghost (no background)

```html :::demo
<div class="text-center">
  <dv-textarea variant="ghost" placeholder="Type here" />
</div>
```

Textarea with colors

```html :::demo
<div class="text-center">
  <dv-textarea variant="primary" placeholder="primary color" />
  <div class="py-1" />
  <dv-textarea variant="secondary" placeholder="secondary color" />
  <div class="py-1" />
  <dv-textarea variant="accent" placeholder="accent color" />
  <div class="py-1" />
  <dv-textarea variant="info" placeholder="info color" />
  <div class="py-1" />
  <dv-textarea variant="success" placeholder="success color" />
  <div class="py-1" />
  <dv-textarea variant="warning" placeholder="warning color" />
  <div class="py-1" />
  <dv-textarea variant="error" placeholder="error color" />
</div>
```

## Textarea

### Attributes

| name    | description         | type                                                                      | default |
| ------- | ------------------- | ------------------------------------------------------------------------- | ------- |
| variant | textarea color type | neutral, primary, secondary, accent, info, success, warning, error, ghost | neutral |
| border  | textarea border     | boolean                                                                   | true    |
