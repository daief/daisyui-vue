<script lang="tsx">
import { defineComponent, ref, watch } from 'vue';
import {
  Button,
  Drawer,
  Menu,
  MenuItem,
  Navbar,
  NavbarStart,
  NavbarEnd,
  IconGithub,
  IconMenu,
} from 'daisyui-vue';
import { RouteRecordNormalized, RouterLink, useRoute } from 'vue-router';
import routes from 'virtual:generated-pages';

export default defineComponent({
  name: 'App',
  setup: () => {
    const open = ref(false);

    const route = useRoute();

    watch(
      () => route.path,
      () => {
        open.value = false;
      },
    );

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

    const componentsMenus = components
      .sort((a, b) => (a.name as string).localeCompare(b.name as string))
      .map((it) => (
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
              <div class="overflow-y-auto w-80 bg-white border-r border-gray-200">
                <Menu class="rounded-box p-4" compact>
                  <MenuItem asTitle>Components</MenuItem>
                  {componentsMenus}
                </Menu>
              </div>
            ),
            content: () => (
              <div>
                <header class="sticky inset-x-0 top-0 bg-white border-b border-gray-100 z-20">
                  <Navbar class="">
                    <NavbarStart class="mx-2">
                      <div class="lg:hidden">
                        <Button
                          type="ghost"
                          shape="square"
                          onClick={() => {
                            open.value = !open.value;
                          }}
                        >
                          <IconMenu size="2em" />
                        </Button>
                      </div>
                    </NavbarStart>
                    <NavbarEnd>
                      <Button
                        component="a"
                        href="https://github.com/daief/daisyui-vue"
                        target="_blank"
                        type="ghost"
                      >
                        <IconGithub size="2em" />
                      </Button>
                    </NavbarEnd>
                  </Navbar>
                </header>
                <div class="p-4 pb-8 lg:p-10">
                  <router-view />
                </div>
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
