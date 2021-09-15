import './styles';
import { ViteSSG } from 'vite-ssg';
import routes from 'virtual:generated-pages';
import App from './App.vue';
import Playground from './components/Playground.vue';
import MarkdownTable from './components/MarkdownTable.vue';
import DV from 'daisyui-vue';

export const createApp = ViteSSG(
  App,
  { routes, base: '/daisyui-vue/' },
  ({ app, router, isClient }) => {
    // install plugins etc.
    app.component('Playground', Playground);
    app.component('MarkdownTable', MarkdownTable);
    app.use(DV);
  },
);
