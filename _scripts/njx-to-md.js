
/**
 * Script to convert .njx to .md files
 * Run this during the build process to automatically convert legacy .njx files
 */
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

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
  
  try {
    // Parse frontmatter if exists
    const parsedContent = matter(content);
    
    // Create .md file path
    const mdFilePath = njxFilePath.replace('.njx', '.md');
    
    // Reconstruct the content with frontmatter
    let mdContent = '';
    
    // Add frontmatter if it exists
    if (Object.keys(parsedContent.data).length > 0) {
      mdContent = '---\n';
      
      // Add each frontmatter field
      Object.entries(parsedContent.data).forEach(([key, value]) => {
        if (typeof value === 'object') {
          mdContent += `${key}:\n`;
          
          // Handle nested objects like eleventyNavigation
          Object.entries(value).forEach(([nestedKey, nestedValue]) => {
            mdContent += `  ${nestedKey}: ${nestedValue}\n`;
          });
        } else {
          mdContent += `${key}: ${value}\n`;
        }
      });
      
      mdContent += '---\n\n';
    }
    
    // Add the content body
    mdContent += parsedContent.content;
    
    // Write content to .md file
    fs.writeFileSync(mdFilePath, mdContent);
    
    console.log(`Converted ${njxFilePath} to ${mdFilePath}`);
  } catch (error) {
    console.error(`Error parsing frontmatter in ${njxFilePath}:`, error);
    
    // Fallback to direct copy if frontmatter parsing fails
    const mdFilePath = njxFilePath.replace('.njx', '.md');
    fs.writeFileSync(mdFilePath, content);
    console.log(`Converted ${njxFilePath} to ${mdFilePath} (without frontmatter processing)`);
  }
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
