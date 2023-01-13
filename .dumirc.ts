import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  hash: true,
  themeConfig: {
    name: 'nova-ui',
    // logo: '/logo.png',
    nav: [
      {title: '组件开发说明', link: '/guide'},
      {title: '组件', link: '/components/button'}
    ]
  },
  mfsu: false,
});
