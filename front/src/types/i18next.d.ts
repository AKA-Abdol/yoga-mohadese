import fa from "../i18n/locales/fa.translation.json"
import { resources, defaultNS } from './i18n';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: typeof resources['fa'];
  }
}

declare module 'i18next' {
  interface CustomTypeOptions {
    returnNull: false;
  }
}