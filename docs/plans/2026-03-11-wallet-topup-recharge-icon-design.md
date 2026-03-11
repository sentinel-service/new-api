# Wallet Topup Recharge Button Icon (Design)

Date: 2026-03-11

## Summary
Add an icon to the “充值” button in wallet management so it visually matches the “账单” button.

## Scope
- Frontend only.
- File: `web/src/components/topup/RechargeCard.jsx`.

## UI Behavior
- “充值” button shows a `CreditCard` icon (lucide-react) with size 16.
- No changes to click behavior or layout.

## Data / State
- No new state or API calls.

## Risks / Assumptions
- Icon style matches existing lucide icons used in this component.

## Testing
- Manual UI check on the wallet management page: “充值” button shows icon and aligns with “账单”.

## Out of Scope
- Any backend or config changes.

