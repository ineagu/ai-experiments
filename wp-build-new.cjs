const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Main function to build the WordPress plugin
function buildWordPressPlugin() {
  try {
    console.log('Building Optimole Templates WordPress Plugin...');
    
    const wpPluginDir = path.resolve(__dirname, 'wordpress-plugin');
    const distDir = path.resolve(__dirname, 'dist');
    
    console.log(`WordPress plugin directory: ${wpPluginDir}`);
    console.log(`Dist directory: ${distDir}`);
    
    // Check if the WordPress plugin directory exists
    if (!fs.existsSync(wpPluginDir)) {
      console.error('WordPress plugin directory not found.');
      process.exit(1);
    }
    
    // Check if dist directory exists
    if (!fs.existsSync(distDir)) {
      console.error('Dist folder not found. Run "npm run build" first.');
      process.exit(1);
    }
    
    // 1. Clear existing dist directory in wp plugin
    console.log('Cleaning WordPress plugin dist directory...');
    if (fs.existsSync(path.join(wpPluginDir, 'dist'))) {
      execSync(`rm -rf ${path.join(wpPluginDir, 'dist')}`, { stdio: 'inherit' });
    }
    
    // 2. Copy the React build files to wp plugin dist
    console.log('Copying React build files to WordPress plugin...');
    execSync(`mkdir -p ${path.join(wpPluginDir, 'dist')}`, { stdio: 'inherit' });
    execSync(`cp -R ${path.join(distDir, '*')} ${path.join(wpPluginDir, 'dist/')}`, { stdio: 'inherit' });
    
    // 3. Build WordPress-specific main.js file
    console.log('Building WordPress-specific main.js...');
    try {
      // Build with WordPress-specific Vite config
      execSync(`npx vite build --config vite.config.wordpress.js`, { stdio: 'inherit' });
      console.log('Successfully built WordPress main.js');
    } catch (error) {
      console.error('Error building WordPress main.js:', error);
      
      // Fallback to copying the React app's index.js if WordPress build fails
      console.log('Falling back to copying React index.js to main.js...');
      const mainJsDir = path.join(wpPluginDir, 'assets', 'build', 'js');
      
      // Ensure directory exists
      if (!fs.existsSync(mainJsDir)) {
        fs.mkdirSync(mainJsDir, { recursive: true });
      }
      
      // Find the main JS file from dist/assets
      const assetsDir = path.join(distDir, 'assets');
      const assetFiles = fs.readdirSync(assetsDir);
      const indexJsFile = assetFiles.find(file => file.startsWith('index-') && file.endsWith('.js'));
      
      if (!indexJsFile) {
        console.error('Could not find index JS file in dist/assets');
        process.exit(1);
      }
      
      // Copy the index JS file to main.js
      const indexJsPath = path.join(distDir, 'assets', indexJsFile);
      const mainJsPath = path.join(mainJsDir, 'main.js');
      
      fs.copyFileSync(indexJsPath, mainJsPath);
      console.log(`Fallback: Copied ${indexJsFile} to assets/build/js/main.js`);
      
      // Create main.js.map file
      const mainJsMapPath = path.join(mainJsDir, 'main.js.map');
      fs.writeFileSync(mainJsMapPath, JSON.stringify({
        version: 3,
        file: "main.js",
        sources: ["index.js"],
        names: [],
        mappings: ""
      }));
      console.log('Created main.js.map file');
    }
    
    // 4. Create the plugin zip file
    console.log('Creating WordPress plugin ZIP file...');
    execSync(`cd ${wpPluginDir} && zip -r optimole-plugin.zip .`, { stdio: 'inherit' });
    console.log('WordPress plugin ZIP file created: wordpress-plugin/optimole-plugin.zip');
    
    // 5. Check if there are unnecessary files to clean up
    console.log('Checking for unnecessary files to clean up...');
    const checkUnnecessaryFile = (filePath) => {
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
        console.log(`Deleted unnecessary file: ${filePath}`);
      }
    };
    
    // Delete the root wordpress-plugin.zip if it exists
    checkUnnecessaryFile(path.join(__dirname, 'wordpress-plugin.zip'));
    
    console.log('WordPress plugin build complete!');
    console.log('--------------------------------------');
    console.log('IMPORTANT: Open your browser\'s developer console when testing the WordPress plugin.');
    console.log('Look for logs starting with "WordPress entry file loaded" to debug any issues.');
    console.log('--------------------------------------');
  } catch (error) {
    console.error('Error building WordPress plugin:', error);
    process.exit(1);
  }
}

// Run the build process
console.log('Starting WordPress plugin build process...');
buildWordPressPlugin(); 