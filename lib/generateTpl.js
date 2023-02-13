// generate component template
const ejs = require('ejs');
const fs = require('fs');
const path = require('path');
const { join } = path;

const comTpl = `
import React, { type FC } from 'react'
import './index.less'

const <%= name %>: FC<{
  text?: string
}> = (props) => <div>{props.text}</div>

export default <%= name %>`;

const demoTpl = `
import React from 'react'
import { <%= name %> } from 'ui-demo-zxy'
const Base: React.FC = () => {
  return <<%= name %> text="test demo" />
}
export default Base
`;

// doc模板
const docTpl = `---
title: <%= title %>
demo:
  cols: 2
---

## eg
<code 
  title="base"
  description="this is a base demo"
  src="./demo/base.tsx"></code>

## api
<API></API>
`;

const exTpl = `
export { default as <%= name %> } from './<%= name %>'
`;

// 组件名称
const args = process.argv;
const name = args[2];

if (!name) {
  console.log('请输入组件名XX, 运行$ npm run create XX');
  return;
}

// 组件文件夹路径
const comPath = join(__dirname, `../src/${name}`);

if (!fs.existsSync(comPath)) {
  try {
    // 创建对应文件夹
    fs.mkdirSync(comPath);
    fs.writeFileSync(`${comPath}/index.less`, '');
    fs.writeFileSync(`${comPath}/index.tsx`, ejs.render(comTpl, { name }));
    fs.appendFileSync(
      join(__dirname, `../src/index.ts`),
      ejs.render(exTpl, { name }),
    );

    fs.mkdirSync(`${comPath}/__test__`);

    fs.mkdirSync(`${comPath}/demo`);
    fs.writeFileSync(`${comPath}/demo/base.tsx`, ejs.render(demoTpl, { name }));

    const tplObj = {
      name,
      title: name,
      groupTitle: `group${name}`,
      groupOrder: 0,
      groupPath: 'group',
    };
    fs.writeFileSync(`${comPath}/index.md`, ejs.render(docTpl, tplObj));
  } catch (err) {
    console.log('error', err);
  }
} else {
  console.log('已经存在该组件');
}
