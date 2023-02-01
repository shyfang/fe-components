import { ModalLocale } from './../modal/locale';

export interface Locale {
  locale: string;
  global?: Record<string, any>;
  Modal?: ModalLocale;
}