# Button

<script setup>
import { Button } from 'daisyui-vue';

function asyncFunction() {
  return new Promise(r => setTimeout(r, 3000));
}
</script>

button with brand colors

```html :::demo
<div
  class="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row"
>
  <Button>netural</Button>
  <Button type="primary">secondary</Button>
  <Button type="secondary">secondary</Button>
  <Button type="accent">accent</Button>
  <Button type="ghost">ghost</Button>
  <Button type="link">link</Button>
</div>
```

active state button

```html :::demo
<div
  class="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row"
>
  <Button active>netural</Button>
  <Button active type="primary">secondary</Button>
  <Button active type="secondary">secondary</Button>
  <Button active type="accent">accent</Button>
  <Button active type="ghost">ghost</Button>
  <Button active type="link">link</Button>
</div>
```

outline button

```html :::demo
<div
  class="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row"
>
  <Button outline>netural</Button>
  <Button type="primary" outline>secondary</Button>
  <Button type="secondary" outline>secondary</Button>
  <Button type="accent" outline>accent</Button>
  <Button type="ghost" outline>ghost</Button>
  <Button type="link" outline>link</Button>
</div>
```

disabled button

```html :::demo
<div
  class="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row"
>
  <Button disabled>netural</Button>
  <Button type="primary" disabled>secondary</Button>
  <Button type="secondary" disabled>secondary</Button>
  <Button type="accent" disabled>accent</Button>
  <Button type="ghost" disabled>ghost</Button>
  <Button type="link" disabled>link</Button>
</div>
```

button with state colors

```html :::demo
<div
  class="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row"
>
  <Button type="info">info</Button>
  <Button type="success">success</Button>
  <Button type="warning">warning</Button>
  <Button type="error">error</Button>
</div>
```

glass button

```html :::demo
<div
  class="p-20 bg-cover bg-base-200 w-80 h-52 rounded-box"
  style='background-image: url("https://picsum.photos/id/314/400/300");'
>
  <Button type="glass">Glass Button</Button>
</div>
```

button size

```html :::demo
<div
  class="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row"
>
  <Button size="lg">Large</Button>
  <Button>Normal</Button>
  <Button size="sm">Small</Button>
  <Button size="xs">Tiny</Button>
</div>
```

button wide

```html :::demo
<div class="flex items-start space-y-2 flex-col">
  <Button wide size="lg">Large</Button>
  <Button wide>Normal</Button>
  <Button wide size="sm">Small</Button>
  <Button wide size="xs">Tiny</Button>
</div>
```

button shapes

```html :::demo
<div
  class="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row mb-2"
>
  <Button shape="circle" size="lg">A</Button>
  <Button shape="circle">B</Button>
  <Button outline shape="circle" size="sm">C</Button>
  <Button outline shape="circle" size="xs">D</Button>
</div>

<div
  class="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row"
>
  <Button shape="square" size="lg">A</Button>
  <Button shape="square">B</Button>
  <Button outline shape="square" size="sm">C</Button>
  <Button outline shape="square" size="xs">D</Button>
</div>
```

button block

```html :::demo
<Button block>Blcok Button</Button>
```

button loading

```html :::demo
<div
  class="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row mb-1"
>
  <Button loading>netural</Button>
  <Button loading type="primary">secondary</Button>
  <Button loading type="secondary">secondary</Button>
  <Button loading type="accent">accent</Button>
  <Button loading type="ghost">ghost</Button>
  <Button loading type="link">link</Button>
</div>

<div
  class="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row"
>
  <Button :onClick="asyncFunction">Loading after click</Button>
  <Button :onClick="asyncFunction" type="primary">Loading after click</Button>
  <Button :onClick="asyncFunction" type="secondary" outline>
    Loading after click
  </Button>
</div>
```

button loading without content

```html :::demo
<div
  class="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row"
>
  <Button loading shape="circle">A</Button>
  <Button :onClick="asyncFunction" outline shape="circle">GO</Button>
</div>
```

button loading without content

```html :::demo
<div
  class="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row"
>
  <Button type="primary" noAnimation>I don't have click animation</Button>
</div>
```
