# Input

## Examples

Text input with border

```html :::demo
<div class="text-center">
  <dv-input class="w-full max-w-xs" placeholder="Type here" />
</div>
```

Text input without border

```html :::demo
<div class="text-center">
  <dv-input class="w-full max-w-xs" :border="false" placeholder="Type here" />
</div>
```

Ghost (no background)

```html :::demo
<div class="text-center">
  <dv-input
    type="ghost"
    :border="false"
    class="w-full max-w-xs"
    placeholder="Type here"
  />
</div>
```

Input with colors

```html :::demo
<div class="text-center">
  <dv-input
    type="primary"
    class="w-full max-w-xs"
    placeholder="primary color"
  />
  <div class="py-1" />
  <dv-input
    type="secondary"
    class="w-full max-w-xs"
    placeholder="secondary color"
  />
  <div class="py-1" />
  <dv-input type="accent" class="w-full max-w-xs" placeholder="accent color" />
  <div class="py-1" />
  <dv-input type="info" class="w-full max-w-xs" placeholder="info color" />
  <div class="py-1" />
  <dv-input
    type="success"
    class="w-full max-w-xs"
    placeholder="success color"
  />
  <div class="py-1" />
  <dv-input
    type="warning"
    class="w-full max-w-xs"
    placeholder="warning color"
  />
  <div class="py-1" />
  <dv-input type="error" class="w-full max-w-xs" placeholder="error color" />
</div>
```

Input size

```html :::demo
<div class="text-center">
  <dv-input size="xs" class="w-full max-w-xs" placeholder="xs size" />
  <div class="py-1" />
  <dv-input size="sm" class="w-full max-w-xs" placeholder="sm size" />
  <div class="py-1" />
  <dv-input size="md" class="w-full max-w-xs" placeholder="md size" />
  <div class="py-1" />
  <dv-input size="lg" class="w-full max-w-xs" placeholder="lg size" />
</div>
```

Disabled

```html :::demo
<div class="text-center">
  <dv-input class="w-full max-w-xs" placeholder="disabled" disabled />
</div>
```

## Input

### Attributes

| name   | description      | type                                                                      | default |
| ------ | ---------------- | ------------------------------------------------------------------------- | ------- |
| type   | input color type | neutral, primary, secondary, accent, info, success, warning, error, ghost | neutral |
| size   | input size       | ISize                                                                     | md      |
| border | input border     | boolean                                                                   | true    |
