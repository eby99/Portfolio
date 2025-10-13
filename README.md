# Eby Mathew - Portfolio Website

A modern, professional, and visually stunning personal portfolio website built with Next.js 15, TypeScript, and Tailwind CSS v4.

## 📖 Complete Documentation

**👉 For detailed instructions, see [PORTFOLIO_GUIDE.md](./PORTFOLIO_GUIDE.md)**

The comprehensive guide includes:
- Quick start commands
- How to edit content
- Deployment instructions
- Troubleshooting tips
- Complete tech stack overview

## Features

- **Modern Design**: Clean, professional design with smooth animations and responsive layout
- **Dark/Light Theme**: Toggle between dark and light themes with persistent preference
- **Dynamic Projects**: Auto-fetch projects from GitHub using GitHub API
- **Admin Dashboard**: Secure dashboard to manage portfolio content (password protected)
- **Sections**:
  - Hero Section with social links
  - About Me with education
  - Skills & Certifications
  - Projects (GitHub integration)
  - Experience & Achievements
  - Contact Form

## Tech Stack

- **Frontend**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Backend**: Firebase (optional for content management)
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Configure environment variables**:

   Edit the `.env.local` file and add your credentials:
   ```env
   # GitHub API (required for projects section)
   NEXT_PUBLIC_GITHUB_USERNAME=eby99
   NEXT_PUBLIC_GITHUB_TOKEN=your_github_token_here (optional, for higher rate limits)

   # Firebase Config (optional, for advanced features)
   NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

   # Admin Dashboard Password (change this!)
   NEXT_PUBLIC_ADMIN_PASSWORD=your_secure_password_here
   ```

3. **Update personal information**:

   Edit `lib/data.ts` to customize your portfolio content (name, bio, skills, education, etc.)

### Running Locally

1. **Start the development server**:
   ```bash
   npm run dev
   ```

2. **Open your browser** and navigate to:
   - Portfolio: `http://localhost:3000`
   - Admin Dashboard: `http://localhost:3000/admin`

3. **Login to admin dashboard** with the password you set in `.env.local` (default: `admin123`)

### Building for Production

```bash
npm run build
npm start
```

## Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

4. **Set environment variables** in Vercel Dashboard:
   - Go to your project settings
   - Add all environment variables from `.env.local`
   - Redeploy if necessary

### Alternative: Deploy via Vercel Website

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables
5. Deploy!

### Other Deployment Options

- **Netlify**: Connect your GitHub repo and deploy
- **Render**: Similar to Vercel, connect and deploy
- **GitHub Pages**: Requires static export configuration

## Customization

### Update Personal Information

Edit `lib/data.ts`:
```typescript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  email: "your@email.com",
  // ... more fields
};
```

### Add New Sections

1. Create a new component in `components/`
2. Import and add to `app/page.tsx`

### Change Theme Colors

Edit `app/globals.css` and update the gradient colors:
```css
.gradient-text {
  background: linear-gradient(135deg, #your-color1 0%, #your-color2 100%);
}
```

### Customize Animations

Components use Framer Motion. Modify animation variants in each component file.

## Admin Dashboard

Access at `/admin` with your configured password.

**Default password**: `admin123` (Change this in production!)

**Features**:
- Edit profile information
- View GitHub projects
- Manage contact messages (when backend is connected)
- Preview changes before publishing

## Security Notes

⚠️ **Important Security Reminders**:

1. **Change the default admin password** in `.env.local`
2. **Never commit** `.env.local` to version control
3. For production, consider implementing proper authentication (OAuth, JWT, etc.)
4. The current admin dashboard uses simple password authentication for demonstration

## GitHub API Rate Limits

- **Without token**: 60 requests/hour
- **With token**: 5000 requests/hour

To avoid rate limiting, add a GitHub Personal Access Token to `.env.local`.

## Troubleshooting

### Projects not loading
- Check GitHub username in `.env.local`
- Verify GitHub API rate limits
- Check browser console for errors

### Theme not persisting
- Clear browser cache and localStorage
- Check if JavaScript is enabled

### Build errors
- Delete `node_modules` and `.next` folders
- Run `npm install` again
- Check Node.js version (18+ required)

## Support

For issues or questions:
- Email: ebymathewoffical@outlook.com
- GitHub: [github.com/eby99](https://github.com/eby99)
- LinkedIn: [linkedin.com/in/eby-mathew-838a02313](https://www.linkedin.com/in/eby-mathew-838a02313)

## License

This project is open source and available for personal and commercial use.

---

**Built with ❤️ by Eby Mathew**
