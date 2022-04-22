# Demo for development

```tsx :::run
import { reactive, watch, toRef } from 'vue';
import { _ } from 'daisyui-vue';

import * as x from 'vue';

export default {
  setup: () => {
    const state = reactive({
      show: false,
      val: 'sm',
    });

    const res = _.useMediaParse({
      default: 999,
      lg: 2,
      '2xl': 6,
    });

    const res2 = _.useMedias(['xs', 'sm', 'md', 'lg', 'xl', '2xl']);

    return () => (
      <div class="text-center">
        {res.value + ''}
        <hr />
        {res2.value + ''}
        <hr />
        <input
          value={state.val}
          onInput={(e) => (state.val = e.target.value)}
        />
      </div>
    );
  },
};
```
