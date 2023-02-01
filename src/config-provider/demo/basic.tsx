import { Button, ConfigProvider, Modal } from 'nova-ui';
import React, { useState } from 'react';
import enUS from '../../locale/locales/en_US';
import zhCN from '../../locale/locales/zh_CN';

const Demo = () => {
  const [locale, setLocale] = useState(zhCN);
  const [theme, setTheme] = useState(localStorage.theme || 'default');
  return (
    <>
      <div>
        <div>切换语言</div>
        <Button onClick={() => setLocale(zhCN)}>中文</Button>
        <Button onClick={() => setLocale(enUS)}>英文</Button>
      </div>
      <div>
        <div>切换主题色</div>
        <Button onClick={() => setTheme('dark')}>dark</Button>
        <Button onClick={() => setTheme('light')}>light</Button>
        <Button onClick={() => setTheme('default')}>default</Button>
      </div>
      <ConfigProvider locale={locale} theme={theme}>
        <Modal></Modal>
      </ConfigProvider>
    </>
  );
};

export default Demo;
