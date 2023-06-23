import { ViteSSG } from 'vite-ssg';
import routes from 'virtual:generated-pages';
import daisyui, {
  STYLE_MANAGER_CONTEXT_SYMBOL,
  StyleManager,
  IconHeart,
  IconEllipsisHorizontal,
  IconClose,
  IconFolderOpenOutline,
  IconDocumentOutline,
  IconMenu,
  IconCode,
  IconLogoGithub,
  IconVolumeMute,
  IconVolumeHigh,
  IconSunny,
  IconMoon,
  IconColorPalette,
} from 'daisyui-vue';
import './styles';
import App from './app.vue';
import Playground from './components/playground.vue';
import MarkdownTable from './components/markdown-table.vue';

const icons = [
  IconHeart,
  IconEllipsisHorizontal,
  IconClose,
  IconFolderOpenOutline,
  IconDocumentOutline,
  IconMenu,
  IconCode,
  IconLogoGithub,
  IconVolumeMute,
  IconVolumeHigh,
  IconSunny,
  IconMoon,
  IconColorPalette,
];

export const createApp = ViteSSG(
  App,
  {
    routes,
    base: '/daisyui-vue/',
  },
  (ctx) => {
    const { app, router, isClient } = ctx;
    if (!isClient) {
      const styleManager = new StyleManager();
      app.provide(STYLE_MANAGER_CONTEXT_SYMBOL, styleManager);
      app.config.globalProperties.$styleManager = styleManager;
    }

    // install plugins etc.
    app.component('Playground', Playground);
    app.component('MarkdownTable', MarkdownTable);
    app.use(daisyui);

    icons.forEach((i) => app.component(i.name, i));

    router.isReady().then(() => {
      router.afterEach((to, from, fa) => {
        if (!isClient) return;
        if (to.path !== from.path) {
          try {
            (window as any).gtag.trackPath('');
          } catch (error) {}
        }
      });
    });
  },
);
