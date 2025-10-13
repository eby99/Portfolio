# Deployment Guide

## Quick Deployment Steps

### Option 1: Deploy to Vercel (Recommended - Free)

1. **Push to GitHub** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Portfolio website"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Deploy via Vercel Website**:
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "Add New Project"
   - Import your GitHub repository
   - Add environment variables:
     - `NEXT_PUBLIC_GITHUB_USERNAME=eby99`
     - `NEXT_PUBLIC_ADMIN_PASSWORD=your_secure_password`
   - Click "Deploy"
   - Your site will be live in ~2 minutes!

3. **Or use Vercel CLI**:
   ```bash
   npm install -g vercel
   vercel login
   vercel
   ```

### Option 2: Deploy to Netlify (Free)

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy via Netlify Website**:
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `.next` folder
   - Or connect your GitHub repository
   - Add environment variables in Site Settings
   - Deploy!

### Option 3: Deploy to Render (Free)

1. **Push to GitHub** (if not already done)

2. **Deploy via Render**:
   - Go to [render.com](https://render.com)
   - Create a new Web Service
   - Connect your GitHub repository
   - Build Command: `npm install && npm run build`
   - Start Command: `npm start`
   - Add environment variables
   - Deploy!

### Option 4: Deploy to GitHub Pages

1. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**:
   ```json
   {
     "scripts": {
       "deploy": "gh-pages -d out"
     }
   }
   ```

3. **Export and deploy**:
   ```bash
   npm run build
   npm run deploy
   ```

## Environment Variables

Make sure to set these environment variables on your hosting platform:

```env
NEXT_PUBLIC_GITHUB_USERNAME=eby99
NEXT_PUBLIC_ADMIN_PASSWORD=your_secure_password_here
```

Optional (for Firebase features):
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

## Post-Deployment Checklist

- [ ] Test the live website
- [ ] Check that all sections load correctly
- [ ] Verify GitHub projects are fetching
- [ ] Test the admin dashboard at `/admin`
- [ ] Test dark/light theme toggle
- [ ] Check responsive design on mobile
- [ ] Test all social links
- [ ] Verify contact form works

## Custom Domain (Optional)

### Vercel:
1. Go to Project Settings > Domains
2. Add your custom domain
3. Follow DNS configuration instructions

### Netlify:
1. Go to Site Settings > Domain Management
2. Add custom domain
3. Configure DNS

## Continuous Deployment

Once connected to GitHub:
- Push changes to your repository
- Automatic deployment will trigger
- Live site updates in ~2 minutes

## Troubleshooting

**Build fails:**
- Check environment variables are set
- Ensure Node.js version is 18+
- Check build logs for specific errors

**Projects not loading:**
- Verify `NEXT_PUBLIC_GITHUB_USERNAME` is set correctly
- Check GitHub API rate limits
- Consider adding a GitHub token for higher limits

**Admin dashboard not working:**
- Verify `NEXT_PUBLIC_ADMIN_PASSWORD` is set
- Clear browser cache and try again

## Support

For issues:
- Email: ebymathewoffical@outlook.com
- GitHub: [github.com/eby99](https://github.com/eby99)
