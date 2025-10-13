# Quick Start Guide

## Your Portfolio is Ready!

The development server is currently running at:
- **Portfolio**: http://localhost:3000
- **Admin Dashboard**: http://localhost:3000/admin

## Login Credentials

**Admin Dashboard Password**: `admin123` (Change this in `.env.local`)

## What's Included

### Portfolio Sections:
1. **Hero Section** - Your name, title, and introduction
2. **About** - Personal info and education
3. **Skills** - Technical skills and certifications
4. **Projects** - Auto-fetches from your GitHub (username: eby99)
5. **Experience** - Bootcamps, achievements, and responsibilities
6. **Contact** - Contact form and social links

### Features:
- ✅ Dark/Light theme toggle
- ✅ Smooth animations (Framer Motion)
- ✅ Fully responsive design
- ✅ GitHub API integration for projects
- ✅ Admin dashboard for content management
- ✅ Professional gradients and modern design

## Customization

### 1. Update Personal Information

Edit [`lib/data.ts`](./lib/data.ts):
- Change personal info (name, email, phone, etc.)
- Update education details
- Modify skills and certifications
- Add/edit projects, achievements, and experience

### 2. Change Admin Password

Edit [`.env.local`](./.env.local):
```env
NEXT_PUBLIC_ADMIN_PASSWORD=your_new_secure_password
```

### 3. Customize Colors

Edit [`app/globals.css`](./app/globals.css):
- Change gradient colors in `.gradient-text` and `.gradient-bg`
- Modify theme colors

## Testing Checklist

- [ ] Visit http://localhost:3000 - Check all sections load
- [ ] Test dark/light theme toggle (top right)
- [ ] Scroll through all sections
- [ ] Check that GitHub projects load
- [ ] Test responsive design (resize browser)
- [ ] Visit http://localhost:3000/admin
- [ ] Login with password: `admin123`
- [ ] Try editing profile information
- [ ] Click social media links to verify URLs

## Next Steps

### Option 1: Make Changes First
1. Update `lib/data.ts` with your information
2. Change the admin password in `.env.local`
3. Test your changes at http://localhost:3000
4. When happy, proceed to deployment

### Option 2: Deploy Now
1. See [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment instructions
2. Deploy to Vercel (recommended), Netlify, or Render
3. Update content via admin dashboard after deployment

## Project Structure

```
portfolio-eby/
├── app/
│   ├── page.tsx          # Main portfolio page
│   ├── layout.tsx        # Root layout with metadata
│   ├── globals.css       # Global styles
│   └── admin/
│       └── page.tsx      # Admin dashboard
├── components/
│   ├── Navbar.tsx        # Navigation bar
│   ├── Hero.tsx          # Hero section
│   ├── About.tsx         # About section
│   ├── Skills.tsx        # Skills section
│   ├── Projects.tsx      # Projects section
│   ├── Experience.tsx    # Experience section
│   ├── Contact.tsx       # Contact section
│   └── Footer.tsx        # Footer
├── contexts/
│   └── ThemeContext.tsx  # Theme management
├── lib/
│   ├── data.ts           # Portfolio content data
│   └── firebase.ts       # Firebase configuration
├── .env.local            # Environment variables
├── README.md             # Full documentation
├── DEPLOYMENT.md         # Deployment guide
└── QUICK_START.md        # This file
```

## Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Stopping the Server

Press `Ctrl+C` in the terminal to stop the development server.

## Need Help?

- Check [README.md](./README.md) for detailed documentation
- See [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment guide
- Email: ebymathewoffical@outlook.com
- GitHub: [github.com/eby99](https://github.com/eby99)

---

**Enjoy your new portfolio! 🚀**
