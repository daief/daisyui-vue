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
import Components from 'unplugin-vue-components/vite';
import fs from 'fs-extra';
import crypto from 'crypto';
import path from 'path';

const hash = (input: string) =>
  crypto
    .createHash('sha1')
    .update(input)
    .digest('hex')
    // 全部转成英文
    .split('')
    .map((ch) => String.fromCharCode((ch.charCodeAt(0) % 26) + 97))
    .join('');

const markdownWrapClass = 'markdown-body';

const demoDir = (file = '') => path.resolve(__dirname, 'src/.demo', file);
fs.emptyDirSync(demoDir());

const highlightAuto = (str: string, lang: string, attrs: string) =>
  hljs.getLanguage(lang)
    ? hljs.highlight(str, {
        language: lang,
      }).value
    : str;

const wrap = (render) =>
  function (...args) {
    return render
      .apply(this, args)
      .replace('<code class="', '<code class="hljs ')
      .replace('<code>', '<code class="hljs">');
  };

const config: UserConfig = {
  base: '/daisyui-vue/',
  plugins: [
    vueJsx(),
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown({
      headEnabled: true,
      wrapperClasses: markdownWrapClass,
      markdownItUses: [
        (md: MarkdownIt) => {
          // 处理代码块
          const scanCodeBlock: any = (state) => {
            state.tokens.forEach((token) => {
              if (token && token.tag === 'code' && token.type === 'fence') {
                if (token.info === 'html :::demo') {
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

                const lang = {
                  'tsx :::run': 'tsx',
                  'html :::run': 'html',
                }[token.info];

                if (lang) {
                  const codeResult = hljs.highlight(token.content, {
                    language: lang,
                  }).value;
                  const cname = `C${lang}C${hash(token.content)}`;
                  fs.writeFileSync(
                    demoDir(`${cname}.` + (lang === 'html' ? 'vue' : 'tsx')),
                    token.content,
                    'utf-8',
                  );
                  // 代码块
                  Object.assign(token, {
                    type: 'html_block',
                    content:
                      `<Playground lang="${lang}" ` +
                      `code="${escape(codeResult)}"` +
                      `><${cname} /></Playground>`,
                  });
                }
              }
            });
          };

          // 转换 Markdown 表格至组件
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
                  return row.reduce(
                    (res, curr, i) => ({ ...res, [i]: curr }),
                    {},
                  );
                });

                Object.assign(token, token, {
                  type: 'html_block',
                  tag: '',
                  nesting: 0,
                  level: 0,
                  content: `<MarkdownTable
                    :columns="${escape(JSON.stringify(columns))}"
                    :dataSource="${escape(JSON.stringify(dataSource))}"
                  />\n`,
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

          // 高亮代码块
          // https://github.com/valeriangalliat/markdown-it-highlightjs/blob/e93816e4ea4cceb00a15e7969fae7bf4cd2bf5aa/core.js#L1
          md.renderer.rules.fence = wrap(md.renderer.rules.fence);
          md.renderer.rules.code_block = wrap(md.renderer.rules.code_block);
          md.options.highlight = highlightAuto;
        },
      ],
      transforms: {
        /**
         * markdown 全局样式会对 demo 的演示有影响，所以对结果进行一些调整，原始结果如下：
         *
         * ```html
         * <div class="markdown-body">
         *   <p>some text</p>
         *   <p>some text <code>tag</code></p>
         *
         *   <Playground>
         *     <!-- ... -->
         *   </Playground>
         *
         *   <p>some text</p>
         * </div>
         * ```
         *
         * 转换为如下，将 Playground demo 从 markdown-body 中拆离出来：
         *
         * ```html
         * <div class="markdown-body">
         *   <p>some text</p>
         *   <p>some text <code>tag</code></p>
         * </div>
         *
         * <Playground>
         *   <!-- ... -->
         * </Playground>
         *
         * <div class="markdown-body">
         *   <p>some text</p>
         * </div>
         * ```
         *
         * @param code
         * @returns
         */
        after: (code) => {
          const reg =
            /(<Playground[^\>]*>(?!<\/Playground>).+?<\/Playground>)/g;
          const ls = code.split(reg);
          if (ls.length <= 1) {
            return code;
          }
          const result = ls
            .map((section, i) => {
              if (section.startsWith('<Playground')) {
                return section;
              }

              if (i === 0) {
                return section + '</div>';
              }

              const startTag = `<div class="${markdownWrapClass}">`;

              if (i === ls.length - 1) {
                return startTag + section;
              }

              return startTag + section + '</div>';
            })
            .join('');

          return result;
        },
      },
    }),
    Components({
      dirs: ['src/.demo'],
      extensions: ['vue', 'tsx'],
      deep: false,
      include: [/\.md$/],
      importPathTransform: (pp) => {
        console.log('\n1111', pp);
        return pp;
      },
      resolvers: [
        (name) => {
          const based = resolve(__dirname, 'src/.demo');
          if (name.startsWith('CtsxC')) {
            return resolve(based, name);
          }
          if (name.startsWith('ChtmlC')) {
            return resolve(based, name + '.vue');
          }
        },
      ],
    }),
    Pages({
      extensions: ['vue', 'md'],
    }),
    // TODO pwa
    // VitePWA({
    //   minify: false,
    //   mode: 'development',
    // }),
  ],
  // @ts-ignore
  ssgOptions: {
    script: 'async',
    formatting: 'prettify',
  },
  resolve: {
    alias: {
      'daisyui-vue': resolve(__dirname, '..'),
      '@/': resolve(__dirname, 'src'),
    },
  },
  build: {},
  server: {
    fs: {
      strict: false,
    },
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  },
};

export default config;
