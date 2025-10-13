# How to Start the Portfolio Project

## After System Restart - Quick Start Commands

### Method 1: Quick Start (Recommended)
Open Terminal/Command Prompt and run:

```bash
# Navigate to project directory
cd E:\Portfolio\portfolio-eby

# Start the development server
npm run dev
```

### Method 2: Using VS Code
1. Open VS Code
2. File → Open Folder → Select `E:\Portfolio\portfolio-eby`
3. Open Terminal in VS Code (Ctrl + `)
4. Run: `npm run dev`

### Method 3: Windows Command Prompt
```cmd
cd /d E:\Portfolio\portfolio-eby
npm run dev
```

## Accessing the Portfolio

Once the server starts (takes ~10 seconds), open your browser and visit:

- **Main Portfolio**: http://localhost:3000
- **Admin Dashboard**: http://localhost:3000/admin

The server will automatically open in your default browser.

## Stopping the Server

Press `Ctrl + C` in the terminal to stop the development server.

## Common Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server (after building)
npm start

# Run linter
npm run lint

# Install dependencies (if needed)
npm install
```

## Troubleshooting

### "npm: command not found"
- Install Node.js from https://nodejs.org/ (version 18 or higher)
- Restart terminal after installation

### "Module not found" errors
```bash
cd E:\Portfolio\portfolio-eby
npm install
npm run dev
```

### Port 3000 already in use
```bash
# Kill process using port 3000
npx kill-port 3000

# Or run on different port
npm run dev -- -p 3001
```

### Changes not reflecting
1. Stop server (Ctrl + C)
2. Clear Next.js cache:
```bash
rm -rf .next
# or on Windows:
rmdir /s .next
```
3. Start server again:
```bash
npm run dev
```

## Important Files to Edit

After starting the server, you can edit these files to customize your portfolio:

- `lib/data.ts` - All your personal information, skills, projects, etc.
- `.env.local` - Environment variables (admin password, email config)
- `app/globals.css` - Colors and styles
- `components/` - Individual page sections

Changes will automatically refresh in the browser!

## Admin Dashboard Access

**URL**: http://localhost:3000/admin
**Password**: Check `.env.local` file (default: `admin123`)

## Deployment

When ready to deploy:
```bash
# Build the project
npm run build

# Deploy to Vercel
npx vercel
```

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## Quick Reference

| Action | Command |
|--------|---------|
| Start Server | `npm run dev` |
| Stop Server | `Ctrl + C` |
| Build Project | `npm run build` |
| Open Portfolio | http://localhost:3000 |
| Open Admin | http://localhost:3000/admin |
| View Logs | Check terminal output |

## Need Help?

- Check [README.md](./README.md) for full documentation
- Check [QUICK_START.md](./QUICK_START.md) for getting started guide
- Email: ebymathew619@gmail.com

---

**Note**: Keep the terminal window open while working on the portfolio. The server must be running to view changes in real-time.
