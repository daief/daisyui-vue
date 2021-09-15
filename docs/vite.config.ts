import { UserConfig } from 'vite';
import Pages from 'vite-plugin-pages';
import Markdown from 'vite-plugin-md';
import { VitePWA } from 'vite-plugin-pwa';
import Vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { resolve } from 'path';
import { escape } from 'html-escaper';
import hljs from 'highlight.js';
import MarkdownIt from 'markdown-it';

const config: UserConfig = {
  base: '/daisyui-vue/',
  plugins: [
    vueJsx(),
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown({
      headEnabled: true,
      markdownItSetup: (md) => {
        md.renderer.rules;
      },
      markdownItUses: [
        (md: MarkdownIt) => {
          const scanCodeBlock: any = (state) => {
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

          const scanTable: any = (state) => {
            let isTable = false;
            let isHead = false;
            let isBody = false;
            let isBodyRow = false;
            let row = 0;
            let heads = [];
            let bodys = [];

            for (let index = 0; index < state.tokens.length; index++) {
              const token = state.tokens[index];

              if (token.type === 'html_block') {
                // console.log(token);
              }

              if (isTable) {
                token.hidden = true;
              }

              if (token.type === 'table_open') {
                isTable = true;
                token.hidden = true;
              }

              if (token.type === 'table_close') {
                // 表格结束，将这块内容改造成组件
                const columns = heads.map((title, i) => ({
                  title,
                  dataIndex: i,
                }));
                const dataSource = bodys.map((row) => {
                  return row.reduce((res, curr) => ({ ...res, ...curr }), {});
                });

                Object.assign(token, token, {
                  type: 'html_block',
                  tag: '',
                  nesting: 0,
                  level: 0,
                  content: `<MarkdownTable :columns="${escape(
                    JSON.stringify(columns),
                  )}" :dataSource="${escape(JSON.stringify(dataSource))}" />\n`,
                  children: null,
                  hidden: false,
                  markup: '',
                  info: '',
                  meta: null,
                  block: true,
                });

                isTable = false;
                isHead = false;
                isBody = false;
                isBodyRow = false;
                row = 0;
                heads = [];
                bodys = [];
              }

              if (token.type === 'thead_open') {
                isHead = true;
              }

              if (token.type === 'thead_close') {
                isHead = false;
              }

              if (token.type === 'tbody_open') {
                isBody = true;
              }

              if (token.type === 'tbody_close') {
                isBody = false;
              }

              if (token.type === 'tr_open' && isBody) {
                isBodyRow = true;
              }

              if (token.type === 'tr_close' && isBody) {
                isBodyRow = false;
                row += 1;
              }

              if (isHead && token.type === 'inline') {
                // TODO handle children，现仅支持 string 方式读取，斜体、加粗...
                heads.push(token.content);
              }

              if (isBodyRow && token.type === 'inline') {
                // TODO handle children
                bodys[row] = bodys[row] || [];
                bodys[row].push(token.content);
              }
            }

            state.tokens = state.tokens.filter((it) => !it.hidden);
          };

          md.core.ruler.push('code-2-demo', scanCodeBlock);
          md.core.ruler.push('table-2-vue', scanTable);
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
