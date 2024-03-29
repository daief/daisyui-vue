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
  class="text-center grid grid-cols-1 lg:grid-cols-5 my-10 place-items-center gap-y-12"
>
  <dv-tooltip content="hello" open placement="top" variant="neutral">
    <dv-button variant="neutral">neutral</dv-button>
  </dv-tooltip>
  <dv-tooltip content="hello" open placement="top" variant="primary">
    <dv-button variant="primary">primary</dv-button>
  </dv-tooltip>
  <dv-tooltip content="hello" open placement="top" variant="secondary">
    <dv-button variant="secondary">secondary</dv-button>
  </dv-tooltip>
  <dv-tooltip content="hello" open placement="top" variant="accent">
    <dv-button variant="accent">accent</dv-button>
  </dv-tooltip>
  <dv-tooltip content="hello" open placement="top" variant="info">
    <dv-button variant="info">info</dv-button>
  </dv-tooltip>
  <dv-tooltip content="hello" open placement="top" variant="success">
    <dv-button variant="success">success</dv-button>
  </dv-tooltip>
  <dv-tooltip content="hello" open placement="top" variant="warning">
    <dv-button variant="warning">warning</dv-button>
  </dv-tooltip>
  <dv-tooltip content="hello" open placement="top" variant="error">
    <dv-button variant="error">error</dv-button>
  </dv-tooltip>
</div>
```

## Tooltip

### Attributes

| name    | description | type                                                               | default |
| ------- | ----------- | ------------------------------------------------------------------ | ------- |
| variant | color type  | neutral, primary, secondary, accent, info, success, warning, error | neutral |

Others attributes are same as `Popper`.
