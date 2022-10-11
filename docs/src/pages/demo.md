# Demo for development

```tsx :::run
import * as d from 'daisyui-vue';
import * as x from 'vue';

export default {
  setup: () => {
    return () => (
      <div class="text-center">
        <dv-checkbox>132</dv-checkbox>
        <dv-checkbox size="xs" indeterminate>
          132
        </dv-checkbox>
      </div>
    );
  },
};
```
