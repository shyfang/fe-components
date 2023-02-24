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
    footer: 'Powered by nova',
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
  apiParser: {},
  resolve: {
    // 配置入口文件路径，API 解析将从这里开始
    entryFile: './src/index.ts',
  },
});
