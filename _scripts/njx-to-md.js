/**
 * Script to convert .njx to .md files
 * Run this during the build process to automatically convert legacy .njx files
 */
const fs = require('fs');
const path = require('path');

// Directories to scan for .njx files
const legacyDirs = [
  'legacy-imports/site1',
  'legacy-imports/site2',
  'legacy-imports/site3'
];

// Ensure all directories exist
legacyDirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }
});

// Function to convert .njx to .md
function convertNjxToMd(njxFilePath) {
  // Read the .njx file
  const content = fs.readFileSync(njxFilePath, 'utf8');

  // Create .md file path
  const mdFilePath = njxFilePath.replace('.njx', '.md');

  // Write content to .md file
  fs.writeFileSync(mdFilePath, content);

  console.log(`Converted ${njxFilePath} to ${mdFilePath}`);
}

function processDirectory(directory) {
  if (!fs.existsSync(directory)) {
    console.log(`Directory does not exist: ${directory}`);
    return;
  }

  const files = fs.readdirSync(directory);

  files.forEach(file => {
    const filePath = path.join(directory, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      processDirectory(filePath);
    } else if (path.extname(file) === '.njx') {
      try {
        convertNjxToMd(filePath);
      } catch (error) {
        console.error(`Error processing ${filePath}:`, error);
      }
    }
  });
}

// Process all import directories
legacyDirs.forEach(dir => {
  console.log(`Processing directory: ${dir}`);
  processDirectory(dir);
});

console.log('Conversion completed!');