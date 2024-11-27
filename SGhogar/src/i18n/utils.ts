import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import es from './translations/es.json';
import en from './translations/en.json';

export const defaultLang = 'es';

export const languages = {
  es: 'Español',
  en: 'English'
};

let initialized = false;

export async function initI18n() {
  if (initialized) return;
  
  await i18next
    .use(LanguageDetector)
    .init({
      lng: defaultLang,
      resources: {
        es: { translation: es },
        en: { translation: en }
      },
      fallbackLng: defaultLang,
      interpolation: {
        escapeValue: false
      },
      detection: {
        order: ['querystring', 'cookie', 'localStorage', 'navigator'],
        lookupQuerystring: 'lang',
        lookupCookie: 'i18next',
        lookupLocalStorage: 'i18nextLng',
        caches: ['localStorage', 'cookie']
      }
    });

  initialized = true;
}

export function t(key: string): any {
  if (!initialized) {
    console.warn('i18next not initialized');
    return key;
  }
  return i18next.t(key);
}

export function getCurrentLang(): string {
  return i18next.language || defaultLang;
}

export async function changeLang(lang: string) {
  if (!initialized) await initI18n();
  await i18next.changeLanguage(lang);
  document.documentElement.lang = lang;
  window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
}