# Donation Page Setup Guide

The donation page is now set up with multiple payment gateway options. Follow these steps to configure your payment methods.

## Current Setup

The donation page includes:
- ✅ Amount selection (preset amounts + custom amount)
- ✅ One-time and recurring donation options
- ✅ Multiple payment gateway options
- ✅ Responsive design
- ✅ Beautiful styling with gradient buttons

## Payment Gateway Configuration

### Option 1: PayPal

1. **Get your PayPal donation link**:
   - Log in to your PayPal account
   - Go to Tools → PayPal buttons
   - Create a "Donate" button
   - Copy the button link/URL

2. **Add to environment variables**:
   Create or update `.env.local`:
   ```env
   NEXT_PUBLIC_PAYPAL_LINK=https://www.paypal.com/donate/?hosted_button_id=YOUR_BUTTON_ID
   ```

3. **For Vercel**: Add `NEXT_PUBLIC_PAYPAL_LINK` in your Vercel environment variables

### Option 2: Stripe

1. **Set up Stripe**:
   - Create account at [stripe.com](https://stripe.com)
   - Get your publishable key
   - Set up payment links or checkout sessions

2. **Add to environment variables**:
   ```env
   NEXT_PUBLIC_STRIPE_LINK=https://buy.stripe.com/YOUR_PAYMENT_LINK
   ```

3. **For Vercel**: Add `NEXT_PUBLIC_STRIPE_LINK` in your Vercel environment variables

### Option 3: Flutterwave (Recommended for Africa)

1. **Set up Flutterwave**:
   - Create account at [flutterwave.com](https://flutterwave.com)
   - Great for African countries (supports mobile money, bank transfers)
   - Create a payment link

2. **Add to environment variables**:
   ```env
   NEXT_PUBLIC_FLUTTERWAVE_LINK=https://flutterwave.com/pay/YOUR_PAYMENT_LINK
   ```

3. **For Vercel**: Add `NEXT_PUBLIC_FLUTTERWAVE_LINK` in your Vercel environment variables

### Option 4: Mobile Money (MTN/Airtel)

1. **Set up Mobile Money**:
   - Contact MTN Mobile Money or Airtel Money
   - Get your merchant code or payment link
   - Or use a service like Flutterwave that supports mobile money

2. **Add to environment variables**:
   ```env
   NEXT_PUBLIC_MOBILE_MONEY_LINK=https://your-mobile-money-link.com
   ```

### Option 5: Bank Transfer

Currently links to the contact form. You can:
- Update the link to point to a bank details page
- Or keep it as is (users will contact you for bank details)

## Environment Variables Setup

### Local Development

Create/update `.env.local`:
```env
# Payment Gateway Links
NEXT_PUBLIC_PAYPAL_LINK=https://www.paypal.com/donate/?hosted_button_id=YOUR_ID
NEXT_PUBLIC_STRIPE_LINK=https://buy.stripe.com/YOUR_LINK
NEXT_PUBLIC_FLUTTERWAVE_LINK=https://flutterwave.com/pay/YOUR_LINK
NEXT_PUBLIC_MOBILE_MONEY_LINK=https://your-mobile-money-link.com
```

### Production (Vercel)

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add each variable:
   - `NEXT_PUBLIC_PAYPAL_LINK`
   - `NEXT_PUBLIC_STRIPE_LINK`
   - `NEXT_PUBLIC_FLUTTERWAVE_LINK`
   - `NEXT_PUBLIC_MOBILE_MONEY_LINK`
3. Select environment: Production, Preview, Development
4. Redeploy your project

## Customizing Payment Links

You can modify the payment methods in `app/donate/page.tsx`:

```typescript
const paymentMethods = [
  {
    name: "PayPal",
    icon: "💳",
    description: "Secure payment via PayPal",
    link: process.env.NEXT_PUBLIC_PAYPAL_LINK || "#",
    available: true,
  },
  // Add or remove payment methods here
];
```

## Testing

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to `/donate`

3. Test the donation flow:
   - Select an amount
   - Choose a payment method
   - Verify the payment link works

## Recommended Setup for Uganda

For a Uganda-based organization, I recommend:

1. **Primary**: Flutterwave (supports mobile money, cards, bank transfers)
2. **Secondary**: PayPal (for international donors)
3. **Tertiary**: Bank Transfer (via contact form)

## Styling Customization

The donation buttons have been styled with:
- Gradient backgrounds (green)
- Shadow effects
- Hover animations
- Heart emoji (💙) for visual appeal

To customize colors, edit the button classes in:
- `app/page.tsx` (homepage buttons)
- `components/Header.tsx` (header button)
- `app/donate/page.tsx` (donation page)

## Security Notes

- ✅ Payment links open in new tabs (secure)
- ✅ No sensitive payment data stored on your site
- ✅ All payments processed by trusted gateways
- ✅ Environment variables keep links secure

## Need Help?

- Check payment gateway documentation
- Test each payment method before going live
- Consider adding a "Thank You" page after donation
- Set up email notifications for donations

