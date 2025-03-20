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
  copyFiles([
    'templates/optimole-pricing.php',
    'templates/optimole-home.php',
    'templates/optimole-about.php',
    'templates/optimole-compress.php',
    'templates/optimole-contact.php'
  ], 'optimole-templates/templates/');
  
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

// Build the React application with WordPress-specific configuration
function buildReactApp() {
  console.log('Building React application for WordPress...');
  
  // Create a temporary entry point for WordPress
  createFile('src/wordpress-entry.jsx', `
    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import OptimolePricingRedesign from './components/OptimolePricingRedesign';
    import HomePage from './components/HomePage';
    import OptimoleAboutPage from './components/AboutPage';
    import OptimoleImageCompressor from './components/ImageCompression';
    import ContactPage from './components/ContactPage';
    import './index.css';

    // Get template data from WordPress
    const templateData = window.optimoleTemplatesData || {};
    const templateType = templateData.templateType || '';
    
    // Mount the appropriate component based on the template type
    document.addEventListener('DOMContentLoaded', () => {
      // Pricing Page
      const pricingRoot = document.getElementById('optimole-pricing-root');
      if (pricingRoot && (templateType === 'pricing' || !templateType)) {
        ReactDOM.createRoot(pricingRoot).render(
          <React.StrictMode>
            <OptimolePricingRedesign />
          </React.StrictMode>
        );
      }
      
      // Home Page
      const homeRoot = document.getElementById('optimole-home-root');
      if (homeRoot && (templateType === 'home' || !templateType)) {
        ReactDOM.createRoot(homeRoot).render(
          <React.StrictMode>
            <HomePage />
          </React.StrictMode>
        );
      }
      
      // About Page
      const aboutRoot = document.getElementById('optimole-about-root');
      if (aboutRoot && (templateType === 'about' || !templateType)) {
        ReactDOM.createRoot(aboutRoot).render(
          <React.StrictMode>
            <OptimoleAboutPage />
          </React.StrictMode>
        );
      }
      
      // Image Compression Page
      const compressRoot = document.getElementById('optimole-compress-root');
      if (compressRoot && (templateType === 'compress' || !templateType)) {
        ReactDOM.createRoot(compressRoot).render(
          <React.StrictMode>
            <OptimoleImageCompressor />
          </React.StrictMode>
        );
      }
      
      // Contact Page
      const contactRoot = document.getElementById('optimole-contact-root');
      if (contactRoot && (templateType === 'contact' || !templateType)) {
        ReactDOM.createRoot(contactRoot).render(
          <React.StrictMode>
            <ContactPage />
          </React.StrictMode>
        );
      }
    });
  `);
  
  // Create a temporary Vite config for WordPress build
  createFile('vite.config.wordpress.js', `
    import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react'
    
    // https://vitejs.dev/config/
    export default defineConfig({
      plugins: [react()],
      build: {
        outDir: 'optimole-templates/assets/build',
        rollupOptions: {
          input: {
            main: 'src/wordpress-entry.jsx',
          },
          output: {
            entryFileNames: 'js/[name].js',
            chunkFileNames: 'js/[name]-[hash].js',
            assetFileNames: (assetInfo) => {
              const info = assetInfo.name.split('.');
              const extType = info[info.length - 1];
              if (/\.(css|scss|sass)$/.test(assetInfo.name)) {
                return 'css/[name][extname]';
              }
              return 'assets/[name]-[hash][extname]';
            },
          },
        },
        assetsInlineLimit: 0,
      },
    })
  `);
  
  // Run the build command
  try {
    console.log('Building React app...');
    execSync('npx vite build --config vite.config.wordpress.js', { stdio: 'inherit' });
    console.log('React build complete!');
  } catch (error) {
    console.error('Failed to build React app:', error);
    process.exit(1);
  }
  
  // Clean up temporary files
  fs.unlinkSync(path.resolve(__dirname, 'src/wordpress-entry.jsx'));
  fs.unlinkSync(path.resolve(__dirname, 'vite.config.wordpress.js'));
}

// Create README for the WordPress plugin
function createReadme() {
  createFile('optimole-templates/README.md', `
    # Optimole Templates WordPress Plugin
    
    This WordPress plugin integrates Optimole React components as custom page templates.
    
    ## Installation
    
    1. Upload the \`optimole-templates\` folder to the \`/wp-content/plugins/\` directory
    2. Activate the plugin through the 'Plugins' menu in WordPress
    3. Create new pages and select Optimole Templates from the Template dropdown
    
    ## Features
    
    - Adds page templates for Optimole components (Pricing, Home, About, Image Compression, Contact)
    - Provides shortcodes for embedding components in any page/post
    - Responsive design works with most WordPress themes
    
    ## Usage
    
    ### Page Templates
    
    1. Create a new page or edit an existing one
    2. In the Page Attributes meta box, select one of the following templates:
       - Optimole Pricing
       - Optimole Home
       - Optimole About
       - Optimole Image Compression
       - Optimole Contact
    3. Publish or update the page
    
    ### Shortcodes
    
    You can also use shortcodes to embed components anywhere:
    
    - \`[optimole_pricing]\` - Displays the pricing page
    - \`[optimole_compress]\` - Displays the image compression tool
    - \`[optimole_about]\` - Displays the about page
    - \`[optimole_contact]\` - Displays the contact form
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
  
  // Build React app for WordPress
  buildReactApp();
  
  // Create README
  createReadme();
  
  console.log('WordPress plugin build complete!');
}

// Run the build process
buildWordPressPlugin(); 