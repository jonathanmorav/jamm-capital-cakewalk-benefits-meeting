# GitHub Pages Deployment Guide

## Quick Start

### Option 1: Using GitHub CLI (Recommended)

If you have GitHub CLI installed:

```bash
# Create a new repository on GitHub
gh repo create jamm-capital-cakewalk-benefits-meeting \
  --public \
  --description "JAMM Capital <> Cakewalk Benefits Meeting - Investor Deck Presentation" \
  --source=. \
  --remote=origin \
  --push
```

### Option 2: Manual Setup

1. **Create a new repository on GitHub:**
   - Go to https://github.com/new
   - Repository name: `jamm-capital-cakewalk-benefits-meeting`
   - Description: "JAMM Capital <> Cakewalk Benefits Meeting - Investor Deck Presentation"
   - Choose Public or Private
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)

2. **Connect your local repository:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/jamm-capital-cakewalk-benefits-meeting.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - Save the settings

4. **Wait for deployment:**
   - Go to **Actions** tab to see the deployment progress
   - Once complete, your site will be available at:
     - `https://YOUR_USERNAME.github.io/jamm-capital-cakewalk-benefits-meeting/` (project page)
     - Or `https://YOUR_USERNAME.github.io/` (if repo name matches your username)

## Deployment Details

- **Build Output:** `docs/` folder (configured in `vite.config.ts`)
- **Workflow:** `.github/workflows/deploy.yml`
- **Auto-deploy:** Every push to `main` branch
- **Base Path:** `/` (for user/org pages) or `/repo-name/` (for project pages)

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file in the `docs/` folder with your domain:
   ```
   yourdomain.com
   ```

2. Configure DNS:
   - Add a CNAME record pointing to `YOUR_USERNAME.github.io`

3. Update GitHub Pages settings:
   - Go to Settings → Pages
   - Enter your custom domain

## Troubleshooting

### Build fails
- Check the Actions tab for error details
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

### Site not updating
- Check Actions tab to ensure deployment completed
- Clear browser cache
- Verify GitHub Pages source is set to "GitHub Actions"

### 404 errors
- Verify `base` path in `vite.config.ts` matches your repository structure
- For project pages, ensure `VITE_BASE` is set correctly in workflow


