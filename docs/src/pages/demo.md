# Demo for development

```tsx :::run
import * as d from 'daisyui-vue';
import * as x from 'vue';

export default {
  setup: () => {
    return () => (
      <div class="text-center">
        <dv-indicator>
          <dv-avatar src="https://placeimg.com/160/160/people" size={80} />
          <dv-indicator-item tag={d.Badge}>Typing...</dv-indicator-item>
        </dv-indicator>
      </div>
    );
  },
};
```
