---
name: Icon 图标
route: /components/icon
menu: 组件
toc: content
group:
  title: 基础组件
  order: 1
---

## Icon 图标

图标

### 代码演示

#### 图标尺寸

<code src='./demo/basic.tsx'></code>

#### 自定义图标

我们提供了一个 createFromIconfont 方法，方便开发者调用在 <a href="https://www.iconfont.cn/" target="_blank">iconfont.cn</a> 上自行管理的图标。

其本质上是组件在渲染前会自动引入 iconfont.cn 项目中的图标符号集，并且创建了一个 `<use>` 标签来渲染图标的组件。

详见 <a href="https://www.iconfont.cn/help/detail?spm=a313x.7781069.1998910419.d8d11a391&helptype=code" target="_blank">iconfont.cn 使用帮助</a> 查看如何生成 symbol 代码的 js 地址。

<code src='./demo/iconfont.tsx'></code>
<code src='./demo/svgcomponent.tsx'></code>

### API

| 属性      | 说明               | 类型    | 默认值 |
| --------- | ------------------ | ------- | ------ |
| type      | icon 名称          | string  |        |
| size      | 组件大小[sm/md/lg] | string  | md     |
| className | class 类名         | string  |        |
| component | svgcomponent       | Element |        |
