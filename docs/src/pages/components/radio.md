# Radio

## Examples

Radio

```html :::demo
<dv-radio name="radio-1" /> <dv-radio name="radio-1" />
```

value & change

```tsx :::run
import { ref } from 'vue';

export default {
  setup: () => {
    const val = ref();
    const onChange = (e) => {
      val.value = e.target.value;
    };
    return () => (
      <>
        <dv-radio
          checked={val.value === 'a'}
          onChange={onChange}
          name="radio-2"
          value="a"
        />
        <dv-radio
          checked={val.value === 'b'}
          onChange={onChange}
          name="radio-2"
          value="b"
        />
      </>
    );
  },
};
```

Color type

```tsx :::run
export default {
  setup: () => {
    const types = ['neutral', 'primary', 'secondary', 'accent'];
    return () => (
      <div class="flex flex-col items-center space-y-4">
        {types.map((type) => (
          <div key={type} class="w-32">
            <dv-radio type={type}>{type}</dv-radio>
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
            <dv-radio size={size} />
          </div>
        ))}
      </div>
    );
  },
};
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
    const value = ref('apple');
    const disabled = ref(false);
    const onChange = (e) => {
      value.value = e.target.value;
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
        <dv-radio-group
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

## Radio

### Attributes

| name     | description      | type                                | default |
| -------- | ---------------- | ----------------------------------- | ------- |
| size     | size             | ISize                               | md      |
| type     | color type       | neutral, primary, secondary, accent | neutral |
| disabled | disable status   | bool                                | -       |
| checked  | checked status   | bool                                | -       |
| value    | input value      | IText                               | -       |
| name     | input name       | string                              | -       |
| readOnly | read only status | bool                                | -       |

## RadioGroup

### Attributes

| name         | description    | type                                | default |
| ------------ | -------------- | ----------------------------------- | ------- |
| size         | size           | ISize                               | md      |
| type         | color type     | neutral, primary, secondary, accent | neutral |
| disabled     | disable status | bool                                | -       |
| options      | options        | IOption[]                           | -       |
| value        | selected value | IText                               | -       |
| defaultValue | initial value  | IText                               | -       |
| onChange     | change event   | Function                            | -       |

## CSS variables

| name           | description             | default |
| -------------- | ----------------------- | ------- |
| --dv-radio-gap | checkbox horizontal gap | 8px     |
