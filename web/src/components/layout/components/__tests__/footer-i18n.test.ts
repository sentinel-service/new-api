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
import { describe, expect, it, vi } from 'vitest'

import { translateLegacyFooterHtml } from '../footer-i18n'

describe('translateLegacyFooterHtml', () => {
  it('maps legacy Chinese placeholders to current translation keys', () => {
    const translate = vi.fn((key: string) => `[${key}]`)
    const html = [
      '{{t:版权所有}}',
      '{{t:隐私协议}}',
      '{{t:服务条款}}',
      '{{t:联系我们}}',
      '{{t:设计与开发由}}',
    ].join('|')

    expect(translateLegacyFooterHtml(html, translate)).toBe(
      '[footer.defaultCopyright]|[Privacy Policy]|[User Agreement]|' +
        '[footer.columns.about.links.contact]|[Designed and Developed by]'
    )
  })

  it('rewrites legacy legal links to routes provided by the current frontend', () => {
    const html = [
      '<a href="/privacy-agreement">Privacy</a>',
      '<a href="/terms-of-service">Terms</a>',
      '<a href="/contact">Contact</a>',
    ].join('')

    expect(translateLegacyFooterHtml(html, (key) => key)).toBe(
      '<a href="/privacy-policy">Privacy</a>' +
        '<a href="/user-agreement">Terms</a>' +
        '<a href="/contact">Contact</a>'
    )
  })

  it('supports custom placeholders and trims their keys', () => {
    expect(
      translateLegacyFooterHtml(
        '<span>{{t: Custom footer key }}</span>',
        (key) => key.toUpperCase()
      )
    ).toBe('<span>CUSTOM FOOTER KEY</span>')
  })
})
