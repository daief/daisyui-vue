# Pagination

## Examples

Pagination

```html :::demo
<div class="flex flex-col items-center space-y-2">
  <dv-pagination :total="2" />
  <dv-pagination :total="4" />
  <dv-pagination :total="5" />
  <dv-pagination :total="15" />
</div>
```

Sizes

```html :::demo
<div class="flex flex-col items-center space-y-2">
  <dv-pagination :total="5" size="xs" />
  <dv-pagination :total="5" size="sm" />
  <dv-pagination :total="5" size="md" />
  <dv-pagination :total="5" size="lg" />
</div>
```

Outline

```html :::demo
<dv-pagination :total="5" outline />
```

## Pagination

### Attributes

| name       | description          | type   | default |
| ---------- | -------------------- | ------ | ------- |
| modelValue | current page v-model | number | -       |
| total      | total page           | number | 0       |
