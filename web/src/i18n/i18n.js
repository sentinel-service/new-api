/*
Copyright (C) 2025 QuantumNous

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.

For commercial licensing, please contact support@quantumnous.com
*/

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/en.json';
import { supportedLanguages } from './language';

i18n
  .use(initReactI18next)
  .init({
    load: 'currentOnly',
    supportedLngs: supportedLanguages,
    resources: {
      en: enTranslation,
    },
    lng: 'en',
    fallbackLng: 'en',
    nsSeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

if (typeof window !== 'undefined') {
  localStorage.setItem('i18nextLng', 'en');
}

export default i18n;
