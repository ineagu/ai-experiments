const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Create the directory structure for the WordPress plugin
function createDirectoryStructure() {
  console.log('Creating WordPress plugin directory structure...');
  
  const dirs = [
    'assets/css',
    'assets/js',
    'assets/build/css',
    'assets/build/js',
    'includes',
    'templates'
  ];
  
  // Create directories
  dirs.forEach(dir => {
    const dirPath = path.resolve(__dirname, 'optimole-templates', dir);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
  });
  
  // Copy PHP files
  copyFiles(['optimole-templates.php'], 'optimole-templates/');
  copyFiles(['includes/class-optimole-templates-loader.php'], 'optimole-templates/includes/');
  
  // Get all templates from the templates directory
  const templatesDir = path.resolve(__dirname, 'templates');
  if (fs.existsSync(templatesDir)) {
    const templateFiles = fs.readdirSync(templatesDir)
      .filter(file => file.endsWith('.php'))
      .map(file => `templates/${file}`);
    
    copyFiles(templateFiles, 'optimole-templates/templates/');
  }
  
  // Create admin CSS and JS files
  createFile('optimole-templates/assets/css/admin.css', `
    .optimole-templates-admin {
      padding: 20px;
    }
    
    .optimole-templates-admin h2 {
      font-size: 1.5em;
      margin-bottom: 1em;
    }
  `);
  
  createFile('optimole-templates/assets/js/admin.js', `
    (function($) {
      $(document).ready(function() {
        console.log('Optimole Templates admin scripts loaded');
      });
    })(jQuery);
  `);
}

// Create a file with contents
function createFile(filePath, contents) {
  const fullPath = path.resolve(__dirname, filePath);
  fs.writeFileSync(fullPath, contents.trim());
  console.log(`Created file: ${filePath}`);
}

// Copy files from source to destination
function copyFiles(files, destDir) {
  files.forEach(file => {
    const srcPath = path.resolve(__dirname, file);
    const destPath = path.resolve(__dirname, destDir, path.basename(file));
    
    if (fs.existsSync(srcPath)) {
      // Create destination directory if it doesn't exist
      const destDirPath = path.dirname(destPath);
      if (!fs.existsSync(destDirPath)) {
        fs.mkdirSync(destDirPath, { recursive: true });
      }
      
      // Copy the file
      fs.copyFileSync(srcPath, destPath);
      console.log(`Copied ${file} to ${destDir}`);
    } else {
      console.error(`Source file not found: ${srcPath}`);
    }
  });
}

// Create WordPress plugin README
function createReadme() {
  createFile('optimole-templates/README.md', `
# Optimole Templates WordPress Plugin
    
This WordPress plugin integrates Optimole React components as custom page templates.
    
## Installation
    
1. Upload the \`optimole-templates\` folder to the \`/wp-content/plugins/\` directory
2. Activate the plugin through the 'Plugins' menu in WordPress
3. Create new pages and select Optimole Templates from the Template dropdown
    
## Features
    
- Adds page templates for Optimole components (Pricing, Home, About, Compare, DAM, WordPress, Contact)
- Provides shortcodes for embedding components in any page/post
- Responsive design works with most WordPress themes
    
## Usage
    
### Page Templates
    
1. Create a new page or edit an existing one
2. In the Page Attributes meta box, select one of the following templates:
   - Optimole Pricing
   - Optimole Home
   - Optimole About
   - Optimole Compare
   - Optimole DAM
   - Optimole WordPress
   - Optimole Contact
3. Publish or update the page
  `);
}

// Main function to build the WordPress plugin
function buildWordPressPlugin() {
  console.log('Building Optimole Templates WordPress Plugin...');
  
  // Create the output directory if it doesn't exist
  if (!fs.existsSync(path.resolve(__dirname, 'optimole-templates'))) {
    fs.mkdirSync(path.resolve(__dirname, 'optimole-templates'), { recursive: true });
  }
  
  // Create directory structure and copy files
  createDirectoryStructure();
  
  // Copy dist folder contents
  if (fs.existsSync(path.resolve(__dirname, 'dist'))) {
    // Create destination directory
    const distDestDir = path.resolve(__dirname, 'optimole-templates', 'assets', 'build');
    if (!fs.existsSync(distDestDir)) {
      fs.mkdirSync(distDestDir, { recursive: true });
    }
    
    // Copy dist folder contents
    execSync(`cp -R dist/* optimole-templates/assets/build/`, { stdio: 'inherit' });
    console.log('Copied dist folder contents to optimole-templates/assets/build/');
  } else {
    console.error('Dist folder not found. Run "npm run build" first.');
    process.exit(1);
  }
  
  // Create README
  createReadme();
  
  // Create the ZIP file
  console.log('Creating WordPress plugin ZIP file...');
  execSync('cd optimole-templates && zip -r ../wordpress-plugin.zip .', { stdio: 'inherit' });
  console.log('WordPress plugin ZIP file created: wordpress-plugin.zip');
  
  console.log('WordPress plugin build complete!');
}

// Run the build process
buildWordPressPlugin(); 