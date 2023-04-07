# 组件库开发和发布说明

### **技术栈介绍**

- react
- [dumi](https://d.umijs.org/guide)  作为组件库的搭建工具，它负责提供文档编写能力， [umi/father](https://github.com/umijs/father)  来实现打包能力。
- scss  作为样式解决方案
- typescript

### **npm script**

- `npm run new` 新建组件开发模版
- `npm run dev`  启动开发环境
- 有本地调试的需求的话，可以使用  `npm link`  命令，这个时候可以用  `npm run build`  来更新打包文件。

### 组件库 Nav 分组

- 基础组件
- 布局组件
- 数据组件
- 全局配置组件

### \*\*组件模板 plop template

### **开始开发一个组件**

新建组件

编写组件源码

导出组件

```
export { default as MyFirstComponent } from './MyFirstComponent';
```

编写组件文档

- 编写组件 Demo
- 文档引入 Demo

本地调试组件库

发布组件库
