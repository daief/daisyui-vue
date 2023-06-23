<script lang="tsx">
import { computed, defineComponent, ref, watch } from 'vue';
import {
  useBreakPointLte,
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
  Raw,
  ThemeProvider,

  // themes
  createThemeLight,
  createThemeDark,
  createThemeCupcake,
  createThemeBumblebee,
  createThemeEmerald,
  createThemeCorporate,
  createThemeSynthwave,
  createThemeRetro,
  createThemeCyberpunk,
  createThemeValentine,
  createThemeAcid,
  createThemeAqua,
  createThemeAutumn,
  createThemeBlack,
  createThemeBusiness,
  createThemeCmyk,
  createThemeCoffee,
  createThemeDracula,
  createThemeFantasy,
  createThemeForest,
  createThemeGarden,
  createThemeHalloween,
  createThemeLemonade,
  createThemeLofi,
  createThemeLuxury,
  createThemeNight,
  createThemePastel,
  createThemeWinter,
  createThemeWireframe,
} from 'daisyui-vue';
import { useRoute } from 'vue-router';
import { isBrowser } from './utils/index';
import AppMenuVue from './components/app/app-menu.vue';

const DOC_THEMT_CACHE_KEY = '__DOCUMENT_THEME__';

export default defineComponent({
  name: 'App',
  setup: () => {
    const open = ref(false);
    const currentDocTheme = ref(
      (isBrowser ? localStorage.getItem(DOC_THEMT_CACHE_KEY) : 'light') ||
        'light',
    );
    const isMobile = useBreakPointLte('sm', false);

    const bodyRef = ref<HTMLDivElement | null>(null);

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
    });

    const themes = {
      light: createThemeLight(),
      dark: createThemeDark(),
      cupcake: createThemeCupcake(),
      bumblebee: createThemeBumblebee(),
      emerald: createThemeEmerald(),
      corporate: createThemeCorporate(),
      synthwave: createThemeSynthwave(),
      retro: createThemeRetro(),
      cyberpunk: createThemeCyberpunk(),
      valentine: createThemeValentine(),
      halloween: createThemeHalloween(),
      garden: createThemeGarden(),
      forest: createThemeForest(),
      aqua: createThemeAqua(),
      lofi: createThemeLofi(),
      pastel: createThemePastel(),
      fantasy: createThemeFantasy(),
      wireframe: createThemeWireframe(),
      black: createThemeBlack(),
      luxury: createThemeLuxury(),
      dracula: createThemeDracula(),
      cmyk: createThemeCmyk(),
      autumn: createThemeAutumn(),
      business: createThemeBusiness(),
      acid: createThemeAcid(),
      lemonade: createThemeLemonade(),
      night: createThemeNight(),
      coffee: createThemeCoffee(),
      winter: createThemeWinter(),
    };
    const themeList = Object.keys(themes);
    const theme = computed(() => themes[currentDocTheme.value] || themes.light);

    return () => (
      <ThemeProvider theme={theme.value}>
        <main>
          <Drawer
            disableTeleport
            flattern={!isMobile.value}
            class="h-screen"
            open={open.value}
            onClose={() => (open.value = false)}
            v-slots={{
              default: () => (
                <div class="overflow-y-auto w-80 dv-bgbase200 pb-6">
                  <AppMenuVue />
                </div>
              ),
              content: () => (
                <div ref={bodyRef} class="h-full overflow-y-auto">
                  <header class="sticky inset-x-0 top-0 dv-bgbase100 border-b dv-borderbase200 z-20">
                    <Navbar class="">
                      <NavbarStart class="mx-2">
                        {isMobile.value ? (
                          <div>
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
                        ) : null}
                      </NavbarStart>
                      <NavbarEnd>
                        <Dropdown
                          content={() => (
                            <Menu class="dv-bgbase200 shadow-2xl rounded-md max-h-96 overflow-y-auto p-2 space-y-3">
                              {themeList.map((th) => (
                                <ThemeProvider
                                  key={th}
                                  theme={themes[th]}
                                  class={{
                                    'grid grid-cols-5 grid-rows-3 dv-bgbase100 dv-textbasecontent w-full cursor-pointer font-sans rounded-md':
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
                                      <Raw
                                        variant="primary"
                                        class="w-2 rounded"
                                      />
                                      <Raw
                                        variant="secondary"
                                        class="w-2 rounded"
                                      />
                                      <Raw
                                        variant="accent"
                                        class="w-2 rounded"
                                      />
                                      <Raw
                                        variant="neutral"
                                        class="w-2 rounded"
                                      />
                                    </div>
                                  </div>
                                </ThemeProvider>
                              ))}
                            </Menu>
                          )}
                        >
                          <Button variant="ghost">
                            <IconColorPaletteOutline
                              class="mr-1"
                              size="1.5em"
                            />
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
                  <Raw
                    variant="base-100"
                    class={[
                      'p-4 pb-8',
                      {
                        'p-10': !isMobile.value,
                      },
                    ]}
                  >
                    <router-view />
                  </Raw>
                </div>
              ),
            }}
          />
        </main>
      </ThemeProvider>
    );
  },
});
</script>

<style scoped>
main {
  padding: 0;
}
</style>
