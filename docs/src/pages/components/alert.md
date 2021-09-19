# Alert

alert

```html :::demo
<dv-alert>Lorem ipsum dolor sit amet, consectetur adip!</dv-alert>
```

alert state: info

```html :::demo
<dv-alert type="info">Lorem ipsum dolor sit amet, consectetur adip!</dv-alert>
```

alert state: success

```html :::demo
<dv-alert type="success">
  Lorem ipsum dolor sit amet, consectetur adip!
</dv-alert>
```

alert state: warning

```html :::demo
<dv-alert type="warning">
  Lorem ipsum dolor sit amet, consectetur adip!
</dv-alert>
```

alert state: error

```html :::demo
<dv-alert type="error">
  Lorem ipsum dolor sit amet, consectetur adip!
</dv-alert>
```

alert with actions

```html :::demo
<dv-alert type="error">
  <template v-slot:default>
    Lorem ipsum dolor sit amet, consectetur adip!
  </template>
  <template v-slot:actions name="actions">
    <dv-button type="ghost" size="sm" class="mr-2">cancel</dv-button>
    <dv-button type="primary" size="sm">apply</dv-button>
  </template>
</dv-alert>
```

alert

```html :::demo
<dv-alert>
  <template v-slot:icon>
    <dv-icon-heart color="#ef3636" />
  </template>
  <template v-slot:default>
    Lorem ipsum dolor sit amet, consectetur adip!
  </template>
  <template v-slot:content>
    Lorem ipsum dolor sit amet, consectetur adip! Lorem ipsum dolor sit amet,
    consectetur adip!Lorem ipsum dolor sit amet, consectetur adip!Lorem ipsum
    dolor sit amet, consectetur adip!Lorem ipsum dolor sit amet, consectetur
    adip!Lorem ipsum dolor sit amet, consectetur adip!
  </template>
  <template v-slot:actions>
    <dv-button type="ghost" size="sm" class="mr-2">
      <dv-icon-dots size="1.5em" />
    </dv-button>
  </template>
</dv-alert>
```

## Attributes

### Alert

| name | description      | type                          | default |
| ---- | ---------------- | ----------------------------- | ------- |
| type | alert color type | info, success, warning, error | -       |

### Alert Slots

| name    | description   |
| ------- | ------------- |
| default | alert title   |
| content | alert content |
| actions | alert actions |
