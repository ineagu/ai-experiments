#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

console.log('Setting up for local testing...');

// Path to the index.html file
const indexPath = path.join(__dirname, 'dist', 'index.html');

// Read the current content of index.html
const originalContent = fs.readFileSync(indexPath, 'utf8');

// Save the original content to a backup file
fs.writeFileSync(indexPath + '.bak', originalContent);
console.log('✅ Original index.html backed up');

// Create the modified content with relative paths
const modifiedContent = originalContent
  .replace(/src="\/ai-experiments\/assets\//g, 'src="./assets/')
  .replace(/href="\/ai-experiments\/assets\//g, 'href="./assets/');

// Write the modified content to index.html
fs.writeFileSync(indexPath, modifiedContent);
console.log('✅ index.html updated with relative paths');

// Start the serve command
console.log('Starting local server...');
const serveProcess = spawn('npx', ['serve', 'dist'], { stdio: 'inherit' });

// Handle cleanup when process is terminated
const cleanup = () => {
  console.log('\nRestoring original index.html...');
  fs.copyFileSync(indexPath + '.bak', indexPath);
  fs.unlinkSync(indexPath + '.bak');
  console.log('✅ Original index.html restored');
  process.exit();
};

// Listen for termination signals
process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);

console.log('\nPress Ctrl+C to stop the server and restore the original file'); 