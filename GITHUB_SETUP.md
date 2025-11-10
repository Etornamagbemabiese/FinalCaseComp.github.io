# GitHub Setup Instructions

## Step 1: Create Repository on GitHub
1. Go to https://github.com/new
2. Repository name: `rcgloyalty` (or your preferred name)
3. Description: "Royal Caribbean Group Loyalty Forum & AI Companion Website"
4. Choose Public or Private
5. **DO NOT** initialize with README, .gitignore, or license
6. Click "Create repository"

## Step 2: Connect Local Repository to GitHub

After creating the repository, run these commands (replace YOUR_USERNAME and REPO_NAME):

```bash
# Add the remote repository
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Push to GitHub
git push -u origin main
```

## Step 3: Verify Connection

```bash
# Check remote connection
git remote -v

# View repository status
git status
```

## Future Updates

To push future changes:

```bash
# Stage all changes
git add .

# Commit changes
git commit -m "Your commit message describing the changes"

# Push to GitHub
git push
```

## Repository Contents

This repository contains:
- Complete RCG Connect website
- Boatey AI chat interface
- Forum with AI summaries
- Loyalty program pages
- Find a Cruise, Deals, Ships, Destinations pages
- All CSS, JavaScript, and assets

