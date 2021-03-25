import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { TRANSLATIONS_EN } from "./translations/en/translations";
import { TRANSLATIONS_VI } from "./translations/vi/translations";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: TRANSLATIONS_EN
            },
            zh: {
                translation: TRANSLATIONS_VI
            }
        }
    });

i18n.changeLanguage("zh");