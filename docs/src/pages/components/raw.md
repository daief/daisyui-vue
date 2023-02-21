# Raw

## Examples

background type

```html :::demo
<div class="space-y-2 p-2 w-full text-center">
  <dv-raw class="border-gray-400 border">div</dv-raw>
  <dv-raw variant="neutral">neutral</dv-raw>
  <dv-raw variant="primary">parimary</dv-raw>
  <dv-raw variant="secondary">secondary</dv-raw>
  <dv-raw variant="accent">accent</dv-raw>
  <dv-raw variant="info">info</dv-raw>
  <dv-raw variant="success">success</dv-raw>
  <dv-raw variant="warning">warning</dv-raw>
  <dv-raw variant="error">error</dv-raw>
  <dv-raw variant="base-100">base-100</dv-raw>
  <dv-raw variant="base-200">base-200</dv-raw>
  <dv-raw variant="base-300">base-300</dv-raw>
</div>
```

text color

```html :::demo
<div class="space-y-2 p-2 w-full text-center">
  <dv-raw color="primary">primary</dv-raw>
  <dv-raw color="info">info</dv-raw>
  <dv-raw color="base-content">base-content</dv-raw>

  <dv-raw color="red">color name</dv-raw>
  <dv-raw color="#6cf">#6cf</dv-raw>
  <dv-raw color="rgb(218 137 33)">rgb(218 137 33)</dv-raw>
</div>
```

html tag

```html :::demo
<div class="space-y-2 p-2 w-full text-center flex flex-col">
  <dv-raw tag="span" color="primary">span</dv-raw>
  <dv-raw tag="button" color="primary">button</dv-raw>
</div>
```

## Raw

### Attributes

| name    | description | type          | default |
| ------- | ----------- | ------------- | ------- |
| tag     | html tag    | string        | div     |
| variant | theme type  | IRawType      | -       |
| color   | text color  | IColor,string | -       |
