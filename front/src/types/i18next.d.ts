import "i18next";

import fa from "../i18n/locales/fa.translation.json";
import en from "../i18n/locales/en.translation.json";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "fa";
    resources: {
      fa: typeof fa;
    };
  }
}
