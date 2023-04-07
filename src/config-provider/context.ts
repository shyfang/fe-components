import * as React from 'react';
import type { ConfigConsumerProps, Locale } from './interface';

const defaultPrefixCls = 'nova';
const defaultGetPrefixCls = (
  suffixCls?: string,
  customizePrefixCls?: string,
) => {
  if (customizePrefixCls) return customizePrefixCls;

  return suffixCls ? `${defaultPrefixCls}-${suffixCls}` : defaultPrefixCls;
};

export const ConfigContext = React.createContext<ConfigConsumerProps>({
  locale: {} as unknown as Locale,
  theme: 'default',
  getPrefixCls: defaultGetPrefixCls,
});

export const { Consumer: ConfigConsumer } = ConfigContext;
