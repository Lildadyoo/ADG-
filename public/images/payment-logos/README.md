# Payment Gateway Logos

Place official payment gateway logo images in this directory.

## Required Logo Files

Add the following logo files (PNG format recommended):

1. **paypal.jpg** - PayPal official logo ✅ (Already added)
   - Current size: 37x23px (small, but official PayPal logo)
   - Source: PayPal official logo from paypalobjects.com
   - For larger version: [PayPal Brand Assets](https://www.paypal.com/us/webapps/mpp/logo-center)

2. **stripe.png** - Stripe official logo
   - Recommended size: 200x60px or larger
   - Get from: [Stripe Brand Assets](https://stripe.com/docs/partners/brand-assets)

3. **flutterwave.png** - Flutterwave official logo
   - Recommended size: 200x60px or larger
   - Get from: [Flutterwave Brand Guidelines](https://flutterwave.com/us/brand-assets) or contact Flutterwave support

4. **mobile-money.png** - Mobile Money logo (MTN/Airtel)
   - Recommended size: 200x60px or larger
   - You can use MTN Mobile Money or Airtel Money logos
   - Get from: MTN or Airtel official websites

5. **bank-transfer.png** - Bank transfer icon/logo
   - Recommended size: 200x60px or larger
   - You can use a generic bank icon or your bank's logo

## Image Requirements

- **Format**: PNG (with transparency) or SVG
- **Size**: Minimum 200x60px, recommended 400x120px for high-resolution displays
- **Background**: Transparent background preferred
- **Aspect Ratio**: Horizontal logos work best (wider than tall)

## Where to Get Official Logos

### PayPal
- Visit: https://www.paypal.com/us/webapps/mpp/logo-center
- Download the "PayPal" wordmark logo
- Use the blue version (#0070BA)

### Stripe
- Visit: https://stripe.com/docs/partners/brand-assets
- Download the "Stripe" wordmark logo
- Use the official brand colors

### Flutterwave
- Visit: https://flutterwave.com/us/brand-assets
- Or contact Flutterwave support for brand assets
- Use the official Flutterwave logo

### Mobile Money
- **MTN Mobile Money**: Visit MTN Uganda website or contact MTN
- **Airtel Money**: Visit Airtel Uganda website or contact Airtel
- Or use a generic mobile money icon

### Bank Transfer
- Use your bank's official logo
- Or use a generic bank/transfer icon
- Can be found in icon libraries like Font Awesome, Material Icons, etc.

## File Naming

Make sure files are named exactly as listed above (case-sensitive):
- `paypal.png`
- `stripe.png`
- `flutterwave.png`
- `mobile-money.png`
- `bank-transfer.png`

## Fallback Behavior

If a logo image is missing or fails to load, the component will automatically display:
- A gray placeholder with the first 2 letters of the payment method name

## Example Structure

```
public/
  images/
    payment-logos/
      paypal.png
      stripe.png
      flutterwave.png
      mobile-money.png
      bank-transfer.png
      README.md
```

## Quick Setup

1. Download official logos from the sources above
2. Resize to recommended dimensions (200x60px minimum)
3. Save as PNG with transparent background
4. Place in this directory with exact filenames
5. Logos will appear automatically on the donation page

## Legal Notes

- Make sure you have permission to use these logos
- Follow each brand's usage guidelines
- Do not modify or distort the logos
- Use official brand colors when possible

