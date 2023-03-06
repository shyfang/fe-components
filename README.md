# novadax-components

## 注意事项

- node 版本需要在 14 以及以上
- 删除组件之后，需要删除.dumi 文件夹之后重新启动
- 开发完组件记得[部署 docs](https://jenkins.novadax.com/job/dev/job/frontend/job/fe-novadax-components-dev/)

## Development

```bash
# install dependencies
$ npm install

# develop library by docs demo
$ npm start

# build library source code
$ npm run build

# build library source code in watch mode
$ npm run build:watch

# build docs
$ npm run docs:build

# check your project for potential problems
$ npm run doctor

# 本地测试
$ npm run devPublish

# 新增组件,例如Button
$ npm run create Button
```

## 补充文档

[yalc](https://github.com/wclr/yalc)

## LICENSE

MIT
