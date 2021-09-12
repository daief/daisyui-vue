import { UserConfig } from 'vite';
import Pages from 'vite-plugin-pages';
import Markdown from 'vite-plugin-md';
import { VitePWA } from 'vite-plugin-pwa';
import Vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { resolve } from 'path';
import { escape } from 'html-escaper';
import hljs from 'highlight.js';

const config: UserConfig = {
  base: '/daisyui-vue/',
  plugins: [
    vueJsx(),
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown({
      headEnabled: true,
      markdownItUses: [
        (md) => {
          const scan = (state) => {
            state.tokens.forEach((token) => {
              if (
                token &&
                token.tag === 'code' &&
                token.type === 'fence' &&
                token.info === 'html :::demo'
              ) {
                const codeResult = hljs.highlight(token.content, {
                  language: 'html',
                }).value;

                // 代码块
                Object.assign(token, {
                  type: 'html_block',
                  content:
                    `<Playground ` +
                    `code="${escape(codeResult)}"` +
                    `>${token.content}</Playground>`,
                });
              }
            });
          };
          md.core.ruler.push('router-link', scan);
        },
      ],
    }),
    Pages({
      extensions: ['vue', 'md'],
    }),
    VitePWA({
      minify: false,
      mode: 'development',
    }),
  ],
  // @ts-ignore
  ssgOptions: {
    script: 'async',
    formatting: 'prettify',
  },
  resolve: {
    alias: {
      'daisyui-vue': resolve(__dirname, '../dist/esm'),
    },
  },
  build: {},
  server: {
    fs: {
      // allow: ['/src', '../src/**/*'],
      strict: false,
    },
  },
};

export default config;
