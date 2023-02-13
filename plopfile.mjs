import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// const FILT_PATH = 'src';
export default function (plop) {
	const __filename = fileURLToPath(import.meta.url);
	const __dirname = dirname(__filename);
  
  // create your generators here
  plop.setGenerator('src', {
    description: 'this is a skeleton plopfile',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: '请输入组件名称（多个单词以中横线命名）',
      },
      { type: 'input', name: 'CN', message: '请输入组件中文名称' },
      { type: 'input', name: 'description', message: '请输入组件描述' },
      { type: 'input', name: 'group', message: '分组' },
    ], // array of inquirer prompts
		actions: [
      {
        type: 'add',
        path: path.resolve(__dirname, './src/{{kebabCase name}}/index.ts'),
        templateFile: path.resolve(__dirname, './templates/component/index.hbs'),
      },
      {
        type: 'add',
        path: path.resolve(__dirname, './src/{{kebabCase name}}/{{kebabCase name}}.tsx'),
        templateFile: path.resolve(__dirname, './templates/component/comp.hbs'),
      },
      {
        type: 'add',
        path: path.resolve(__dirname, './src/{{kebabCase name}}/style/index.less'),
        templateFile: path.resolve(__dirname, './templates/component/style/style.hbs'),
      },
      {
        type: 'add',
        path: path.resolve(__dirname, './src/{{kebabCase name}}/style/index.ts'),
        templateFile: path.resolve(__dirname, './templates/component/style/index.hbs'),
      },
      {
        type: 'add',
        path: path.resolve(__dirname, './src/{{kebabCase name}}/index.md'),
        templateFile: path.resolve(__dirname, './templates/component/doc.hbs'),
      },
      {
        type: 'add',
        path: path.resolve(__dirname, './src/{{kebabCase name}}/interface.ts'),
        templateFile: path.resolve(__dirname, './templates/component/interface.hbs'),
      },
      {
        type: 'add',
        path: path.resolve(__dirname, './src/{{kebabCase name}}/demo/basic.tsx'),
        templateFile: path.resolve(__dirname, './templates/component/demo/basic.hbs'),
      },
      // {
      //   type: 'add',
      //   path: path.resolve(__dirname, './src/{{kebabCase name}}/__tests__/index.test.tsx'),
      //   templateFile: path.resolve(__dirname, './templates/component/__tests__/index.test.hbs'),
      // },
      {
        type: 'append',
        path: path.resolve(__dirname, './src/index.ts'),
        template: "export { default as {{pascalCase name}} } from './{{kebabCase name}}';",
      },
    ], // array of actions
  });
}
