# Badge

## Examples

badge

```html :::demo
<div
  class="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row"
>
  <dv-badge>netural</dv-badge>
  <dv-badge type="primary">primary</dv-badge>
  <dv-badge type="secondary">secondary</dv-badge>
  <dv-badge type="accent">accent</dv-badge>
  <dv-badge type="ghost">ghost</dv-badge>
  <dv-badge type="info">info</dv-badge>
  <dv-badge type="success">success</dv-badge>
  <dv-badge type="warning">warning</dv-badge>
  <dv-badge type="error">error</dv-badge>
</div>
```

badge size

```html :::demo
<div
  class="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row"
>
  <dv-badge size="lg">987,654</dv-badge>
  <dv-badge size="md">987,654</dv-badge>
  <dv-badge size="sm">987,654</dv-badge>
  <dv-badge size="xs">987,654</dv-badge>
</div>
```

empty badge

```html :::demo
<div
  class="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row"
>
  <dv-badge size="lg" />
  <dv-badge size="md" />
  <dv-badge size="sm" />
  <dv-badge size="xs" />
</div>
```

badge variants

```html :::demo
<div
  class="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row"
>
  <dv-badge type="primary">
    <dv-icon-close size="14px" class="mr-1" />
    primary
  </dv-badge>
  <dv-badge type="info">
    <dv-icon-close size="14px" class="mr-1" />
    info
  </dv-badge>
  <dv-badge type="warning">
    <dv-icon-close size="14px" class="mr-1" />
    warning
  </dv-badge>
  <dv-badge type="error">
    <dv-icon-close size="14px" class="mr-1" />
    error
  </dv-badge>
</div>
```

badge outline

```html :::demo
<div
  class="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row"
>
  <dv-badge outline>netural</dv-badge>
  <dv-badge outline type="primary">primary</dv-badge>
  <dv-badge outline type="secondary">secondary</dv-badge>
  <dv-badge outline type="accent">accent</dv-badge>
</div>
```

badge in text

```html :::demo
<div>
  <h2 class="mb-2 text-2xl">
    Heading
    <dv-badge outline size="lg">New</dv-badge>
  </h2>
  <h2 class="mb-2 text-xl">
    Heading
    <dv-badge outline size="md">New</dv-badge>
  </h2>
  <h2 class="mb-2 text-lg">
    Heading
    <dv-badge outline size="md">New</dv-badge>
  </h2>
  <h2 class="mb-2 text-md">
    Heading
    <dv-badge outline size="sm">New</dv-badge>
  </h2>
  <h2 class="text-sm">
    Heading
    <dv-badge outline size="sm">New</dv-badge>
  </h2>
</div>
```

badge in button

```html :::demo
<div
  class="flex flex-wrap items-start md:space-x-2 space-x-0 space-y-2 md:space-y-0 flex-col md:flex-row"
>
  <dv-button>
    Version 2.7.0
    <dv-badge class="ml-2">new</dv-badge>
  </dv-button>
  <dv-button type="primary">
    Inbox
    <dv-badge class="ml-2" outline>3</dv-badge>
  </dv-button>
  <dv-button type="secondary">
    Notifications
    <dv-badge class="ml-2" outline>+999</dv-badge>
  </dv-button>
  <dv-button type="accent">
    Accent
    <dv-badge class="ml-2" outline>new</dv-badge>
  </dv-button>
</div>
```

## Badge

### Attributes

| name    | description                              | type                                                                                   | default |
| ------- | ---------------------------------------- | -------------------------------------------------------------------------------------- | ------- |
| type    | color type                               | netural, primary, secondary, accent, info, success, warning, error, ghost, link, glass | netural |
| size    | size                                     | ISize                                                                                  | md      |
| outline | transparent badge with [colorful] border | boolean                                                                                | false   |
