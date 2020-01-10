import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      "screen": "Screen {{ order }}",
      "change_language_english": "Change language to english",
      "change_language_french": "Change language to french"
    }
  },
  fr: {
    translation: {
      "screen": "Écran {{ order }}",
      "change_language_english": "Changer la langue en anglais",
      "change_language_french": "Changer la langue en français"
    }
  }
};

i18n
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    lng: "en",
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false // react already is safe from xss
    }
  });

export default i18n;
