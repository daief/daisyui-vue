# Element

## Examples

background type

```html :::demo
<div class="space-y-2 p-2 w-full text-center">
  <dv-element class="border-gray-400 border">div</dv-element>
  <dv-element variant="neutral">neutral</dv-element>
  <dv-element variant="primary">parimary</dv-element>
  <dv-element variant="secondary">secondary</dv-element>
  <dv-element variant="accent">accent</dv-element>
  <dv-element variant="info">info</dv-element>
  <dv-element variant="success">success</dv-element>
  <dv-element variant="warning">warning</dv-element>
  <dv-element variant="error">error</dv-element>
  <dv-element variant="base-100">base-100</dv-element>
  <dv-element variant="base-200">base-200</dv-element>
  <dv-element variant="base-300">base-300</dv-element>
</div>
```

text color

```html :::demo
<div class="space-y-2 p-2 w-full text-center">
  <dv-element color="primary">primary</dv-element>
  <dv-element color="info">info</dv-element>
  <dv-element color="base-content">base-content</dv-element>

  <dv-element color="red">color name</dv-element>
  <dv-element color="#6cf">#6cf</dv-element>
  <dv-element color="rgb(218 137 33)">rgb(218 137 33)</dv-element>
</div>
```

html tag

```html :::demo
<div class="space-y-2 p-2 w-full text-center flex flex-col">
  <dv-element tag="span" color="primary">span</dv-element>
  <dv-element tag="button" color="primary">button</dv-element>
</div>
```

## Element

### Attributes

| name    | description | type          | default |
| ------- | ----------- | ------------- | ------- |
| tag     | html tag    | string        | div     |
| variant | theme type  | IElementType  | -       |
| color   | text color  | IColor,string | -       |
