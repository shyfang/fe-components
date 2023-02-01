import { defineConfig } from 'dumi';

// https://d.umijs.org/config
export default defineConfig({
  title: 'NOVA-UI',
  // favicons: '',
  outputPath: 'docs-dist',
  hash: true,
  themeConfig: {
    name: 'nova-ui',
    logo: '/logo.png',
    nav: [
      { title: '组件', link: '/components/button' },
      { title: '组件开发说明', link: '/guide' },
    ],
  },
  mfsu: false,
});
