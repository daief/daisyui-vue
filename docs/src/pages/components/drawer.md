# Drawer

<script setup lang="ts">
  import { ref } from 'vue';

  const open = ref(null);

  function setOpen(type) {
    open.value = type;
  }

  function close() {
    open.value = null;
  }

  function isOpen(type) {
    return open.value === type;
  }
</script>

## Examples

```html
<script setup lang="ts">
  import { ref } from 'vue';

  const open = ref(null);

  function setOpen(type) {
    open.value = type;
  }

  function close() {
    open.value = null;
  }

  function isOpen(type) {
    return open.value === type;
  }
</script>
```

global drawer

```html :::demo
<div
  class="rounded-lg shadow bg-base-200 h-52 flex justify-center items-center"
>
  <dv-button :onClick="() => setOpen('d1')" type="primary">open</dv-button>
</div>
<dv-drawer :open="isOpen('d1')" @close="close">
  <div class="bg-white w-44 py-4">
    <dv-menu>
      <dv-menu-item>item1</dv-menu-item>
      <dv-menu-item>item2</dv-menu-item>
      <dv-menu-item>item3</dv-menu-item>
    </dv-menu>
  </div>
</dv-drawer>
```
