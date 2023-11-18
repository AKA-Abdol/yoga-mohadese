import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  fallbackLng: 'fa',
  lng: 'fa',
  resources: {
    en: {
      translations: require('./locales/en.translation.json')
    },
    fa: {
      translations: require('./locales/fa.translation.json')
    }
  },
  ns: ['translations'],
  defaultNS: 'translations'
});

i18n.languages = ['fa','en'];

export default i18n;