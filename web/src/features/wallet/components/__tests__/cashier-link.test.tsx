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
import { render, screen } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'

import { RechargeFormCard } from '../recharge-form-card'

function renderRechargeCard(topupLink?: string) {
  render(
    <RechargeFormCard
      topupInfo={null}
      presetAmounts={[]}
      selectedPreset={null}
      onSelectPreset={vi.fn()}
      topupAmount={10}
      onTopupAmountChange={vi.fn()}
      paymentAmount={10}
      calculating={false}
      onPaymentMethodSelect={vi.fn()}
      paymentLoading={null}
      redemptionCode=''
      onRedemptionCodeChange={vi.fn()}
      onRedeem={vi.fn()}
      redeeming={false}
      topupLink={topupLink}
    />
  )
}

describe('RechargeFormCard cashier link', () => {
  test('uses the local cashier when no custom top-up link is configured', () => {
    renderRechargeCard()

    expect(screen.getByRole('button', { name: 'Recharge' })).toHaveAttribute(
      'href',
      '/cashier/'
    )
  })

  test('uses the configured top-up link when one is available', () => {
    renderRechargeCard('https://payments.example.test/cashier')

    expect(screen.getByRole('button', { name: 'Recharge' })).toHaveAttribute(
      'href',
      'https://payments.example.test/cashier'
    )
  })
})
