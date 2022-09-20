# Button

## Examples

button with brand colors

```html :::demo
<div
  class="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row"
>
  <dv-button>netural</dv-button>
  <dv-button type="primary">secondary</dv-button>
  <dv-button type="secondary">secondary</dv-button>
  <dv-button type="accent">accent</dv-button>
  <dv-button type="ghost">ghost</dv-button>
  <dv-button type="link">link</dv-button>
</div>
```

active state button

```html :::demo
<div
  class="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row"
>
  <dv-button active>netural</dv-button>
  <dv-button active type="primary">secondary</dv-button>
  <dv-button active type="secondary">secondary</dv-button>
  <dv-button active type="accent">accent</dv-button>
  <dv-button active type="ghost">ghost</dv-button>
  <dv-button active type="link">link</dv-button>
</div>
```

outline button

```html :::demo
<div
  class="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row"
>
  <dv-button outline>netural</dv-button>
  <dv-button type="primary" outline>secondary</dv-button>
  <dv-button type="secondary" outline>secondary</dv-button>
  <dv-button type="accent" outline>accent</dv-button>
</div>
```

disabled button

```html :::demo
<div
  class="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row"
>
  <dv-button disabled>netural</dv-button>
  <dv-button type="primary" disabled>secondary</dv-button>
  <dv-button type="secondary" disabled>secondary</dv-button>
  <dv-button type="accent" disabled>accent</dv-button>
  <dv-button type="ghost" disabled>ghost</dv-button>
</div>
```

button with state colors

```html :::demo
<div
  class="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row"
>
  <dv-button type="info">info</dv-button>
  <dv-button type="success">success</dv-button>
  <dv-button type="warning">warning</dv-button>
  <dv-button type="error">error</dv-button>
</div>
```

glass button

```html :::demo
<div
  class="p-20 bg-cover bg-base-200 w-80 h-52 rounded-lg"
  style='background-image: url("https://picsum.photos/id/314/400/300");'
>
  <dv-button type="glass">Glass Button</dv-button>
</div>
```

button size

```html :::demo
<div
  class="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row"
>
  <dv-button size="lg">Large</dv-button>
  <dv-button>Normal</dv-button>
  <dv-button size="sm">Small</dv-button>
  <dv-button size="xs">Tiny</dv-button>
</div>
```

button wide

```html :::demo
<div class="flex items-start space-y-2 flex-col">
  <dv-button wide size="lg">Large</dv-button>
  <dv-button wide>Normal</dv-button>
  <dv-button wide size="sm">Small</dv-button>
  <dv-button wide size="xs">Tiny</dv-button>
</div>
```

button shapes

```html :::demo
<div
  class="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row mb-2"
>
  <dv-button shape="circle" size="lg">
    <icon-close size="1.5em" />
  </dv-button>
  <dv-button shape="circle">
    <icon-close size="1.25em" />
  </dv-button>
  <dv-button outline shape="circle" size="sm">
    <icon-close />
  </dv-button>
  <dv-button outline shape="circle" size="xs">
    <icon-close />
  </dv-button>
</div>

<div
  class="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row"
>
  <dv-button shape="square" size="lg">A</dv-button>
  <dv-button shape="square">B</dv-button>
  <dv-button outline shape="square" size="sm">C</dv-button>
  <dv-button outline shape="square" size="xs">D</dv-button>
</div>
```

button block

```html :::demo
<dv-button block>Blcok Button</dv-button>
```

button loading

```html :::run
<template>
  <div
    class="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row mb-1"
  >
    <dv-button loading>netural</dv-button>
    <dv-button loading type="primary">secondary</dv-button>
    <dv-button loading type="secondary">secondary</dv-button>
    <dv-button loading type="accent">accent</dv-button>
    <dv-button loading type="ghost">ghost</dv-button>
    <dv-button loading type="link">link</dv-button>
  </div>

  <div
    class="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row"
  >
    <dv-button :onClick="asyncFunction">Loading after click</dv-button>
    <dv-button :onClick="asyncFunction" type="primary"
      >Loading after click</dv-button
    >
    <dv-button :onClick="asyncFunction" type="secondary" outline>
      Loading after click
    </dv-button>
  </div>
</template>

<script lang="tsx" setup>
  function asyncFunction() {
    return new Promise((r) => setTimeout(r, 3000));
  }
</script>
```

button loading without content

```html :::run
<template>
  <div
    class="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row"
  >
    <dv-button loading shape="circle">A</dv-button>
    <dv-button :onClick="asyncFunction" outline shape="circle">GO</dv-button>
  </div>
</template>

<script lang="tsx" setup>
  function asyncFunction() {
    return new Promise((r) => setTimeout(r, 3000));
  }
</script>
```

button doesn't have click animation

```html :::demo
<div
  class="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row"
>
  <dv-button type="primary" noAnimation>I don't have click animation</dv-button>
</div>
```

button group size

```html :::demo
<div class="space-y-2">
  <dv-button-group>
    <dv-button type="info">info</dv-button>
    <dv-button type="warning">warning</dv-button>
    <dv-button type="error">error</dv-button>
  </dv-button-group>

  <dv-button-group size="sm">
    <dv-button type="info">info</dv-button>
    <dv-button type="warning">warning</dv-button>
    <dv-button type="error">error</dv-button>
  </dv-button-group>
</div>
```

button group shape

```html :::demo
<div class="space-y-2">
  <dv-button-group size="sm" shape="circle">
    <dv-button type="info">A</dv-button>
    <dv-button type="warning">B</dv-button>
    <dv-button type="error">C</dv-button>
  </dv-button-group>

  <dv-button-group size="sm" shape="square">
    <dv-button type="info">A</dv-button>
    <dv-button type="warning">B</dv-button>
    <dv-button type="error">C</dv-button>
  </dv-button-group>

  <dv-button-group size="sm" shape="square">
    <dv-button type="info">A</dv-button>
    <dv-button type="warning" shape="default">this is default shape</dv-button>
    <dv-button type="error">C</dv-button>
  </dv-button-group>
</div>
```

button group outline

```html :::demo
<div class="space-y-2">
  <dv-button-group size="sm" outline>
    <dv-button type="primary">primary</dv-button>
    <dv-button type="secondary">secondary</dv-button>
    <dv-button type="accent">accent</dv-button>
  </dv-button-group>
</div>
```

## Button

### Attributes

| name        | description                            | type                                                                                   | default |
| ----------- | -------------------------------------- | -------------------------------------------------------------------------------------- | ------- |
| type        | button color type                      | netural, primary, secondary, accent, info, success, warning, error, ghost, link, glass | netural |
| size        | button size                            | ISize                                                                                  | md      |
| shape       | button shape                           | default, circle, square                                                                | default |
| block       | full with button                       | boolean                                                                                | false   |
| wide        | wide button (more horizontal padding)  | boolean                                                                                | false   |
| disabled    | force button to show disabled state    | boolean                                                                                | false   |
| outline     | transparent Button with colored border | boolean                                                                                | false   |
| active      | force button to show active state      | boolean                                                                                | false   |
| loading     | shows loading spinner                  | boolean                                                                                | false   |
| noAnimation | disables click animation               | boolean                                                                                | false   |
| component   | button with diffrent HTML tags         | button, a, input                                                                       | button  |
| onClick     | button click handle                    | Function                                                                               | -       |

## ButtonGroup

### Attributes

| name    | description                            | type                    | default |
| ------- | -------------------------------------- | ----------------------- | ------- |
| size    | button size                            | ISize                   | md      |
| shape   | button shape                           | default, circle, square | default |
| outline | transparent Button with colored border | boolean                 | false   |
