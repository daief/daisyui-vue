<script lang="tsx">
import { defineComponent, ref } from 'vue';
import { Button, Drawer, Menu, MenuItem } from 'daisyui-vue';
import { RouteRecordNormalized, RouterLink } from 'vue-router';
import routes from 'virtual:generated-pages';

console.log(routes);

export default defineComponent({
  name: 'App',
  setup: () => {
    const open = ref(false);

    const { components } = (routes as any[]).reduce<{
      components: RouteRecordNormalized[];
    }>(
      (rs, r: RouteRecordNormalized) => {
        if (/^\/components\//.test(r.path)) {
          rs.components.push(r);
        }
        return rs;
      },
      {
        components: [] as RouteRecordNormalized[],
      },
    );

    const componentsMenus = components.map((it) => (
      <MenuItem childWrapper={false} key={it.path} class="capitalize">
        <RouterLink to={it.path} activeClass="active">
          {(it.name as string).replace('components-', '')}
        </RouterLink>
      </MenuItem>
    ));

    return () => (
      <main>
        <Drawer
          disableTeleport
          mobileOnly
          class="h-screen"
          open={open.value}
          onClose={() => (open.value = false)}
        >
          {{
            default: () => (
              <div class="overflow-y-auto w-80 bg-base-100 border-r border-base-200">
                <Menu class="rounded-box p-4" compact>
                  <MenuItem asTitle>Components</MenuItem>
                  {componentsMenus}
                </Menu>
              </div>
            ),
            content: () => (
              <div class="p-4 lg:p-10">
                <router-view />
              </div>
            ),
          }}
        </Drawer>
      </main>
    );
  },
});
</script>

<style scoped>
main {
  padding: 0;
}
</style>
