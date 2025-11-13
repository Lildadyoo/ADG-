# Payment Gateway Setup Guide - How to Receive Payments

This guide will walk you through setting up each payment gateway so you can actually receive donations.

## Overview

To receive payments, you need to:
1. Create accounts with payment providers
2. Get payment links or API keys
3. Add them to your environment variables
4. Test the integration

---

## Option 1: PayPal (Easiest to Start)

### Step 1: Create PayPal Business Account
1. Go to [paypal.com](https://www.paypal.com)
2. Sign up for a **Business Account** (not personal)
3. Complete verification (may take 1-2 days)

### Step 2: Create a Donate Button
1. Log in to your PayPal Business account
2. Go to **Tools** → **PayPal Buttons**
3. Click **Create new button**
4. Select **Donate** button type
5. Configure:
   - Button name: "ADG Donation"
   - Donation amount: Leave blank (let donors choose)
   - Currency: USD (or your preferred currency)
6. Click **Create Button**
7. Copy the **Hosted Button ID** or the full button code

### Step 3: Get Your Payment Link
You'll get a link like:
```
https://www.paypal.com/donate/?hosted_button_id=YOUR_BUTTON_ID
```

### Step 4: Add to Your Site
1. **Local Development**: Add to `.env.local`:
   ```env
   NEXT_PUBLIC_PAYPAL_LINK=https://www.paypal.com/donate/?hosted_button_id=YOUR_BUTTON_ID
   ```

2. **Vercel Production**: 
   - Go to Vercel Dashboard → Your Project → Settings → Environment Variables
   - Add: `NEXT_PUBLIC_PAYPAL_LINK` = `https://www.paypal.com/donate/?hosted_button_id=YOUR_BUTTON_ID`
   - Select: Production, Preview, Development
   - Redeploy

### Step 5: Test
- Visit your donation page
- Click PayPal button
- Should redirect to PayPal checkout

**Pros**: Easy setup, widely recognized, good for international donors
**Cons**: Higher fees (2.9% + $0.30 per transaction)

---

## Option 2: Stripe (Best for Cards)

### Step 1: Create Stripe Account
1. Go to [stripe.com](https://stripe.com)
2. Sign up for an account
3. Complete business verification

### Step 2: Create Payment Link
1. Log in to Stripe Dashboard
2. Go to **Products** → **Payment Links**
3. Click **Create payment link**
4. Configure:
   - Product name: "ADG Donation"
   - Price: Leave as "Customer enters amount" or set fixed amounts
   - Currency: USD
5. Click **Create link**
6. Copy the payment link (looks like: `https://buy.stripe.com/...`)

### Step 3: Add to Your Site
1. **Local Development**: Add to `.env.local`:
   ```env
   NEXT_PUBLIC_STRIPE_LINK=https://buy.stripe.com/YOUR_LINK
   ```

2. **Vercel Production**: Add `NEXT_PUBLIC_STRIPE_LINK` environment variable

### Step 4: Test
- Use Stripe test mode first
- Test with card: `4242 4242 4242 4242`
- Any future expiry date, any CVC

**Pros**: Lower fees (2.9% + $0.30), great for card payments, professional
**Cons**: More setup required, not available in all countries

---

## Option 3: Flutterwave (Best for Africa)

### Step 1: Create Flutterwave Account
1. Go to [flutterwave.com](https://flutterwave.com)
2. Sign up for an account
3. Complete business verification (required for Uganda)

### Step 2: Create Payment Link
1. Log in to Flutterwave Dashboard
2. Go to **Payment Links** → **Create Payment Link**
3. Configure:
   - Product name: "ADG Donation"
   - Amount: Variable (let customer enter)
   - Currency: USD or UGX
4. Copy the payment link

### Step 3: Add to Your Site
1. **Local Development**: Add to `.env.local`:
   ```env
   NEXT_PUBLIC_FLUTTERWAVE_LINK=https://flutterwave.com/pay/YOUR_LINK
   ```

2. **Vercel Production**: Add `NEXT_PUBLIC_FLUTTERWAVE_LINK` environment variable

### Step 4: Test
- Flutterwave supports:
  - Credit/Debit cards
  - Mobile Money (MTN, Airtel)
  - Bank transfers
  - M-Pesa (if available)

**Pros**: Perfect for Uganda, supports mobile money, local currency
**Cons**: Less known internationally

---

## Option 4: Mobile Money (MTN/Airtel)

### Option A: Through Flutterwave
- Flutterwave already supports mobile money
- No separate setup needed if using Flutterwave

### Option B: Direct Mobile Money
1. Contact MTN Mobile Money or Airtel Money
2. Set up merchant account
3. Get payment instructions or USSD code
4. Create a simple payment page or use contact form

**For now**: Link to contact form where you can provide mobile money details

---

## Option 5: Bank Transfer

### Setup
1. Get your bank account details:
   - Bank name
   - Account name
   - Account number
   - SWIFT code (for international)
   - Branch name

2. Currently links to contact form
3. You can:
   - Provide bank details via contact form
   - Or create a dedicated page with bank details

---

## Quick Setup Checklist

### For Immediate Use (Recommended):
1. ✅ **PayPal** - Set up first (easiest, works immediately)
2. ✅ **Flutterwave** - Set up for Uganda/mobile money support
3. ⏳ **Stripe** - Optional, for better card processing

### Setup Steps:
- [ ] Create PayPal Business account
- [ ] Create PayPal donate button
- [ ] Add PayPal link to `.env.local`
- [ ] Create Flutterwave account
- [ ] Create Flutterwave payment link
- [ ] Add Flutterwave link to `.env.local`
- [ ] Test PayPal donation
- [ ] Test Flutterwave donation
- [ ] Add environment variables to Vercel
- [ ] Test in production

---

## Environment Variables Summary

Add these to `.env.local` (local) and Vercel (production):

```env
# Payment Gateway Links
NEXT_PUBLIC_PAYPAL_LINK=https://www.paypal.com/donate/?hosted_button_id=YOUR_ID
NEXT_PUBLIC_STRIPE_LINK=https://buy.stripe.com/YOUR_LINK
NEXT_PUBLIC_FLUTTERWAVE_LINK=https://flutterwave.com/pay/YOUR_LINK
NEXT_PUBLIC_MOBILE_MONEY_LINK=https://your-mobile-money-link.com
```

**Important**: 
- Restart dev server after adding to `.env.local`
- Redeploy on Vercel after adding environment variables

---

## Testing Your Setup

### Test Each Payment Method:
1. Go to `/donate` page
2. Select an amount
3. Click each payment method
4. Verify it redirects to correct payment page
5. Complete a test transaction (use test mode if available)

### Test Mode:
- **PayPal**: Use sandbox account for testing
- **Stripe**: Use test mode (toggle in dashboard)
- **Flutterwave**: Use test mode

---

## Receiving Payments

### PayPal:
- Payments go directly to your PayPal account
- You'll receive email notifications
- Transfer to bank account when ready

### Stripe:
- Payments go to your Stripe account
- Automatic payouts to your bank (configurable)
- Dashboard shows all transactions

### Flutterwave:
- Payments go to your Flutterwave account
- Can withdraw to bank or mobile money
- Dashboard shows all transactions

---

## Fees Comparison

| Gateway | Fees | Best For |
|---------|------|----------|
| PayPal | 2.9% + $0.30 | International donors, easy setup |
| Stripe | 2.9% + $0.30 | Card payments, professional |
| Flutterwave | ~2.9% | Africa, mobile money, local currency |
| Mobile Money | Varies | Local donors in Uganda |
| Bank Transfer | Usually free | Large donations, corporate |

---

## Security Notes

✅ **Safe Practices**:
- Never commit `.env.local` to git (already in `.gitignore`)
- Use environment variables for all payment links
- Test in sandbox/test mode first
- Monitor transactions regularly
- Use HTTPS (automatic with Vercel)

---

## Need Help?

### PayPal Support:
- Help Center: https://www.paypal.com/help
- Business Support: Available in dashboard

### Stripe Support:
- Documentation: https://stripe.com/docs
- Support: Available in dashboard

### Flutterwave Support:
- Support: support@flutterwave.com
- Documentation: https://developer.flutterwave.com

---

## Recommended Setup for ADG (Uganda-based)

**Primary**: Flutterwave
- Best for local donors
- Supports mobile money
- Accepts UGX

**Secondary**: PayPal
- For international donors
- Widely recognized
- Easy to set up

**Optional**: Stripe
- If you want better card processing
- More features

Start with **Flutterwave + PayPal** for best coverage!

