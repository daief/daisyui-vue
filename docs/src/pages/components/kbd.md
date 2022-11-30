# Kbd

Kbd is used to display keyboard shortcuts.

## Examples

Kbd

```html :::demo
<dv-kbd>A</dv-kbd>
```

Kbd sizes

```html :::demo
<div class="space-x-2">
  <dv-kbd size="lg">Shift</dv-kbd>
  <dv-kbd size="md">Shift</dv-kbd>
  <dv-kbd size="sm">Shift</dv-kbd>
  <dv-kbd size="xs">Shift</dv-kbd>
</div>
```

In text

```html :::demo
<p> Press <dv-kbd size="sm">F</dv-kbd> to pay respects. </p>
```

Key combination

```html :::demo
<p>
  <dv-kbd>ctrl</dv-kbd>
  +
  <dv-kbd>shift</dv-kbd>
  +
  <dv-kbd>del</dv-kbd>
</p>
```

Function Keys

```html :::demo
<div class="space-x-2">
  <dv-kbd>⌘</dv-kbd>
  <dv-kbd>⌥</dv-kbd>
  <dv-kbd>⇧</dv-kbd>
  <dv-kbd>⌃</dv-kbd>
</div>
```

A full keyboard

```html :::demo
<div class="flex justify-center gap-1 my-1 w-full">
  <dv-kbd>q</dv-kbd>
  <dv-kbd>w</dv-kbd>
  <dv-kbd>e</dv-kbd>
  <dv-kbd>r</dv-kbd>
  <dv-kbd>t</dv-kbd>
  <dv-kbd>y</dv-kbd>
  <dv-kbd>u</dv-kbd>
  <dv-kbd>i</dv-kbd>
  <dv-kbd>o</dv-kbd>
  <dv-kbd>p</dv-kbd>
</div>
<div class="flex justify-center gap-1 my-1 w-full">
  <dv-kbd>a</dv-kbd>
  <dv-kbd>s</dv-kbd>
  <dv-kbd>d</dv-kbd>
  <dv-kbd>f</dv-kbd>
  <dv-kbd>g</dv-kbd>
  <dv-kbd>h</dv-kbd>
  <dv-kbd>j</dv-kbd>
  <dv-kbd>k</dv-kbd>
  <dv-kbd>l</dv-kbd>
</div>
<div class="flex justify-center gap-1 my-1 w-full">
  <dv-kbd>z</dv-kbd>
  <dv-kbd>x</dv-kbd>
  <dv-kbd>c</dv-kbd>
  <dv-kbd>v</dv-kbd>
  <dv-kbd>b</dv-kbd>
  <dv-kbd>n</dv-kbd>
  <dv-kbd>m</dv-kbd>
  <dv-kbd>/</dv-kbd>
</div>
```

## Kbd

### Attributes

| name | description | type  | default |
| ---- | ----------- | ----- | ------- |
| size | size        | ISize | md      |
