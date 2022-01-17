# Divider

## Examples

divider

```html :::demo
<div class="flex flex-col w-full">
  <div class="grid h-20 card bg-gray-300 rounded-xl place-items-center">
    content
  </div>
  <dv-divider>OR</dv-divider>
  <div class="grid h-20 card bg-gray-300 rounded-xl place-items-center">
    content
  </div>
</div>
```

divider vertical

```html :::demo
<div class="flex flex-row w-full">
  <div
    class="grid flex-grow h-32 card bg-gray-300 rounded-xl place-items-center"
  >
    content
  </div>
  <dv-divider vertical>OR</dv-divider>
  <div
    class="grid flex-grow h-32 card bg-gray-300 rounded-xl place-items-center"
  >
    content
  </div>
</div>
```

divider with no text

```html :::demo
<div class="flex flex-col w-full">
  <div class="grid h-20 card bg-gray-300 rounded-xl place-items-center">
    content
  </div>
  <dv-divider />
  <div class="grid h-20 card bg-gray-300 rounded-xl place-items-center">
    content
  </div>
</div>
```

divider vertical with no text

```html :::demo
<div class="flex flex-row w-full">
  <div
    class="grid flex-grow h-32 card bg-gray-300 rounded-xl place-items-center"
  >
    content
  </div>
  <dv-divider vertical />
  <div
    class="grid flex-grow h-32 card bg-gray-300 rounded-xl place-items-center"
  >
    content
  </div>
</div>
```

## Divider

### Attributes

| name     | description        | type    | default |
| -------- | ------------------ | ------- | ------- |
| vertical | vertical direction | boolean | false   |
