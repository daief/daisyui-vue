# Progress

## Examples

progress

```html :::demo
<div class="w-full">
  <dv-progress />
  <dv-progress :value="10" />
  <dv-progress :value="70" />
  <dv-progress :value="100" />
</div>
```

primary color

```html :::demo
<div class="w-full">
  <dv-progress type="primary" />
  <dv-progress :value="10" type="primary" />
  <dv-progress :value="70" type="primary" />
  <dv-progress :value="100" type="primary" />
</div>
```

secondary color

```html :::demo
<div class="w-full">
  <dv-progress type="secondary" />
  <dv-progress :value="10" type="secondary" />
  <dv-progress :value="70" type="secondary" />
  <dv-progress :value="100" type="secondary" />
</div>
```

accent color

```html :::demo
<div class="w-full">
  <dv-progress type="accent" />
  <dv-progress :value="10" type="accent" />
  <dv-progress :value="70" type="accent" />
  <dv-progress :value="100" type="accent" />
</div>
```

info color

```html :::demo
<div class="w-full">
  <dv-progress type="info" />
  <dv-progress :value="10" type="info" />
  <dv-progress :value="70" type="info" />
  <dv-progress :value="100" type="info" />
</div>
```

success color

```html :::demo
<div class="w-full">
  <dv-progress type="success" />
  <dv-progress :value="10" type="success" />
  <dv-progress :value="70" type="success" />
  <dv-progress :value="100" type="success" />
</div>
```

warning color

```html :::demo
<div class="w-full">
  <dv-progress type="warning" />
  <dv-progress :value="10" type="warning" />
  <dv-progress :value="70" type="warning" />
  <dv-progress :value="100" type="warning" />
</div>
```

error color

```html :::demo
<div class="w-full">
  <dv-progress type="error" />
  <dv-progress :value="10" type="error" />
  <dv-progress :value="70" type="error" />
  <dv-progress :value="100" type="error" />
</div>
```

Radial progress

```html :::demo
<dv-radial-progress :value="70" />
```

Different values

```html :::demo
<div class="w-full space-x-6 text-center">
  <dv-radial-progress :value="0" />
  <dv-radial-progress :value="20" />
  <dv-radial-progress :value="60" />
  <dv-radial-progress :value="80" />
  <dv-radial-progress :value="100" />
</div>
```

Type

```html :::demo
<div
  class="w-full text-center grid grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center"
>
  <dv-radial-progress :value="60" />
  <dv-radial-progress :value="60" type="primary" />
  <dv-radial-progress :value="60" type="secondary" />
  <dv-radial-progress :value="60" type="accent" />
  <dv-radial-progress :value="60" type="info" />
  <dv-radial-progress :value="60" type="success" />
  <dv-radial-progress :value="60" type="warning" />
  <dv-radial-progress :value="60" type="error" />
</div>
```

Custom style

```html :::demo
<div class="w-full space-x-6 text-center">
  <dv-radial-progress :value="50" class="text-red-500">Red</dv-radial-progress>
  <dv-radial-progress
    :value="20"
    class="text-white bg-blue-400 border-blue-400 border-4"
  />
</div>
```

Custom size and custom thickness

```html :::demo
<div class="w-full space-x-6 space-y-6 text-center">
  <dv-radial-progress
    :value="70"
    size="12rem"
    thickness="2px"
    class="text-2xl"
  />
  <dv-radial-progress :value="70" size="12rem" thickness="10px" />
</div>
```

## Progress

### Attributes

| name  | description            | type                                                               | default |
| ----- | ---------------------- | ------------------------------------------------------------------ | ------- |
| type  | progress color type    | netural, primary, secondary, accent, info, success, warning, error | netural |
| value | current progress value | number                                                             | 0       |
| max   | max progress value     | number                                                             | 100     |

## RadialProgress

### Attributes

| name      | description                   | type                                                               | default   |
| --------- | ----------------------------- | ------------------------------------------------------------------ | --------- |
| type      | progress color type           | netural, primary, secondary, accent, info, success, warning, error | netural   |
| value     | current progress value, 0~100 | number                                                             | 0         |
| size      | circle size                   | number, string                                                     | 5rem      |
| thickness | thickness size                | number, string                                                     | size / 10 |
