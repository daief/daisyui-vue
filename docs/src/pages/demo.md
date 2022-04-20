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

    const close = () => (state.show = false);

    return () => (
      <div class="text-center">
        <dv-toggle
          checked={state.show}
          onChange={(e) => (state.show = e.target.checked)}
        />
        <hr />
        <dv-modal-base
          open={state.show}
          // maskCloseable={false}
          onClose={close}
          destroyOnClose
          // custom={() => <div onClick={() => c++}>111 - {c}</div>}
        >
          <dv-modal-title onClose={close}>1</dv-modal-title>
          <dv-modal-body>2332</dv-modal-body>
          <dv-modal-action>
            <dv-button>Yay!</dv-button>
          </dv-modal-action>
        </dv-modal-base>
      </div>
    );
  },
};
```
