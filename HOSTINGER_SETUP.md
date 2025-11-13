# Hostinger Deployment Guide for ADG Website

This guide will help you deploy your Next.js website to Hostinger and configure all the necessary settings.

## Prerequisites

- Hostinger hosting account (VPS or Cloud Hosting recommended for Next.js)
- Domain name connected to Hostinger
- Your website code ready

---

## Step 1: Choose Hosting Plan

### Recommended Plans for Next.js:

1. **VPS Hosting** (Best for Next.js)
   - Full control over server
   - Can install Node.js, npm
   - Better performance

2. **Cloud Hosting** (Good alternative)
   - Managed hosting
   - May need to check Node.js support

3. **Shared Hosting** (Not recommended)
   - Limited Node.js support
   - May not work well with Next.js

**Check with Hostinger**: Confirm they support Node.js applications before proceeding.

---

## Step 2: Prepare Your Code

### Build Your Next.js App Locally First:

```bash
# Install dependencies
npm install

# Build the production version
npm run build

# Test the build locally
npm start
```

Make sure everything works before deploying!

---

## Step 3: Deploy to Hostinger

### Option A: Via Git (Recommended)

1. **Push your code to GitHub/GitLab**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

2. **In Hostinger hPanel**:
   - Go to **Git** section
   - Connect your repository
   - Set up auto-deployment
   - Configure build command: `npm run build`
   - Configure start command: `npm start`

### Option B: Via File Manager

1. **Compress your project** (excluding node_modules):
   ```bash
   # On Windows (PowerShell)
   Compress-Archive -Path . -DestinationPath adg-website.zip -Exclude node_modules
   ```

2. **Upload to Hostinger**:
   - Log in to hPanel
   - Go to **File Manager**
   - Navigate to your domain's public_html or root directory
   - Upload the zip file
   - Extract it

3. **Install dependencies**:
   - Via SSH or terminal in hPanel:
     ```bash
     cd /path/to/your/site
     npm install --production
     ```

### Option C: Via SSH (If you have VPS)

1. **Connect via SSH**:
   ```bash
   ssh username@your-server-ip
   ```

2. **Clone your repository**:
   ```bash
   git clone YOUR_REPO_URL
   cd adg-website
   ```

3. **Install dependencies and build**:
   ```bash
   npm install
   npm run build
   ```

---

## Step 4: Configure Environment Variables

### Method 1: Via hPanel

1. Log in to Hostinger hPanel
2. Go to your website settings
3. Look for **Environment Variables** or **.env** section
4. Add all required variables:

```env
# Resend Email Configuration
RESEND_API_KEY=re_your_api_key_here
FROM_EMAIL=onboarding@resend.dev
RECEIVE_EMAIL=your-email@example.com

# Payment Gateway Links
NEXT_PUBLIC_PAYPAL_LINK=https://www.paypal.com/donate/?hosted_button_id=YOUR_ID
NEXT_PUBLIC_STRIPE_LINK=https://buy.stripe.com/YOUR_LINK
NEXT_PUBLIC_FLUTTERWAVE_LINK=https://flutterwave.com/pay/YOUR_LINK
NEXT_PUBLIC_MOBILE_MONEY_LINK=https://your-mobile-money-link.com
```

### Method 2: Via File Manager

1. Go to **File Manager** in hPanel
2. Navigate to your site's root directory
3. Create `.env.production` file
4. Add all environment variables (same as above)
5. Make sure file permissions are correct (644)

### Method 3: Via SSH

```bash
cd /path/to/your/site
nano .env.production
# Add your variables
# Save and exit (Ctrl+X, then Y, then Enter)
```

---

## Step 5: Set Up Node.js Process Manager (PM2)

For VPS hosting, use PM2 to keep your app running:

```bash
# Install PM2 globally
npm install -g pm2

# Start your app with PM2
pm2 start npm --name "adg-website" -- start

# Save PM2 configuration
pm2 save

# Set up PM2 to start on server reboot
pm2 startup
```

---

## Step 6: Configure Domain and SSL

1. **Point Domain to Hostinger**:
   - In Hostinger hPanel, go to **Domains**
   - Add your domain or use existing
   - Update DNS if needed

2. **Enable SSL Certificate**:
   - In hPanel, go to **SSL**
   - Enable free SSL (Let's Encrypt)
   - Or install your own SSL certificate

---

## Step 7: Configure Reverse Proxy (If Needed)

If Hostinger uses a web server (like Nginx), you may need to configure it:

### Nginx Configuration Example:

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

**Note**: Hostinger may handle this automatically. Check with their support.

---

## Step 8: Test Your Deployment

1. **Visit your website**: `https://yourdomain.com`
2. **Test all features**:
   - Homepage loads correctly
   - Navigation works
   - Forms submit (contact, proposal, newsletter)
   - Donation page works
   - Payment links redirect correctly

3. **Check environment variables**:
   - Forms should send emails
   - Payment buttons should work

---

## Step 9: Set Up Auto-Deployment (Optional)

### Via Git Webhooks:

1. In Hostinger, set up Git integration
2. Configure webhook to auto-deploy on push
3. Or use Hostinger's Git deployment feature

### Via GitHub Actions:

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Hostinger

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to Hostinger
        uses: SamKirkland/FTP-Deploy-Action@4.3.0
        with:
          server: ${{ secrets.HOSTINGER_FTP_HOST }}
          username: ${{ secrets.HOSTINGER_FTP_USER }}
          password: ${{ secrets.HOSTINGER_FTP_PASSWORD }}
```

---

## Troubleshooting

### Issue: App not starting

**Solution**:
- Check Node.js version (need 18+)
- Check if port 3000 is available
- Check PM2 logs: `pm2 logs adg-website`
- Check server logs in hPanel

### Issue: Environment variables not working

**Solution**:
- Make sure `.env.production` is in root directory
- Restart your application after adding variables
- Check variable names (case-sensitive)
- Verify file permissions

### Issue: Build fails

**Solution**:
- Check Node.js version
- Run `npm install` again
- Check for missing dependencies
- Review build logs

### Issue: Payment links not working

**Solution**:
- Verify environment variables are set correctly
- Check that `NEXT_PUBLIC_` prefix is used
- Restart application after adding variables
- Test in browser console for errors

---

## Important Files to Check

After deployment, verify these files exist:

- ✅ `.env.production` (with all variables)
- ✅ `package.json` (with all dependencies)
- ✅ `.next` folder (build output)
- ✅ `public` folder (images, logos)
- ✅ `node_modules` (dependencies)

---

## Maintenance

### Regular Updates:

1. **Update dependencies**:
   ```bash
   npm update
   npm run build
   pm2 restart adg-website
   ```

2. **Monitor logs**:
   ```bash
   pm2 logs adg-website
   ```

3. **Check disk space**:
   - Monitor in hPanel
   - Clean up old builds if needed

---

## Support Resources

- **Hostinger Support**: Available 24/7 in hPanel
- **Hostinger Knowledge Base**: https://www.hostinger.com/tutorials
- **Next.js Deployment Docs**: https://nextjs.org/docs/deployment

---

## Checklist Before Going Live

- [ ] Code deployed to Hostinger
- [ ] Environment variables configured
- [ ] SSL certificate enabled
- [ ] Domain pointing correctly
- [ ] All forms tested (contact, proposal, newsletter)
- [ ] Payment links tested
- [ ] Email notifications working
- [ ] All pages loading correctly
- [ ] Mobile responsive design working
- [ ] Performance optimized

---

## Differences from Vercel

| Feature | Vercel | Hostinger |
|---------|--------|-----------|
| Environment Variables | Dashboard UI | File/SSH |
| Auto-deployment | Automatic | Manual/Git |
| SSL | Automatic | Manual setup |
| Node.js | Automatic | May need setup |
| Build Process | Automatic | Manual |
| Scaling | Automatic | Manual |

**Note**: Hostinger requires more manual configuration but gives you more control.

---

Good luck with your deployment! 🚀

