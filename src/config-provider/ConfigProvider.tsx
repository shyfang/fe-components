import LocaleReceiver from 'nova-ui/locale';
import LocaleContext from 'nova-ui/locale/context';
import React from 'react';
import { ConfigConsumer, ConfigContext } from './context';
import { registerTheme } from './cssVariables';
import { ConfigProviderProps, ProviderChildrenProps } from './interface';

const ProviderChildren: React.FC<ProviderChildrenProps> = (props) => {
  const {
    children,
    parentContext,
    legacyLocale,
    theme: customTheme,
    locale,
  } = props;

  const getPrefixCls = React.useCallback(
    (suffixCls?: string, customizePrefixCls?: string) => {
      const { prefixCls } = props;

      if (customizePrefixCls) return customizePrefixCls;

      const mergedPrefixCls = prefixCls || parentContext.getPrefixCls('');

      return suffixCls ? `${mergedPrefixCls}-${suffixCls}` : mergedPrefixCls;
    },
    [parentContext.getPrefixCls, props.prefixCls],
  );

  let theme = customTheme || parentContext.theme;
  const baseConfig = {
    locale: locale || legacyLocale,
    theme,
    getPrefixCls,
  };

  const config = {
    ...parentContext,
    ...baseConfig,
  };

  let childNode = children;

  // 不同theme主题进行颜色处理light dark default(默认max)@TODO:+default cssvars, only customTheme update cssvars
  // 暂不支持变量前缀的变化 默认nova
  if (theme) {
    registerTheme('nova', theme);
  }

  if (locale) {
    childNode = (
      <LocaleContext.Provider value={locale}>
        {childNode}
      </LocaleContext.Provider>
    );
  }

  return (
    <ConfigContext.Provider value={config}>{childNode}</ConfigContext.Provider>
  );
};

const ConfigProvider: React.FC<ConfigProviderProps> = (props) => {
  return (
    <LocaleReceiver>
      {(_, __, legacyLocale) => (
        <ConfigConsumer>
          {(context) => (
            <ProviderChildren
              parentContext={context}
              legacyLocale={legacyLocale}
              {...props}
            ></ProviderChildren>
          )}
        </ConfigConsumer>
      )}
    </LocaleReceiver>
  );
};

export default ConfigProvider;
