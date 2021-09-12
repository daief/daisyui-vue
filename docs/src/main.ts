import './styles';
import { ViteSSG } from 'vite-ssg';
import routes from 'virtual:generated-pages';
import App from './App.vue';
import Playground from './components/Playground.vue';

export const createApp = ViteSSG(
  App,
  { routes },
  ({ app, router, isClient }) => {
    // install plugins etc.
    app.component('Playground', Playground);
  },
);
