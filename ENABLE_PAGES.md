# Enable GitHub Pages - Quick Steps

## ✅ Built files are now committed!

The built files have been pushed to the repository. Now you just need to enable GitHub Pages.

## Steps to Enable (30 seconds):

1. **Go to Pages Settings:**
   https://github.com/jonathanmorav/jamm-capital-cakewalk-benefits-meeting/settings/pages

2. **Configure Pages:**
   - Under **"Source"**, select: **"Deploy from a branch"**
   - **Branch:** Select `main`
   - **Folder:** Select `/docs`
   - Click **"Save"**

3. **Wait 1-2 minutes** for GitHub to build and deploy

4. **Your site will be live at:**
   https://jonathanmorav.github.io/jamm-capital-cakewalk-benefits-meeting/

## Verify It's Working:

- Check the Pages settings page - you should see a green checkmark ✅
- Visit the site URL above
- If you see a 404, wait another minute and refresh

## Future Updates:

Every time you push changes to `main`, you'll need to rebuild and commit:
```bash
npm run build
git add docs/
git commit -m "build: Update built files"
git push
```

Or switch to GitHub Actions (see FIX_PAGES.md) for automatic deployments.


