# Tooltip

## Examples

tooltip

```html :::demo
<div class="pt-8 text-center">
  <dv-tooltip content="hello">
    <dv-button>hover me</dv-button>
  </dv-tooltip>
</div>
```

tooltip-open

```html :::demo
<div class="pt-8 text-center">
  <dv-tooltip content="hello" open>
    <dv-button>open by default</dv-button>
  </dv-tooltip>
</div>
```

tooltip-bottom

```html :::demo
<div class="pt-8 text-center">
  <dv-tooltip content="hello" open placement="bottom">
    <dv-button>bottom</dv-button>
  </dv-tooltip>
</div>
```

tooltip-left

```html :::demo
<div class="pt-8 text-center">
  <dv-tooltip content="hello" open placement="left">
    <dv-button>left</dv-button>
  </dv-tooltip>
</div>
```

tooltip-right

```html :::demo
<div class="pt-8 text-center">
  <dv-tooltip content="hello" open placement="right">
    <dv-button>right</dv-button>
  </dv-tooltip>
</div>
```

with colors

```html :::demo
<div
  class="text-center grid grid-cols-3 lg:grid-cols-5 my-10 place-items-center gap-y-10"
>
  <dv-tooltip content="hello" open placement="top" type="netural">
    <dv-button type="netural">netural</dv-button>
  </dv-tooltip>
  <dv-tooltip content="hello" open placement="top" type="primary">
    <dv-button type="primary">primary</dv-button>
  </dv-tooltip>
  <dv-tooltip content="hello" open placement="top" type="secondary">
    <dv-button type="secondary">secondary</dv-button>
  </dv-tooltip>
  <dv-tooltip content="hello" open placement="top" type="accent">
    <dv-button type="accent">accent</dv-button>
  </dv-tooltip>
  <dv-tooltip content="hello" open placement="top" type="info">
    <dv-button type="info">info</dv-button>
  </dv-tooltip>
  <dv-tooltip content="hello" open placement="top" type="success">
    <dv-button type="success">success</dv-button>
  </dv-tooltip>
  <dv-tooltip content="hello" open placement="top" type="warning">
    <dv-button type="warning">warning</dv-button>
  </dv-tooltip>
  <dv-tooltip content="hello" open placement="top" type="error">
    <dv-button type="error">error</dv-button>
  </dv-tooltip>
</div>
```

## Tooltip

### Attributes

| name | description | type                                                               | default |
| ---- | ----------- | ------------------------------------------------------------------ | ------- |
| type | color type  | netural, primary, secondary, accent, info, success, warning, error | netural |

Others attributes are same as `Popper`.
