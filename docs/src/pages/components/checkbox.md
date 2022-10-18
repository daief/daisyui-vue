# Checkbox

## Examples

Checkbox

```tsx :::run
import { ref } from 'vue';

export default {
  setup: () => {
    const checked = ref(false);
    const onChange = (e) => {
      checked.value = e.target.checked;
      console.log('Checked:', checked.value);
    };
    return () => <dv-checkbox checked={checked.value} onChange={onChange} />;
  },
};
```

With label

```html :::demo
<dv-checkbox>Orange</dv-checkbox> <dv-checkbox>Apple</dv-checkbox>
```

Color type

```tsx :::run
export default {
  setup: () => {
    const types = ['netural', 'primary', 'secondary', 'accent'];
    return () => (
      <div class="flex flex-col items-center space-y-4">
        {types.map((type) => (
          <div key={type} class="w-32">
            <dv-checkbox type={type} defaultChecked>
              {type}
            </dv-checkbox>
          </div>
        ))}
      </div>
    );
  },
};
```

Sizes

```tsx :::run
export default {
  setup: () => {
    const types = ['xs', 'sm', 'md', 'lg'];
    return () => (
      <div class="flex flex-col items-center space-y-4">
        {types.map((size) => (
          <div key={size}>
            <dv-checkbox size={size} defaultChecked />
          </div>
        ))}
      </div>
    );
  },
};
```

Disabled

```html :::demo
<dv-checkbox disabled>Orange</dv-checkbox>
<dv-checkbox defaultChecked disabled>Apple</dv-checkbox>
```

Indeterminate(style only, do not affect the value)

```html :::demo
<dv-checkbox indeterminate>Orange</dv-checkbox>
<dv-checkbox indeterminate defaultChecked>Apple</dv-checkbox>
<dv-checkbox indeterminate disabled>Pear</dv-checkbox>
```

Group

```tsx :::run
import { ref } from 'vue';

export default {
  setup: () => {
    const options = [
      { value: 'apple', label: 'Apple' },
      { value: 'pear', label: 'Pear' },
      { value: 'orange', label: 'Orange' },
    ];
    const value = ref(['apple', 'pear']);
    const disabled = ref(false);
    const onChange = (array) => {
      value.value = array;
    };
    return () => (
      <div>
        <div class="flex items-center">
          <label class="mr-4">Disabled:</label>
          <dv-toggle
            checked={disabled.value}
            onChange={(e) => (disabled.value = e.target.checked)}
          />
        </div>
        <dv-divider />
        <dv-checkbox-group
          size="lg"
          options={options}
          disabled={disabled.value}
          value={value.value}
          onChange={onChange}
        />
      </div>
    );
  },
};
```

## Checkbox

### Attributes

| name           | description                                               | type                                | default |
| -------------- | --------------------------------------------------------- | ----------------------------------- | ------- |
| size           | size                                                      | ISize                               | md      |
| type           | color type                                                | netural, primary, secondary, accent | netural |
| defaultChecked | initial checked status                                    | bool                                | -       |
| checked        | checked status                                            | bool                                | -       |
| onChange       | change callback                                           | Function                            | -       |
| disabled       | disable status                                            | bool                                | -       |
| readOnly       | read only status                                          | bool                                | -       |
| indeterminate  | indeterminate status. style only, do not affect the value | bool                                | -       |

## CSS variables

| name              | description             | default |
| ----------------- | ----------------------- | ------- |
| --dv-checkbox-gap | checkbox horizontal gap | 8px     |
