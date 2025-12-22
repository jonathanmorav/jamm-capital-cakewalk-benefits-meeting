# Fix GitHub Pages Configuration

## Issue
GitHub Pages is currently set to "legacy" branch-based deployment, but we need it to use GitHub Actions.

## Quick Fix (2 minutes)

### Step 1: Disable Legacy Pages
1. Go to: https://github.com/jonathanmorav/jamm-capital-cakewalk-benefits-meeting/settings/pages
2. Under "Source", you'll see it's set to "Deploy from a branch"
3. Change it to **"None"** (this disables legacy Pages)
4. Click **Save**

### Step 2: Enable GitHub Actions Pages
1. Still on the Pages settings page
2. Under "Source", select **"GitHub Actions"**
3. Click **Save**

### Step 3: Trigger Deployment
1. Go to: https://github.com/jonathanmorav/jamm-capital-cakewalk-benefits-meeting/actions
2. Find the "Deploy to GitHub Pages" workflow
3. Click **"Run workflow"** → **"Run workflow"** button
4. Wait 2-3 minutes for deployment

## Alternative: Use Legacy Deployment (Quick but not recommended)

If you want to use the legacy method temporarily:

1. Go to: https://github.com/jonathanmorav/jamm-capital-cakewalk-benefits-meeting/settings/pages
2. Set Source to: **"Deploy from a branch"**
3. Branch: **main**
4. Folder: **/docs**
5. Click **Save**

The site should be available immediately at:
https://jonathanmorav.github.io/jamm-capital-cakewalk-benefits-meeting/

## Verify Deployment

After switching to GitHub Actions:
- Check Actions tab: https://github.com/jonathanmorav/jamm-capital-cakewalk-benefits-meeting/actions
- Look for green checkmark ✅ on "Deploy to GitHub Pages"
- Site URL: https://jonathanmorav.github.io/jamm-capital-cakewalk-benefits-meeting/

## Troubleshooting

**If site shows 404:**
- Wait 2-3 minutes after deployment completes
- Clear browser cache
- Check Actions tab for errors

**If workflow fails:**
- Check the Actions tab for error details
- Ensure Pages source is set to "GitHub Actions" (not "Deploy from a branch")


