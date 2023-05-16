import { ViteSSG } from 'vite-ssg';
import routes from 'virtual:generated-pages';
import daisyui, {
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
import App from './App.vue';
import Playground from './components/Playground.vue';
import MarkdownTable from './components/MarkdownTable.vue';

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
