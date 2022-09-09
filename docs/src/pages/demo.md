# Demo for development

```tsx :::run
import d from 'daisyui-vue';
import * as x from 'vue';

export default {
  setup: () => {
    return () => (
      <div class="text-center">
        <dv-counter from={100} to={0} duration={10 * 1000} />
        <br />
        <dv-counter
          from={20}
          to={0}
          duration={10 * 1000}
          transitionDuration={300}
          // format={(v) => 'asd' + v}
        />
      </div>
    );
  },
};
```
