# Demo for development

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
    const onChange = (values) => {
      value.value = values;
    };
    return () => (
      // <dv-checkbox-group
      //   options={options}
      //   value={value.value}
      //   onChange={onChange}
      // />
      <dv-radio>ad</dv-radio>
    );
  },
};
```
