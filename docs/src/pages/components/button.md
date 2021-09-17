# Button

<script setup lang="tsx">
import { createVNode } from 'vue';

function asyncFunction() {
  return new Promise(r => setTimeout(r, 3000));
}
</script>

## Examples

button with brand colors

```html :::demo
<div
  class="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row"
>
  <DvButton>netural</DvButton>
  <DvButton type="primary">secondary</DvButton>
  <DvButton type="secondary">secondary</DvButton>
  <DvButton type="accent">accent</DvButton>
  <DvButton type="ghost">ghost</DvButton>
  <DvButton type="link">link</DvButton>
</div>
```

active state button

```html :::demo
<div
  class="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row"
>
  <DvButton active>netural</DvButton>
  <DvButton active type="primary">secondary</DvButton>
  <DvButton active type="secondary">secondary</DvButton>
  <DvButton active type="accent">accent</DvButton>
  <DvButton active type="ghost">ghost</DvButton>
  <DvButton active type="link">link</DvButton>
</div>
```

outline button

```html :::demo
<div
  class="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row"
>
  <DvButton outline>netural</DvButton>
  <DvButton type="primary" outline>secondary</DvButton>
  <DvButton type="secondary" outline>secondary</DvButton>
  <DvButton type="accent" outline>accent</DvButton>
</div>
```

disabled button

```html :::demo
<div
  class="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row"
>
  <DvButton disabled>netural</DvButton>
  <DvButton type="primary" disabled>secondary</DvButton>
  <DvButton type="secondary" disabled>secondary</DvButton>
  <DvButton type="accent" disabled>accent</DvButton>
  <DvButton type="ghost" disabled>ghost</DvButton>
</div>
```

button with state colors

```html :::demo
<div
  class="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row"
>
  <DvButton type="info">info</DvButton>
  <DvButton type="success">success</DvButton>
  <DvButton type="warning">warning</DvButton>
  <DvButton type="error">error</DvButton>
</div>
```

glass button

```html :::demo
<div
  class="p-20 bg-cover bg-base-200 w-80 h-52 rounded-lg"
  style='background-image: url("https://picsum.photos/id/314/400/300");'
>
  <DvButton type="glass">Glass Button</DvButton>
</div>
```

button size

```html :::demo
<div
  class="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row"
>
  <DvButton size="lg">Large</DvButton>
  <DvButton>Normal</DvButton>
  <DvButton size="sm">Small</DvButton>
  <DvButton size="xs">Tiny</DvButton>
</div>
```

button wide

```html :::demo
<div class="flex items-start space-y-2 flex-col">
  <DvButton wide size="lg">Large</DvButton>
  <DvButton wide>Normal</DvButton>
  <DvButton wide size="sm">Small</DvButton>
  <DvButton wide size="xs">Tiny</DvButton>
</div>
```

button shapes

```html :::demo
<div
  class="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row mb-2"
>
  <DvButton shape="circle" size="lg">A</DvButton>
  <DvButton shape="circle">B</DvButton>
  <DvButton outline shape="circle" size="sm">C</DvButton>
  <DvButton outline shape="circle" size="xs">D</DvButton>
</div>

<div
  class="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row"
>
  <DvButton shape="square" size="lg">A</DvButton>
  <DvButton shape="square">B</DvButton>
  <DvButton outline shape="square" size="sm">C</DvButton>
  <DvButton outline shape="square" size="xs">D</DvButton>
</div>
```

button block

```html :::demo
<DvButton block>Blcok Button</DvButton>
```

button loading

```html :::demo
<div
  class="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row mb-1"
>
  <DvButton loading>netural</DvButton>
  <DvButton loading type="primary">secondary</DvButton>
  <DvButton loading type="secondary">secondary</DvButton>
  <DvButton loading type="accent">accent</DvButton>
  <DvButton loading type="ghost">ghost</DvButton>
  <DvButton loading type="link">link</DvButton>
</div>

<div
  class="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row"
>
  <DvButton :onClick="asyncFunction">Loading after click</DvButton>
  <DvButton :onClick="asyncFunction" type="primary"
    >Loading after click</DvButton
  >
  <DvButton :onClick="asyncFunction" type="secondary" outline>
    Loading after click
  </DvButton>
</div>
```

button loading without content

```html :::demo
<div
  class="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row"
>
  <DvButton loading shape="circle">A</DvButton>
  <DvButton :onClick="asyncFunction" outline shape="circle">GO</DvButton>
</div>
```

button loading without content

```html :::demo
<div
  class="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row"
>
  <DvButton type="primary" noAnimation>I don't have click animation</DvButton>
</div>
```

button group size

```html :::demo
<div class="space-y-2">
  <DvButtonGroup>
    <DvButton type="info">info</DvButton>
    <DvButton type="warning">warning</DvButton>
    <DvButton type="error">error</DvButton>
  </DvButtonGroup>

  <DvButtonGroup size="sm">
    <DvButton type="info">info</DvButton>
    <DvButton type="warning">warning</DvButton>
    <DvButton type="error">error</DvButton>
  </DvButtonGroup>
</div>
```

button group shape

```html :::demo
<div class="space-y-2">
  <DvButtonGroup size="sm" shape="circle">
    <DvButton type="info">A</DvButton>
    <DvButton type="warning">B</DvButton>
    <DvButton type="error">C</DvButton>
  </DvButtonGroup>

  <DvButtonGroup size="sm" shape="square">
    <DvButton type="info">A</DvButton>
    <DvButton type="warning">B</DvButton>
    <DvButton type="error">C</DvButton>
  </DvButtonGroup>

  <DvButtonGroup size="sm" shape="square">
    <DvButton type="info">A</DvButton>
    <DvButton type="warning" shape="default">this is default shape</DvButton>
    <DvButton type="error">C</DvButton>
  </DvButtonGroup>
</div>
```

button group outline

```html :::demo
<div class="space-y-2">
  <DvButtonGroup size="sm" outline>
    <DvButton type="primary">primary</DvButton>
    <DvButton type="secondary">secondary</DvButton>
    <DvButton type="accent">accent</DvButton>
  </DvButtonGroup>
</div>
```

## Props

### Button

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

### ButtonGroup

| name    | description                            | type                    | default |
| ------- | -------------------------------------- | ----------------------- | ------- |
| size    | button size                            | ISize                   | md      |
| shape   | button shape                           | default, circle, square | default |
| outline | transparent Button with colored border | boolean                 | false   |
