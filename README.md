# PurePoint Cleaning Website

This is the official website for PurePoint Cleaning, a commercial cleaning company based in Atlanta.

## Technologies Used

- React.js
- TypeScript
- Tailwind CSS
- Vite (as build tool)

## Deployment Instructions for Netlify via GitHub

### 1. Set up the GitHub Repository

1. Create a new repository on GitHub
2. Push this code to the repository:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin [your-github-repo-url]
git push -u origin main
```

### 2. Connect to Netlify

1. Log in to your Netlify account
2. Click "Add new site" > "Import an existing project"
3. Select GitHub and authorize Netlify
4. Select your repository

### 3. Configure the Build Settings

Netlify should automatically detect the settings from the `netlify.toml` file, but you can verify them:

- Build command: `npm run build`
- Publish directory: `dist/public`
- Base directory: `.` (root of the project)

### 4. Deploy the Site

1. Click "Deploy site"
2. Netlify will build and deploy your site
3. Once complete, you can set up a custom domain in site settings

## Development

To start the development server:

```bash
npm run dev
```

## Forms

The contact form is configured to work with Netlify Forms. Form submissions can be viewed in the Netlify dashboard under the "Forms" tab.

## Contact

For any inquiries about this website, please contact: Laure@purepointcleaning.com