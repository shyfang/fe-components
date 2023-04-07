### **安装 & 更新**

1. 确保已经正确安装 [Node.js](https://nodejs.org/en/) 并且版本为 14+。可以在命令行中输入 `node -v` 检查 Node.js 版本。
2. 在命令行中输入以下指令以安装 novadax-components：

```
npm install novadax-components --save
```

3. 项目中使用

```
import React from 'react';
import { Button } from 'novadax-components';

function App() {
  const handleClick = () => {
    alert('Clicked!');
  }

  return (
    <Button onClick={handleClick}>Click me!</Button>
  );
}

export default App;
```

在项目入口处引入 【@TODO: scss to css】

```
import 'novadax-components/dist/style';
```

### **自定义组件库主题**

使用 css 变量

```
:root {
  --nova-primary1: #1ed2d2;
  --nova-primary2: #ddf8f8;
  --nova-primary3: #ff9155;
  --nova-primary4: #1e3c5a;

  --nova-positive1: #52caad;
  --nova-positive2: #eaf9f5;

  --nova-accent1: #2f80ed;
  --nova-accent2: #e6f0fd;

  --nova-notice1: #fc6b9f;
  --nova-notice2: #ffedf3;

  --nova-negative1: #fc6c6b;
  --nova-negative2: #ffeded;

  /* // Text */
  --nova-text1: #ffffff;
  --nova-text2: #2a2d2f;
  --nova-text3: #6e757c;
  --nova-text4: #a1a6b7;

  /* // Background  */
  --nova-background1: #fcfcfd;
  --nova-background1-1: #fcfcfd;
  --nova-background2: #f4f5f6;
  --nova-background2-1: #f4f5f6;
  --nova-background3: #e6e9ec;
  --nova-background3-1: #e6e9ec;
  --nova-background3-2: #e6e9ec;
  --nova-background4: #ffffff;
  --nova-background4-1: #ffffff;
  --nova-background5: #f8f8f9;
  --nova-background5-1: #f8f8f9;
  --nova-backgroundTooltip: #1e3246;

  /* 栅格间距 */
  --nova-nova-gutter-width-xs: 16;
  --nova-nova-gutter-width-sm: 16;
  --nova-nova-gutter-width-md: 24;
  --nova-nova-gutter-width-lg: 24;

  /* 栅格数 */
  --nova-nova-columns-xs: 4;
  --nova-nova-columns-sm: 8;
  --nova-nova-columns-md: 12;
  --nova-nova-columns-lg: 12;

  /* // Shadow Cards */
  --nova-shadow1: 0px 8px 16px -8px rgba(15, 15, 15, 0.2);
  --nova-shadow2: 0px 24px 24px -16px rgba(15, 15, 15, 0.2);
  --nova-shadow3: 0px 40px 32px -24px rgba(15, 15, 15, 0.12);
  --nova-shadow4: 0px 64px 64px -48px rgba(15, 15, 15, 0.1);
  --nova-shadow5: 0px 4px 16px -8px rgba(15, 15, 15, 0.1);
  --nova-shadow6: 0px 16px 64px -48px rgba(31, 47, 70, 0.15);
  --nova-shadowlg: 0px 8px 24px -6px rgba(0, 0, 0, 0.16),
    0px 0px 1px rgba(0, 0, 0, 0.4);

  /* // radius */
  --nova-radiusxxs: 2px;
  --nova-radiusxs: 4px;
  --nova-radiussm: 8px;
  --nova-radiusmd: 12px;
  --nova-radiuslg: 16px;
  --nova-radiusxl: 24px;
  --nova-radiusRound: 50%;
  --nova-radiusCircle: 50%;

  /* // Headings */
  --nova-fontSizeHeading1: 64px;
  --nova-fontSizeHeading2: 48px;
  --nova-fontSizeHeading3: 40px;
  --nova-fontSizeHeading4: 32px;
  --nova-fontSizeHeading5: 24px;

  /* // FontSize */
  --nova-fontSizeDefault: 14px;
  --nova-fontSizeBody1: 20px;
  --nova-fontSizeBody2: 18px;
  --nova-fontSizeSM1: 16px;
  --nova-fontSizeSM2: 14px;
  --nova-fontSizeSM3: 12px;
  --nova-fontSizeTiny: 10px;
  /* // --nova-TODO: 10px字体生成 */

  --nova-buttonFontSizeLG: 16px;
  --nova-buttonFontSizeSM: 14px;
  --nova-labelFontSize: 12px;

  /* // Line Height */
  --nova-lineHeightHeading1: 72px;
  --nova-lineHeightHeading2: 56px;
  --nova-lineHeightHeading3: 48px;
  --nova-lineHeightHeading4: 40px;
  --nova-lineHeightHeading5: 32px;

  --nova-lineHeightBody1: 28px;
  --nova-lineHeightBody2: 24px;
  --nova-lineHeightSM1: 24px;
  --nova-lineHeightSM2: 24px;
  --nova-lineHeight3: 20px;
  --nova-lineHeighteTiny: 16px;

  --nova-buttonLineHeight: 16px;

  /* icon */
  --nova-icon-sm: 16px;
  --nova-icon-md: 24px;
  --nova-icon-lg: 32px;
}

```
