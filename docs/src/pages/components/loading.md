<route lang="yml">
meta:
  category: data-display
</route>

# Loading

Loading shows an animation to indicate that something is loading.

## Examples

Loading spinner

```html :::demo
<div class="flex items-center space-x-2">
  <dv-loading size="xs" />
  <dv-loading size="sm" />
  <dv-loading size="md" />
  <dv-loading size="lg" />
</div>
```

Loading dots

```html :::demo
<div class="flex items-center space-x-2">
  <dv-loading variant="dots" size="xs" />
  <dv-loading variant="dots" size="sm" />
  <dv-loading variant="dots" size="md" />
  <dv-loading variant="dots" size="lg" />
</div>
```

Loading ring

```html :::demo
<div class="flex items-center space-x-2">
  <dv-loading variant="ring" size="xs" />
  <dv-loading variant="ring" size="sm" />
  <dv-loading variant="ring" size="md" />
  <dv-loading variant="ring" size="lg" />
</div>
```

Loading ball

```html :::demo
<div class="flex items-center space-x-2">
  <dv-loading variant="ball" size="xs" />
  <dv-loading variant="ball" size="sm" />
  <dv-loading variant="ball" size="md" />
  <dv-loading variant="ball" size="lg" />
</div>
```

Loading bars

```html :::demo
<div class="flex items-center space-x-2">
  <dv-loading variant="bars" size="xs" />
  <dv-loading variant="bars" size="sm" />
  <dv-loading variant="bars" size="md" />
  <dv-loading variant="bars" size="lg" />
</div>
```

Loading infinity

```html :::demo
<div class="flex items-center space-x-2">
  <dv-loading variant="infinity" size="xs" />
  <dv-loading variant="infinity" size="sm" />
  <dv-loading variant="infinity" size="md" />
  <dv-loading variant="infinity" size="lg" />
</div>
```

Loading with colors

```html :::demo
<div class="flex items-center space-x-2">
  <dv-loading color="neutral" />
  <dv-loading color="primary" />
  <dv-loading color="secondary" />
  <dv-loading color="accent" />
  <dv-loading color="info" />
  <dv-loading color="success" />
  <dv-loading color="warning" />
  <dv-loading color="error" />
  <dv-loading color="red" />
  <dv-loading color="#6cf" />
</div>
```

## Loading

### Attributes

| name    | description   | type                                      | default |
| ------- | ------------- | ----------------------------------------- | ------- |
| variant | loading style | spinner, dots, ring, ball, bars, infinity | spinner |
| size    | loading size  | ISize                                     | md      |
| color   | IColor,string | -                                         |
