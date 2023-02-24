---
name: ConfigProvider 全局配置
route: /components/config-provider
menu: 组件
toc: content
group:
  title: 全局配置
  order: 4
---

## ConfigProvider 全局配置

为组件提供统一的全局配置，如 theme locale

### 何时使用

ConfigProvider 使用 React 的 context 特性，只需在应用外围包裹一次即可全局生效。(对 antd ConfigProvider 进行二次封装)

### 代码演示

#### 基本使用

<code src='./demo/basic.tsx'></code>

### API

| 属性 | 说明 | 类型 | 默认值 |
| ---- | ---- | ---- | ------ |
