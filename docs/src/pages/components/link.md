# Link

## Examples

Link

```html :::demo
<div class="text-center">
  <dv-link>I'm a simple link</dv-link>
</div>
```

Link

```html :::demo
<div class="text-center">
  <p>
    Tailwind CSS resets the style of links by default.
    <br />
    Add "link" class to make it look like a
    <a class="link">normal link</a> again.
  </p>
</div>
```

Link type color

```html :::demo
<div class="flex flex-col items-center space-y-2">
  <dv-link type="netural">netural color</dv-link>
  <dv-link type="primary">primary color</dv-link>
  <dv-link type="secondary">secondary color</dv-link>
  <dv-link type="accent">accent color</dv-link>
</div>
```

Show underline only on hover

```html :::demo
<div class="text-center">
  <dv-link enableHoverClass>I'm a simple link</dv-link>
</div>
```

## Link

### Attributes

| name             | description                  | type                                | default |
| ---------------- | ---------------------------- | ----------------------------------- | ------- |
| type             | link color type              | netural, primary, secondary, accent | netural |
| enableHoverClass | show underline only on hover | boolean                             | false   |
