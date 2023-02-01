import { createContext } from 'react';
import type { Locale } from '.';
import enUS from './locales/en_US'

export type LocaleContextProps = Locale & { exist?: boolean };

const LocaleContext = createContext<LocaleContextProps | undefined>(enUS);

export default LocaleContext;