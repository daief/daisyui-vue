# Modal

## Examples

simple modal

```tsx :::run
import { reactive, watch } from 'vue';

export default {
  setup: () => {
    const state = reactive({
      show: false,
    });

    const close = () => (state.show = false);

    return () => (
      <div class="text-center">
        <dv-button onClick={() => (state.show = true)}>open modal</dv-button>

        <dv-modal-base open={state.show} onClose={close}>
          <dv-modal-title onClose={close}>
            Congratulations random Interner user!
          </dv-modal-title>
          <dv-modal-body>
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </dv-modal-body>
          <dv-modal-action>
            <dv-button onClick={close}>Yay!</dv-button>
          </dv-modal-action>
        </dv-modal-base>
      </div>
    );
  },
};
```

## ModalBase

### Attributes

| name            | description                    | type                     | default |
| --------------- | ------------------------------ | ------------------------ | ------- |
| disableTeleport | disable teleport               | boolean                  | false   |
| container       | a container to mount the modal | string, function, elemnt | body    |
| open            | modal open status              | boolean                  | false   |
| hideMask        | hide mask                      | boolean                  | false   |
| maskCloseable   | mask closeable                 | boolean                  | true    |
| onMaskClick     | mask click event handler       | function                 | -       |
| escapeCloseable | escape closeable               | boolean                  | true    |
| onEscKeyDown    | esc keydown event handler      | function                 | -       |
| onClose         | close event handler            | function                 | -       |
| custom          | custom node render             | any, function            | -       |
| destroyOnClose  | destroy on close               | boolean                  | false   |

### Slots

| name    | description                                  |
| ------- | -------------------------------------------- |
| default | content                                      |
| custom  | custom node(this will override default slot) |

## ModalTitle

### Attributes

| name     | description     | type     | default |
| -------- | --------------- | -------- | ------- |
| closable | show close icon | boolean  | true    |
| onClose  | close event     | function | -       |

## ModalBody

### Attributes

`-`

## ModalAction

### Attributes

`-`
