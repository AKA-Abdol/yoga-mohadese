import "i18next";
import fa from "../i18n/locales/fa.translation.json";

import { resources, defaultNS } from "./i18n";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "fa";
    resources: {
      fa: typeof fa;
    };
    returnNull: false;
  }
}
