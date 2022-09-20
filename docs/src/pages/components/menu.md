# Menu

notice:

- when menu class contains `p-`, menu-item will become border-radius.

## Examples

veritcal with icons

```html :::demo
<dv-artboard class="py-4 bg-gray-100">
  <dv-menu class="py-2 shadow-lg rounded-lg bg-white">
    <dv-menu-item asTitle> Menu title </dv-menu-item>
    <dv-menu-item> Item without icon </dv-menu-item>
    <dv-menu-item>
      <IconHeart class="mr-2" size="1.25em" />
      Item with icon
    </dv-menu-item>
  </dv-menu>
</dv-artboard>
```

veritcal with icons and padding. menu-item have border-raidus

```html :::demo
<dv-artboard class="py-4 bg-gray-100">
  <dv-menu class="p-4 shadow-lg rounded-lg bg-white">
    <dv-menu-item asTitle> Menu title </dv-menu-item>
    <dv-menu-item> Item without icon </dv-menu-item>
    <dv-menu-item>
      <IconHeart class="mr-2" size="1.25em" />
      Item with icon
    </dv-menu-item>
  </dv-menu>
</dv-artboard>
```

bordered, hover-bordered, disabled

```html :::demo
<dv-artboard class="py-4 bg-gray-100">
  <dv-menu class="py-4 shadow-lg rounded-lg bg-white">
    <dv-menu-item asTitle> Menu title </dv-menu-item>
    <dv-menu-item disabled> Item is diabled </dv-menu-item>
    <dv-menu-item bordered> Item is bordered </dv-menu-item>
    <dv-menu-item hover-bordered> Item is hover bordered </dv-menu-item>
    <dv-menu-item active> Item is active </dv-menu-item>
  </dv-menu>
</dv-artboard>
```

horizontal

```html :::demo
<dv-artboard class="py-4 bg-gray-100">
  <dv-menu class="shadow-lg rounded-lg bg-white" horizontal>
    <dv-menu-item asTitle> Menu title </dv-menu-item>
    <dv-menu-item disabled> Item is diabled </dv-menu-item>
    <dv-menu-item bordered> Item is bordered </dv-menu-item>
    <dv-menu-item active> Item is active </dv-menu-item>
  </dv-menu>
</dv-artboard>
```

icon

```html :::demo
<dv-artboard class="py-4 bg-gray-100">
  <dv-menu class="shadow-lg rounded-lg bg-white text-2xl mb-4">
    <dv-menu-item> <IconLogoGithub /> </dv-menu-item>
    <dv-menu-item> <IconCode /> </dv-menu-item>
    <dv-menu-item> <IconHeart /> </dv-menu-item>
  </dv-menu>

  <dv-menu class="shadow-lg rounded-lg bg-white text-2xl" horizontal>
    <dv-menu-item> <IconLogoGithub /> </dv-menu-item>
    <dv-menu-item> <IconCode /> </dv-menu-item>
    <dv-menu-item> <IconHeart /> </dv-menu-item>
  </dv-menu>
</dv-artboard>
```

veritcal with submenu and compact

> TODO: refine usage api

```html :::demo
<dv-artboard class="py-4 bg-gray-100">
  <dv-menu class="p-4 shadow-lg rounded-lg bg-white" compact>
    <dv-menu-item> Level 1 </dv-menu-item>
    <dv-menu-item> Level 1 </dv-menu-item>
    <dv-menu-item> Level 1 </dv-menu-item>
    <dv-menu-item :childWrapper="false">
      <dv-menu>
        <dv-menu-item> Level 2 </dv-menu-item>
        <dv-menu-item> Level 2 </dv-menu-item>
        <dv-menu-item :childWrapper="false">
          <dv-menu>
            <dv-menu-item> Level 3 </dv-menu-item>
            <dv-menu-item> Level 3 </dv-menu-item>
          </dv-menu>
        </dv-menu-item>
        <dv-menu-item> Level 2 </dv-menu-item>
      </dv-menu>
    </dv-menu-item>
    <dv-menu-item> Level 1 </dv-menu-item>
  </dv-menu>
</dv-artboard>
```

## Menu

### Attributes

| name       | description                | type    | default |
| ---------- | -------------------------- | ------- | ------- |
| compact    | makes menu more compact    | boolean | -       |
| horizontal | makes menu list horizontal | boolean | -       |

## MenuItem

### Attributes

| name          | description                                                                   | type           | default |
| ------------- | ----------------------------------------------------------------------------- | -------------- | ------- |
| asTitle       | makes menu item to be title                                                   | boolean        | -       |
| disabled      | disabled status                                                               | boolean        | -       |
| bordered      | bordered status                                                               | boolean        | -       |
| hoverBordered | hover-bordered status                                                         | boolean        | -       |
| active        | menu item active status(only when child is anchor element works)              | boolean        | -       |
| childWrapper  | child wrap element, when asTitle then it will be span, otherwise it will be a | a, span, false | -       |
