# JAMM Capital <> Cakewalk Benefits Meeting

## Project info

**URL**: https://lovable.dev/projects/a8faefa6-e66b-4cc4-acd1-d8d029234bdb

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/a8faefa6-e66b-4cc4-acd1-d8d029234bdb) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

### GitHub Pages (Recommended)

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

**Setup Instructions:**

1. **Create a GitHub Repository:**
   ```bash
   # Create a new repository on GitHub (via web interface or CLI)
   # Repository name: jamm-capital-cakewalk-benefits-meeting
   ```

2. **Push to GitHub:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/jamm-capital-cakewalk-benefits-meeting.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - The site will automatically deploy on every push to `main`

4. **Access your site:**
   - Your site will be available at: `https://YOUR_USERNAME.github.io/jamm-capital-cakewalk-benefits-meeting/`
   - For user/organization pages, it will be at: `https://YOUR_USERNAME.github.io/` (if repo name matches username)

**Note:** If deploying to a project page (repo name ≠ username), update `VITE_BASE` in `.github/workflows/deploy.yml` to `"/jamm-capital-cakewalk-benefits-meeting/"`

### Alternative: Lovable Deployment

Simply open [Lovable](https://lovable.dev/projects/a8faefa6-e66b-4cc4-acd1-d8d029234bdb) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
