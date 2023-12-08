import i18n from "i18next";
import { initReactI18next as i18nReact } from "react-i18next";
import i18nBrowserLanguageDetector from "i18next-browser-languagedetector";
import i18nHttpBackend from "i18next-http-backend";
import { LANGUAGES } from "configs/app/lang";

// Initialize i18next
i18n
  .use(i18nReact)
  .use(i18nHttpBackend)
  .use(i18nBrowserLanguageDetector)
  .init({
    detection: {
      order: ["querystring", "localStorage", "navigator"],
      lookupQuerystring: "lang",
      lookupLocalStorage: "lang",
      lookupSessionStorage: undefined,
      lookupFromPathIndex: undefined,
      lookupFromSubdomainIndex: undefined,
      caches: [],
    },
    ns: ["common"],
    defaultNS: "common",
    fallbackLng: LANGUAGES.NATIVE,
    preload: [LANGUAGES.NATIVE],
    supportedLngs: LANGUAGES.AVAILABLE,
    keySeparator: ".",
    interpolation: {
      escapeValue: false,
      skipOnVariables: false,
    },
    returnNull: false,
    react: {
      useSuspense: false,
    },
  });

// Monitor Language Set/Change
i18n.on("languageChanged", (lang: string) => {
  document.documentElement?.setAttribute("lang", lang);
  document.documentElement?.setAttribute("dir", i18n.dir(lang));
});

// Reference to Instance/Context
export const I18n = i18n;
export default I18n;
