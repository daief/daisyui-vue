# Badge

## Examples

badge

```html :::demo
<div
  class="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row"
>
  <dv-badge>neutral</dv-badge>
  <dv-badge variant="primary">primary</dv-badge>
  <dv-badge variant="secondary">secondary</dv-badge>
  <dv-badge variant="accent">accent</dv-badge>
  <dv-badge variant="ghost">ghost</dv-badge>
  <dv-badge variant="info">info</dv-badge>
  <dv-badge variant="success">success</dv-badge>
  <dv-badge variant="warning">warning</dv-badge>
  <dv-badge variant="error">error</dv-badge>
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
  <dv-badge variant="primary">
    <icon-close size="14px" class="mr-1" />
    primary
  </dv-badge>
  <dv-badge variant="info">
    <icon-close size="14px" class="mr-1" />
    info
  </dv-badge>
  <dv-badge variant="warning">
    <icon-close size="14px" class="mr-1" />
    warning
  </dv-badge>
  <dv-badge variant="error">
    <icon-close size="14px" class="mr-1" />
    error
  </dv-badge>
</div>
```

badge outline

```html :::demo
<div
  class="flex flex-wrap items-start md:space-x-2 space-y-2 md:space-y-0 flex-col md:flex-row"
>
  <dv-badge outline>neutral</dv-badge>
  <dv-badge outline variant="primary">primary</dv-badge>
  <dv-badge outline variant="secondary">secondary</dv-badge>
  <dv-badge outline variant="accent">accent</dv-badge>
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
  <dv-button variant="primary">
    Inbox
    <dv-badge class="ml-2" outline>3</dv-badge>
  </dv-button>
  <dv-button variant="secondary">
    Notifications
    <dv-badge class="ml-2" outline>+999</dv-badge>
  </dv-button>
  <dv-button variant="accent">
    Accent
    <dv-badge class="ml-2" outline>new</dv-badge>
  </dv-button>
</div>
```

## Badge

### Attributes

| name    | description                              | type                                                                                   | default |
| ------- | ---------------------------------------- | -------------------------------------------------------------------------------------- | ------- |
| variant | color type                               | neutral, primary, secondary, accent, info, success, warning, error, ghost, link, glass | neutral |
| size    | size                                     | ISize                                                                                  | md      |
| outline | transparent badge with [colorful] border | boolean                                                                                | false   |
