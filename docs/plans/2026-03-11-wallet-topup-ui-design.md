# Wallet Topup UI Adjustments (Design)

Date: 2026-03-11

## Summary
Adjust the wallet management (topup) UI to match the provided screenshots:
- Always show a new “充值” button in the header next to “账单”.
- Clicking “充值” opens a fixed cashier URL in a new tab: `${currentOrigin}/cashier`.
- Remove the “管理员未开启在线充值功能…” banner entirely.
- Remove the “在找兑换码？购买兑换码” hint under the redemption code input.

## Scope
- Frontend only.
- File: `web/src/components/topup/RechargeCard.jsx`.
- No backend changes, no config changes.

## UI Behavior
- Header actions: two buttons aligned right. Order: “充值” (new) then “账单” (existing).
- “充值” is always visible regardless of `enableOnlineTopUp` or other flags.
- Clicking “充值” opens a new tab to `${window.location.origin}/cashier`.
- The online-topup disabled banner is not rendered.
- The redemption code purchase hint is not rendered even if `topUpLink` exists.

## Data / State
- No new state or API calls.
- No changes to translation keys; reuse existing “充值” label.

## Risks / Assumptions
- Assumes `/cashier` exists on the current origin.
- If it does not exist, the new tab will show a 404; this is acceptable per requirement.

## Testing
- Manual UI check on the wallet management page:
  - “充值” always visible and opens new tab with `/cashier`.
  - Banner not shown.
  - Redemption hint not shown.

## Out of Scope
- Any backend API updates.
- Configurable cashier link.

