import { Locale } from ".."
// 引入多个组件locale/en_US文件

const localeValues: Locale = {
  locale: 'en-US',
  // locales for all components
  global: {
    placeholder: 'Please select',
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Cancel',
    justOkText: 'OK',
  },
}

export default localeValues