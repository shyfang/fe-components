import * as React from 'react';
import type { Locale } from './interface';
import LocaleContext from './context';
import type { LocaleContextProps } from './context';
import defaultLocaleData from './locales/en_US'


export type LocaleComponentName = Exclude<keyof Locale, 'locale'>;

export interface LocaleReceiverProps<C extends LocaleComponentName = LocaleComponentName> {
  componentName?: C;
  defaultLocale?: Locale[C];
  children: (
    locale: NonNullable<Locale[C]>,
    localeCode: string,
    fullLocale: Locale,
  ) => React.ReactElement;
}

const LocaleReceiver = <C extends LocaleComponentName = LocaleComponentName>(
  props: LocaleReceiverProps<C>,
) => {
  const { componentName = 'global' as C, defaultLocale, children } = props;
  const novaLocale = React.useContext<LocaleContextProps | undefined>(LocaleContext);
  // console.log('novaLocale', novaLocale,);

  const getLocale = React.useMemo<NonNullable<Locale[C]>>(() => {
    const locale = defaultLocale || defaultLocaleData[componentName];
    
    const localeFromContext = novaLocale?.[componentName] ?? {};
    // console.log('localeFromContext', localeFromContext);
    
    return {
      ...(locale instanceof Function ? locale() : locale),
      ...(localeFromContext || {}),
    };
  }, [componentName, defaultLocale, novaLocale]);

  const getLocaleCode = React.useMemo<string>(() => {
    const localeCode = novaLocale && novaLocale.locale;
    // Had use LocaleProvide but didn't set locale
    if (novaLocale && novaLocale.exist && !localeCode) {
      return defaultLocaleData.locale;
    }
    return localeCode!;
  }, [novaLocale]);

  return children(getLocale, getLocaleCode, novaLocale!);
}


export default LocaleReceiver;
