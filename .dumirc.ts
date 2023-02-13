import { defineConfig } from 'dumi';

// https://d.umijs.org/config
export default defineConfig({
  title: 'NOVA-UI',
  // favicons: '',
  outputPath: 'docs-dist',
  hash: true,
  themeConfig: {
    name: 'nova-ui',
    logo: '/favicon.ico',
    nav: [
      { title: '安装使用', link: '/guide' },
      { title: '组件', link: '/components/button' },
      { title: '组件开发说明', link: '/development' },
    ],
  },
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
      'antd',
    ],
  ],
  mfsu: false,
});
