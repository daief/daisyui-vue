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
  IconMenu,
  IconLogoGithub,
  Dropdown,
  IconChevronDown,
  IconColorPaletteOutline,
} from 'daisyui-vue';
import { RouteRecordNormalized, RouterLink, useRoute } from 'vue-router';
import { isBrowser } from './utils/index';
// @ts-ignore
import routes from 'virtual:generated-pages';

const DOC_THEMT_CACHE_KEY = '__DOCUMENT_THEME__';

export default defineComponent({
  name: 'App',
  setup: () => {
    const open = ref(false);
    const currentDocTheme = ref(
      (isBrowser ? localStorage.getItem(DOC_THEMT_CACHE_KEY) : 'light') ||
        'light',
    );

    if (isBrowser) {
      document.documentElement.dataset.theme = currentDocTheme.value;
    }

    const bodyRef = ref<HTMLDivElement>(null);

    const route = useRoute();

    watch(
      () => route.path,
      () => {
        open.value = false;
        bodyRef.value?.scrollTo(0, 0);
      },
    );

    watch(currentDocTheme, () => {
      localStorage.setItem(DOC_THEMT_CACHE_KEY, currentDocTheme.value);
      document.documentElement.dataset.theme = currentDocTheme.value;
    });

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
          <RouterLink to={it.path} activeClass="dv-active">
            {(it.name as string).replace('components-', '')}
          </RouterLink>
        </MenuItem>
      ));

    const themeList = [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
    ];

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
              <div class="overflow-y-auto w-80 bg-base-200">
                <Menu class="rounded-box p-4" compact>
                  <MenuItem asTitle>Components</MenuItem>
                  {componentsMenus}
                </Menu>
              </div>
            ),
            content: () => (
              <div ref={bodyRef} class="h-full overflow-y-auto">
                <header class="sticky inset-x-0 top-0 bg-base-100 border-b border-gray-100 z-20">
                  <Navbar class="">
                    <NavbarStart class="mx-2">
                      <div class="lg:hidden">
                        <Button
                          variant="ghost"
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
                      <Dropdown
                        content={() => (
                          <Menu class="bg-base-200 shadow-2xl rounded-md max-h-96 overflow-y-auto p-2 space-y-3">
                            {themeList.map((th) => (
                              <div
                                data-theme={th}
                                key={th}
                                class={{
                                  'grid grid-cols-5 grid-rows-3 bg-base-100 text-base-content w-full cursor-pointer font-sans rounded-md':
                                    true,
                                  outline: currentDocTheme.value === th,
                                }}
                                onClick={() => {
                                  currentDocTheme.value = th;
                                }}
                              >
                                <div class="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                                  <div class="flex-grow text-sm font-bold">
                                    {th}
                                  </div>
                                  <div class="flex flex-shrink-0 flex-wrap gap-1">
                                    <div class="bg-primary w-2 rounded"></div>
                                    <div class="bg-secondary w-2 rounded"></div>
                                    <div class="bg-accent w-2 rounded"></div>
                                    <div class="bg-neutral w-2 rounded"></div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </Menu>
                        )}
                      >
                        <Button variant="ghost">
                          <IconColorPaletteOutline class="mr-1" size="1.5em" />
                          Theme
                          <IconChevronDown class="ml-1" size="1.5em" />
                        </Button>
                      </Dropdown>
                      <Button
                        tag="a"
                        href="https://github.com/daief/daisyui-vue"
                        target="_blank"
                        variant="ghost"
                      >
                        <IconLogoGithub size="2em" />
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
