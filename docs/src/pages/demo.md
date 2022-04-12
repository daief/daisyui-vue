# Demo for development

```tsx :::run
import { reactive, watch } from 'vue';

export default {
  setup: () => {
    const state = reactive({
      show: false,
    });

    let c = 0;

    watch([() => c], (newVal, oldVal) => {
      console.log(newVal, oldVal);
    });

    return () => (
      <div class="text-center">
        <dv-toggle
          checked={state.show}
          onChange={(e) => (state.show = e.target.checked)}
        />
        <hr />
        <dv-modal-base
          open={state.show}
          maskCloseable={false}
          onClickMask={() => (state.show = false)}
          custom={() => <div onClick={() => c++}>111 - {c}</div>}
        ></dv-modal-base>
      </div>
    );
  },
};
```
