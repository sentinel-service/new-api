# Wallet Topup UI Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Always show a “充值” button that opens `${window.location.origin}/cashier` in a new tab, and remove the online-topup disabled banner and redemption hint on the wallet topup page.

**Architecture:** Keep changes limited to the `RechargeCard` component. UI-only adjustments: add a header action button, remove a banner render branch, and remove a redemption hint block. No backend changes.

**Tech Stack:** React 18, Semi Design UI, i18next

---

### Task 1: Add fixed “充值” button in header

**Files:**
- Modify: `web/src/components/topup/RechargeCard.jsx`

**Step 1: Write the failing test**
- Not applicable (no existing UI test harness for this component).

**Step 2: Run test to verify it fails**
- Not applicable.

**Step 3: Write minimal implementation**
- Add a new `Button` in the header actions area, placed before “账单”.
- Set `onClick` to `window.open(`${window.location.origin}/cashier`, '_blank')`.
- Use existing translation key `t('充值')` for label.

**Step 4: Run test to verify it passes**
- Manual check: load wallet management page, confirm the new button is visible and opens a new tab to `/cashier`.

**Step 5: Commit**
```bash
git add web/src/components/topup/RechargeCard.jsx
git commit -m "feat: add fixed cashier link button"
```

### Task 2: Remove the online-topup disabled banner

**Files:**
- Modify: `web/src/components/topup/RechargeCard.jsx`

**Step 1: Write the failing test**
- Not applicable.

**Step 2: Run test to verify it fails**
- Not applicable.

**Step 3: Write minimal implementation**
- Remove the `Banner` rendering branch that shows the message “管理员未开启在线充值功能…”.
- When online topup is disabled, render nothing in that spot (no banner).

**Step 4: Run test to verify it passes**
- Manual check: with online topup disabled, the banner is not shown.

**Step 5: Commit**
```bash
git add web/src/components/topup/RechargeCard.jsx
git commit -m "refactor: remove online topup disabled banner"
```

### Task 3: Remove redemption hint under input

**Files:**
- Modify: `web/src/components/topup/RechargeCard.jsx`

**Step 1: Write the failing test**
- Not applicable.

**Step 2: Run test to verify it fails**
- Not applicable.

**Step 3: Write minimal implementation**
- Remove the `extraText` block that renders “在找兑换码？购买兑换码”.
- Keep the redemption input and submit button unchanged.

**Step 4: Run test to verify it passes**
- Manual check: the hint is no longer shown regardless of `topUpLink`.

**Step 5: Commit**
```bash
git add web/src/components/topup/RechargeCard.jsx
git commit -m "refactor: remove redemption hint"
```

---

## Notes
- Keep all changes in `RechargeCard.jsx`.
- Do not change backend APIs or configuration.

