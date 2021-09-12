import './styles';
import { ViteSSG } from 'vite-ssg';
import routes from 'virtual:generated-pages';
import App from './App.vue';
import Playground from './components/Playground.vue';

export const createApp = ViteSSG(
  App,
  { routes, base: '/daisyui-vue/' },
  ({ app, router, isClient }) => {
    // install plugins etc.
    app.component('Playground', Playground);
  },
);
