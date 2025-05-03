#!/bin/bash

# Clean up previous builds
echo "Cleaning up previous builds..."
rm -rf dist

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the project
echo "Building the project..."
npm run build

echo "Build completed successfully!"
echo "The static files are in the dist/public directory."
echo ""
echo "To deploy to Netlify:"
echo "1. Commit and push your changes to GitHub"
echo "2. Netlify will automatically deploy from the main branch"
echo ""
echo "Or for manual deployment:"
echo "netlify deploy --prod"