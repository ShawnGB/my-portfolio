import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en.json';
import deTranslation from './locales/de.json';
i18n
  .use(initReactI18next) // Initialize i18next for React
  .init({
    lng: 'en', // Set the default language
    fallbackLng: 'en', // Fallback language if translation is not available
    resources: {
      en: { translation: enTranslation }, // Use the imported English translations
      de: { translation: deTranslation }, // Use the imported German translations
    },
    interpolation: {
      escapeValue: false, // Disable escaping of special characters
    },
  });

export default i18n;
