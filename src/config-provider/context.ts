import * as React from 'react';
import type { ConfigConsumerProps, Locale } from './interface';

const defaultPrefixCls = 'nova'
const defaultGetPrefixCls = (suffixCls?: string, customizePrefixCls?: string) => {
  if (customizePrefixCls) return customizePrefixCls;

  return suffixCls ? `${defaultPrefixCls}-${suffixCls}` : defaultPrefixCls;
};

// zombieJ: 🚨 Do not pass `defaultRenderEmpty` here since it will cause circular dependency.
export const ConfigContext = React.createContext<ConfigConsumerProps>({
  // We provide a default function for Context without provider
  locale: {} as unknown as Locale,
  theme: 'default',
  getPrefixCls: defaultGetPrefixCls,
});

export const { Consumer: ConfigConsumer } = ConfigContext;
