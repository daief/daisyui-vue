# Progress

## Examples

progress

```html :::demo
<div>
  <dv-progress />
  <dv-progress :value="10" />
  <dv-progress :value="70" />
  <dv-progress :value="100" />
</div>
```

primary color

```html :::demo
<div>
  <dv-progress type="primary" />
  <dv-progress :value="10" type="primary" />
  <dv-progress :value="70" type="primary" />
  <dv-progress :value="100" type="primary" />
</div>
```

secondary color

```html :::demo
<div>
  <dv-progress type="secondary" />
  <dv-progress :value="10" type="secondary" />
  <dv-progress :value="70" type="secondary" />
  <dv-progress :value="100" type="secondary" />
</div>
```

accent color

```html :::demo
<div>
  <dv-progress type="accent" />
  <dv-progress :value="10" type="accent" />
  <dv-progress :value="70" type="accent" />
  <dv-progress :value="100" type="accent" />
</div>
```

info color

```html :::demo
<div>
  <dv-progress type="info" />
  <dv-progress :value="10" type="info" />
  <dv-progress :value="70" type="info" />
  <dv-progress :value="100" type="info" />
</div>
```

success color

```html :::demo
<div>
  <dv-progress type="success" />
  <dv-progress :value="10" type="success" />
  <dv-progress :value="70" type="success" />
  <dv-progress :value="100" type="success" />
</div>
```

warning color

```html :::demo
<div>
  <dv-progress type="warning" />
  <dv-progress :value="10" type="warning" />
  <dv-progress :value="70" type="warning" />
  <dv-progress :value="100" type="warning" />
</div>
```

error color

```html :::demo
<div>
  <dv-progress type="error" />
  <dv-progress :value="10" type="error" />
  <dv-progress :value="70" type="error" />
  <dv-progress :value="100" type="error" />
</div>
```

## Progress

### Attributes

| name  | description            | type                                                               | default |
| ----- | ---------------------- | ------------------------------------------------------------------ | ------- |
| type  | progress color type    | netural, primary, secondary, accent, info, success, warning, error | netural |
| value | current progress value | number                                                             | 0       |
| max   | max progress value     | number                                                             | 100     |
