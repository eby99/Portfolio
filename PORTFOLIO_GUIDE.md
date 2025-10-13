# Portfolio Management Guide

## 📋 Table of Contents
1. [Quick Start](#quick-start)
2. [Project Structure](#project-structure)
3. [Editing Content](#editing-content)
4. [Development Workflow](#development-workflow)
5. [Deployment](#deployment)
6. [Tech Stack](#tech-stack)
7. [Troubleshooting](#troubleshooting)

---

## 🚀 Quick Start

### Starting Development Server
```bash
cd portfolio-eby
npm run dev
```
Access your portfolio at: `http://localhost:3000`

### Building for Production
```bash
npm run build
```

### Deploying to Vercel
```bash
git add -A
git commit -m "Your commit message"
git push origin main
```
Vercel will automatically deploy the changes.

---

## 📁 Project Structure

```
portfolio-eby/
├── app/                      # Next.js App Router
│   ├── page.tsx             # Main homepage
│   ├── layout.tsx           # Root layout
│   ├── globals.css          # Global styles & animations
│   ├── admin/               # Admin dashboard
│   │   └── page.tsx
│   └── api/                 # API routes
│       └── contact/
│           └── route.ts     # Email sending endpoint
│
├── components/              # React components
│   ├── About.tsx           # About Me section
│   ├── Contact.tsx         # Contact form section
│   ├── Experience.tsx      # Experience & Education
│   ├── Footer.tsx          # Footer component
│   ├── Hero.tsx            # Hero/Landing section
│   ├── Navbar.tsx          # Navigation bar
│   ├── Projects.tsx        # Projects showcase
│   ├── Skills.tsx          # Skills & Certifications
│   ├── Statistics.tsx      # Animated stats section
│   └── FloatingShape.tsx   # 3D animations
│
├── lib/                     # Utilities & data
│   ├── data.ts             # **MAIN CONTENT FILE**
│   └── firebase.ts         # Firebase config
│
├── contexts/               # React contexts
│   └── ThemeContext.tsx   # Theme management
│
├── public/                 # Static files
│   └── resume.pdf         # Your resume
│
├── .env.local             # Environment variables
└── package.json           # Dependencies

```

---

## ✏️ Editing Content

### 🎯 Main Content File: `lib/data.ts`

This is the **ONLY file you need to edit** to update portfolio content!

### 1. Personal Information
**File**: `lib/data.ts`
**Line**: 1-10

```typescript
export const personalInfo = {
  name: "Eby Mathew",
  title: "Full Stack Developer",
  email: "ebymathewoffical@outlook.com",  // Change your email
  phone: "7012393749 / 8086990142",        // Change your phone
  location: "Kerala, India",               // Change your location
  github: "https://github.com/eby99",      // Your GitHub URL
  linkedin: "https://www.linkedin.com/in/eby-mathew-838a02313",  // LinkedIn
  bio: "Your bio here...",                 // Change your bio
};
```

**Where it appears**: Hero section, About section, Contact section, Footer

---

### 2. Education
**File**: `lib/data.ts`
**Line**: 12-37

```typescript
export const education = [
  {
    institution: "Your Institution Name",
    degree: "Your Degree",
    duration: "Start - End Date",
    cgpa: "7.65",  // or use percentage: "75%"
  },
  // Add more education entries here
];
```

**Where it appears**: About section (Education cards)

---

### 3. Skills
**File**: `lib/data.ts`
**Line**: 39-48

```typescript
export const skills = {
  "Programming Languages": ["C", "C++", "Java", "Python", "Shell Scripting"],
  "Database Management": ["SQL", "MySQL", "MongoDB"],
  "Web Technologies": ["React.js", "Node.js", "Express.js", "Next.js"],
  "Mobile Development": ["Flutter", "Android Studio"],
  "DevOps & Tools": ["Git", "GitHub", "Docker", "CI/CD", "Postman"],
  "Testing & Automation": ["Selenium", "Automated Testing", "Test Scripting"],
  "Cloud Services": ["AWS (basics)", "Render", "Streamlit"],
  "Other": ["MS Office", "Automation", "System Monitoring"],
};
```

**Where it appears**: Skills & Expertise section

**To add a new skill category**:
1. Add a new entry in the `skills` object
2. Update `components/Skills.tsx` line 8-16 to add an icon for your category
3. Import the icon from `lucide-react`

---

### 4. Certifications
**File**: `lib/data.ts`
**Line**: 50-54

```typescript
export const certifications = [
  "DevOps",
  "Advanced Database Management System",
  "MERN Stack",
  "Java",
  // Add your certifications here
];
```

**Where it appears**: Skills & Expertise section (below skills)

---

### 5. Projects
**File**: `lib/data.ts`
**Line**: 56-85

```typescript
export const projects = [
  {
    name: "Project Name",
    description: "Detailed project description...",
    tech: ["React", "Node.js", "MongoDB"],  // Technologies used
    type: "Web Application",                // Project type
    github: "https://github.com/username/repo",  // Optional
    live: "https://project-url.com",       // Optional
    featured: true,  // Set to true for featured projects
  },
  // Add more projects here
];
```

**Where it appears**:
- Featured projects (if `featured: true`) appear at the top
- Other projects appear in "More Projects" section
- **GitHub repos are auto-fetched** - no need to add them here

---

### 6. Bootcamps
**File**: `lib/data.ts`
**Line**: 87-100

```typescript
export const bootcamps = [
  {
    name: "Bootcamp Name",
    duration: "Month Year - Month Year",
  },
];
```

**Where it appears**: Experience section

---

### 7. Achievements
**File**: `lib/data.ts`
**Line**: 102-114

```typescript
export const achievements = [
  {
    title: "Award Title",
    organization: "Organization Name",
    description: "Description of achievement",
    date: "Month Year",
  },
];
```

**Where it appears**: Experience section

---

### 8. Responsibilities
**File**: `lib/data.ts`
**Line**: 116-125

```typescript
export const responsibilities = [
  {
    title: "Responsibility Title",
    date: "Month Year",
  },
];
```

**Where it appears**: Experience section

---

### 9. Industrial Visits
**File**: `lib/data.ts`
**Line**: 127-139

```typescript
export const industrialVisits = [
  {
    company: "Company Name",
    location: "Location",
    date: "Month Year",
  },
];
```

**Where it appears**: Experience section

---

## 🎨 Customizing Styles & Colors

### Theme Colors
**File**: `app/globals.css`

**Light Mode Colors**:
- Background: `#ffffff` (white)
- Text: `#171717` (dark gray)

**Dark Mode Colors**:
- Background: `#0a0a0a` (near black)
- Text: `#ededed` (light gray)

**Gradient Colors** (used in titles, buttons):
- Purple: `#667eea`
- Pink: `#764ba2`
- Modify line 65-70 in `globals.css`

---

## 📧 Email Configuration

### Contact Form Setup
**File**: `app/api/contact/route.ts`
**Current**: Gmail SMTP
**Email**: ebymathew142@gmail.com

**To change email recipient**:
1. Edit `route.ts` line 12 and 20 (change `to:` field)
2. Update `EMAIL_APP_PASSWORD` in `.env.local`
3. Update on Vercel: Settings → Environment Variables

**Gmail App Password Setup**:
1. Go to Google Account → Security
2. Enable 2-Factor Authentication
3. Generate App Password
4. Add to `.env.local`:
```
EMAIL_APP_PASSWORD=your_app_password_here
```

---

## 📄 Resume Management

### Updating Your Resume
**File**: `public/resume.pdf`

**Steps**:
1. Replace `public/resume.pdf` with your new PDF
2. Keep the filename as `resume.pdf`
3. Commit and push changes:
```bash
git add public/resume.pdf
git commit -m "Update resume"
git push origin main
```

**Download Button**: Hero section and Contact section

---

## 💻 Development Workflow

### 1. Start Development Server
```bash
cd portfolio-eby
npm run dev
```
- Opens at `http://localhost:3000`
- Auto-reloads on file changes
- Hot module replacement enabled

### 2. Make Changes
- Edit `lib/data.ts` for content changes
- Edit component files for UI changes
- Changes appear immediately in browser

### 3. Test Changes
- Check all sections
- Test theme toggle (light/dark mode)
- Test responsive design (mobile/tablet/desktop)
- Test contact form
- Test resume download

### 4. Commit Changes
```bash
git add -A
git commit -m "Description of changes"
git push origin main
```

---

## 🚀 Deployment

### Automatic Deployment (Recommended)
Your portfolio auto-deploys on every push to GitHub!

**Steps**:
1. Make changes locally
2. Test with `npm run dev`
3. Commit and push:
```bash
git add -A
git commit -m "Your changes"
git push origin main
```
4. Vercel automatically builds and deploys
5. Check deployment at: https://vercel.com/eby-mathews-projects/portfolio-eby

### Manual Deployment
```bash
# Build locally first
npm run build

# Deploy to Vercel
vercel --prod
```

### Production URL
**Main Domain**: https://portfolio-eby.vercel.app
**GitHub**: https://github.com/eby99/Portfolio

---

## 🛠️ Tech Stack

### Frontend Framework
- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript

### Styling
- **Tailwind CSS v4** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Custom CSS** - 3D animations and effects

### 3D Graphics
- **Three.js** - 3D library
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for Three.js

### Icons & UI
- **Lucide React** - Icon library
- **Custom gradients** - Purple/pink theme

### Backend & APIs
- **Next.js API Routes** - Serverless functions
- **Nodemailer** - Email sending
- **GitHub REST API** - Auto-fetch repositories

### Deployment
- **Vercel** - Hosting platform
- **GitHub** - Version control
- **Git** - Source control

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Turbopack** - Fast bundler

---

## ❓ Troubleshooting

### Build Errors

**Problem**: Build fails with TypeScript errors
**Solution**:
```bash
npm run build
# Fix errors shown in terminal
```

**Problem**: ESLint errors about apostrophes
**Solution**: Use `&apos;` instead of `'` in JSX text

**Problem**: Module not found errors
**Solution**:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Theme Toggle Not Working

**Problem**: Theme doesn't switch
**Solution**:
- Check browser console for errors
- Clear browser cache (Ctrl+Shift+Delete)
- Check `Navbar.tsx` line 45-55

**Problem**: Dark mode colors not visible
**Solution**:
- Check `app/globals.css` line 84-132
- Verify `.dark` class is on `<html>` element

### Contact Form Issues

**Problem**: Email not sending
**Solution**:
1. Check `.env.local` has `EMAIL_APP_PASSWORD`
2. Verify Gmail App Password is correct
3. Check `app/api/contact/route.ts` line 9-15

**Problem**: "Failed to send message" error
**Solution**:
- Check network tab in browser DevTools
- Verify email server settings
- Check Vercel deployment logs

### Deployment Issues

**Problem**: Vercel deployment fails
**Solution**:
1. Check build logs on Vercel dashboard
2. Ensure `npm run build` works locally
3. Check environment variables are set on Vercel

**Problem**: Changes not appearing on live site
**Solution**:
- Wait 1-2 minutes for deployment to complete
- Force refresh browser (Ctrl+Shift+R)
- Check Vercel dashboard for deployment status

### GitHub Issues

**Problem**: Push rejected
**Solution**:
```bash
git pull origin main
# Resolve any conflicts
git push origin main
```

**Problem**: Large file error (resume too big)
**Solution**:
- Compress PDF to <5MB
- Use online PDF compressor tools

---

## 📞 Admin Dashboard

**URL**: `/admin`
**Password**: `admin123`

**Note**: Admin dashboard is UI-only. To make permanent changes, edit `lib/data.ts` directly.

---

## 🎯 Quick Reference

| Task | Command |
|------|---------|
| Start dev server | `npm run dev` |
| Build for production | `npm run build` |
| Deploy to Vercel | `git push origin main` |
| Edit content | Edit `lib/data.ts` |
| Update resume | Replace `public/resume.pdf` |
| Change email | Edit `app/api/contact/route.ts` |
| Modify styles | Edit `app/globals.css` |

---

## 📚 Useful Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion
- **Vercel Docs**: https://vercel.com/docs
- **Lucide Icons**: https://lucide.dev/icons

---

## 🎉 You're All Set!

Your portfolio is fully functional and deployed. Simply edit `lib/data.ts` to update content, and your changes will automatically deploy when you push to GitHub!

**Live URL**: https://portfolio-eby.vercel.app
**GitHub**: https://github.com/eby99/Portfolio

---

*Last updated: October 2025*
*Created with Claude Code by Anthropic*
