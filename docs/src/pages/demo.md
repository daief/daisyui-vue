# Demo for development

```tsx :::run
import * as d from 'daisyui-vue';
import * as x from 'vue';

export default {
  setup: () => {
    const options = [
      { value: 'apple', label: 'Apple' },
      { value: 'pear', label: 'Pear' },
      { value: 'orange', label: 'Orange' },
    ];
    return () => <dv-checkbox-group options={options} />;
  },
};
```
