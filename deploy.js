// deploy.js
const { execSync } = require('child_process');
const fs = require('fs');

console.log('🚀 Starting manual deployment...');

try {
  // 1. Create and checkout gh-pages branch in a temp folder
  console.log('📦 Preparing gh-pages branch...');
  execSync(`
    mkdir temp-deploy && 
    cd temp-deploy && 
    git init && 
    git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git && 
    git fetch origin gh-pages && 
    git checkout -b gh-pages origin/gh-pages || git checkout --orphan gh-pages
  `, { stdio: 'inherit' });

  // 2. Copy dist contents to temp folder
  console.log('📂 Copying build files...');
  fs.cpSync('dist', 'temp-deploy', { recursive: true });

  // 3. Commit and force push
  console.log('⚡ Deploying to GitHub...');
  execSync(`
    cd temp-deploy && 
    git add -A && 
    git commit -m "Deploy to GitHub Pages" && 
    git push origin gh-pages --force
  `, { stdio: 'inherit' });

  console.log('\x1b[32m✅ Success! Your site is deployed.\x1b[0m');
} catch (error) {
  console.error('\x1b[31m❌ Deployment failed:\x1b[0m', error);
} finally {
  // 4. Clean up
  console.log('🧹 Cleaning up...');
  fs.rmSync('temp-deploy', { recursive: true, force: true });
}