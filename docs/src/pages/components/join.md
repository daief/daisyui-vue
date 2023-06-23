<route lang="yml">
meta:
  category: layout
</route>

# Join

Join is a container for grouping multiple items, it can be used to group buttons, inputs, or any other element. Join applies border radius to the first and last item. Join can be used to create a horizontal or vertical list of items.

## Examples

Join

```html :::demo
<dv-join>
  <dv-button>button</dv-button>
  <dv-button>button</dv-button>
  <dv-button>button</dv-button>
</dv-join>
```

Group items vertically

```html :::demo
<dv-join vertical>
  <dv-button>button</dv-button>
  <dv-button>button</dv-button>
  <dv-button>button</dv-button>
</dv-join>
```

With extra elements in the group

```html :::demo
<dv-join>
  <dv-input placeholder="Search..." />
  <dv-button>search</dv-button>
</dv-join>
```

## Join

### Attributes

| name     | description           | type    | default |
| -------- | --------------------- | ------- | ------- |
| vertical | show items vertically | boolean | -       |
