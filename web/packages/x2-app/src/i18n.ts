import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";

export type LanguageType = "en" | "fr";

export const getLanguage = (): LanguageType => {
  return i18n.language as LanguageType;
};

export const changeLanguage = (lang: LanguageType) => {
  i18n.changeLanguage(lang);
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: {
      "en-US": ["en"],
      "fr-FR": ["fr"],
      default: ["en"]
    },
    lng: "fr",
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
