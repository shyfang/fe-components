import type localeEN from '../locale/locales/en_US';

export type Locale = typeof localeEN;
export type Theme = 'dark' | 'light' | 'default';
export type ThemeConfig = Record<string, any>;

// 全局default global config
export interface ConfigConsumerProps {
  children?: React.ReactNode,
  locale?: Locale;
  theme?: Theme;
  themeConfig?: ThemeConfig;
  prefixCls?: string;
  getPrefixCls: (suffixCls?: string, customizePrefixCls?: string) => string;
}

// 全局custom config
export interface ConfigProviderProps {
  children?: React.ReactNode,
  locale?: Locale;
  theme?: Theme;
  themeConfig?: ThemeConfig;
  prefixCls?: string;
}

export interface ProviderChildrenProps extends ConfigProviderProps {
  parentContext: ConfigConsumerProps;
  legacyLocale: Locale;
}