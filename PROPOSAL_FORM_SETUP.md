# Project Proposal Form Setup Guide

The proposal form is now set up to send submissions. Follow these steps to configure how you receive proposals.

## Current Setup

The form now:
- ✅ Validates all required fields
- ✅ Sends data to `/api/proposals` endpoint
- ✅ Shows success/error messages to users
- ✅ Logs submissions to console (for development)

## Options for Receiving Proposals

### Option 1: Email via Resend (Recommended for Production)

**Resend** is a modern email API service that's easy to set up and reliable.

1. **Sign up for Resend**: Go to [resend.com](https://resend.com) and create a free account
2. **Get your API key**: In the Resend dashboard, go to API Keys and create a new key
3. **Verify your domain** (optional but recommended for production)
4. **Set environment variables**:

Create a `.env.local` file in your project root:

```env
RESEND_API_KEY=re_your_api_key_here
FROM_EMAIL=noreply@yourdomain.com
RECEIVE_EMAIL=your-email@example.com
```

5. **Uncomment the Resend code** in `app/api/proposals/route.ts` (lines 42-60)

### Option 2: Email via Nodemailer (SMTP)

Use Nodemailer if you have your own SMTP server (Gmail, Outlook, etc.).

1. **Install Nodemailer**:
```bash
npm install nodemailer
npm install --save-dev @types/nodemailer
```

2. **Add to `app/api/proposals/route.ts`** (after line 60):

```typescript
import nodemailer from 'nodemailer';

// In the POST function, add:
if (process.env.SMTP_HOST) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: process.env.FROM_EMAIL,
    to: process.env.RECEIVE_EMAIL,
    subject: `New Project Proposal: ${body.projectTitle}`,
    html: formatProposalEmail(proposalData),
  });
}
```

3. **Set environment variables**:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
FROM_EMAIL=your-email@gmail.com
RECEIVE_EMAIL=your-email@example.com
```

**Note for Gmail**: You'll need to use an [App Password](https://support.google.com/accounts/answer/185833) instead of your regular password.

### Option 3: Webhook (Zapier, Make.com, or Custom)

Send proposals to a webhook URL that can process them.

1. **Set environment variable**:

```env
WEBHOOK_URL=https://your-webhook-url.com/proposals
```

2. The API will automatically send JSON data to this URL when a proposal is submitted.

**Popular webhook services**:
- [Zapier](https://zapier.com) - Connect to Google Sheets, email, Slack, etc.
- [Make.com](https://www.make.com) - Similar to Zapier
- [n8n](https://n8n.io) - Self-hosted automation

### Option 4: Console Logging (Development Only)

Currently, all proposals are logged to the console. This works for development but **not recommended for production**.

To view logs:
- In development: Check your terminal where `npm run dev` is running
- In production: Check your hosting platform's logs (Vercel, Netlify, etc.)

## Testing the Form

1. Start your development server:
```bash
npm run dev
```

2. Navigate to the home page and scroll to the "Submit a Project Proposal" section

3. Fill out the form and submit

4. Check:
   - Console logs (if using Option 4)
   - Your email inbox (if using Option 1 or 2)
   - Your webhook endpoint (if using Option 3)

## Production Deployment

### Vercel

1. Add environment variables in Vercel dashboard:
   - Go to your project → Settings → Environment Variables
   - Add all required variables from your chosen option

2. Redeploy your application

### Hostinger

1. **Via hPanel**:
   - Log in to Hostinger hPanel
   - Go to your website → Environment Variables
   - Add all required variables

2. **Via File Manager**:
   - Go to File Manager in hPanel
   - Navigate to your site's root directory
   - Create or edit `.env.production` file
   - Add all environment variables

3. **Restart your application** after adding variables

See `HOSTINGER_SETUP.md` for detailed instructions.

### Other Platforms

Add environment variables through your hosting platform's dashboard or configuration files.

## Security Notes

- ✅ Never commit `.env.local` to git (it's already in `.gitignore`)
- ✅ Use environment variables for all sensitive data
- ✅ Consider adding rate limiting for production
- ✅ Add CAPTCHA if you're getting spam submissions

## Troubleshooting

### Form submits but no email received

1. Check your environment variables are set correctly
2. Check your hosting platform's logs for errors
3. Verify your email service credentials
4. Check spam/junk folder

### "Failed to submit proposal" error

1. Check browser console for detailed error messages
2. Check server logs for API errors
3. Verify the API route is accessible at `/api/proposals`
4. Check network tab in browser dev tools

### Need Help?

- Check the API route logs: `app/api/proposals/route.ts`
- Check form component: `components/ProjectProposalSection.tsx`
- Review Next.js API routes documentation

