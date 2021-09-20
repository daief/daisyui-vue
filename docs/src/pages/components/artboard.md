# Artboard

Used to display some content.

## Examples

artboard - phone

```html :::demo
<div class="flex space-x-10 flex-nowrap bg-gray-100 p-4 overflow-x-auto">
  <dv-artboard phone class="self-start h-14">
    phone(custom height)
  </dv-artboard>
  <dv-artboard phone="1"> phone-1 </dv-artboard>
  <dv-artboard phone="2"> phone-2 </dv-artboard>
  <dv-artboard phone="3"> phone-3 </dv-artboard>
  <dv-artboard phone="4"> phone-4 </dv-artboard>
  <dv-artboard phone="5"> phone-5 </dv-artboard>
  <dv-artboard phone="6"> phone-6 </dv-artboard>
</div>
```

artboard - phone horizontal

```html :::demo
<div class="flex space-x-10 flex-nowrap bg-gray-100 p-4 overflow-x-auto">
  <dv-artboard horizontal phone="1"> phone-1 </dv-artboard>
  <dv-artboard horizontal phone="2"> phone-2 </dv-artboard>
  <dv-artboard horizontal phone="3"> phone-3 </dv-artboard>
  <dv-artboard horizontal phone="4"> phone-4 </dv-artboard>
  <dv-artboard horizontal phone="5"> phone-5 </dv-artboard>
  <dv-artboard horizontal phone="6"> phone-6 </dv-artboard>
</div>
```

## Artboard

### Attributes

| name       | description           | type                      | default |
| ---------- | --------------------- | ------------------------- | ------- |
| phone      | demo size             | boolean, 1, 2, 3, 4, 5, 6 | false   |
| horizontal | shows horizontal view | boolean                   | false   |
