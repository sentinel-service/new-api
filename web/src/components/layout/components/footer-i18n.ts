/*
Copyright (C) 2023-2026 QuantumNous

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
const LEGACY_FOOTER_TRANSLATION_KEYS: Record<string, string> = {
  设计与开发由: 'Designed and Developed by',
  服务条款: 'User Agreement',
  联系我们: 'footer.columns.about.links.contact',
  版权所有: 'footer.defaultCopyright',
  隐私协议: 'Privacy Policy',
}

export function translateLegacyFooterHtml(
  html: string,
  translate: (key: string) => string
): string {
  return html.replaceAll(
    /\{\{t:([^}]+)\}\}/g,
    (_placeholder, rawKey: string) => {
      const key = rawKey.trim()
      return translate(LEGACY_FOOTER_TRANSLATION_KEYS[key] ?? key)
    }
  )
}
