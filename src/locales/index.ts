import { DateManager, I18n } from '~/utils';
import pt from './pt';

enum NormalizeTranslate {
  pt = 'pt',
  pt_BR = 'pt',
  pt_US = 'pt',
}

const dateLocales = {
  pt: 'pt-br',
};

I18n.translations = {
  pt,
};

const getDeviceLanguage = (): string => 'pt';

const setLanguageToI18n = (): void => {
  const language = getDeviceLanguage();
  const translateNormalize: string = NormalizeTranslate[language];
  const checkSupportedLanguage: boolean = Object.hasOwnProperty.call(
    I18n.translations,
    translateNormalize,
  );

  if (checkSupportedLanguage) {
    const dateLocale = dateLocales[translateNormalize];
    I18n.locale = translateNormalize;
    DateManager.locale(dateLocale);
  } else {
    I18n.defaultLocale = 'pt';
  }
};

setLanguageToI18n();

export const translate = (key: string): string => I18n.t(key);
