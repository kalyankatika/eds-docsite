
/**
 * Script to convert .njx to .md files
 * Run this during the build process to automatically convert legacy .njx files
 */
const fs = require('fs');
const path = require('path');

// Directory to look for .njx files
const IMPORT_DIRS = ['legacy-imports/site1', 'legacy-imports/site2', 'legacy-imports/site3'];

function convertNjxToMd(njxContent) {
  // Basic conversion logic - modify as needed based on actual .njx structure
  let mdContent = njxContent;
  
  // Remove Nunjucks-specific syntax
  mdContent = mdContent.replace(/{%\s*extends\s*["'].*?["']\s*%}/g, '');
  mdContent = mdContent.replace(/{%\s*block\s*.*?%}/g, '');
  mdContent = mdContent.replace(/{%\s*endblock\s*%}/g, '');
  
  // Convert Nunjucks variables to markdown
  mdContent = mdContent.replace(/{{(.*?)}}/g, (match, p1) => `*${p1.trim()}*`);
  
  // Add frontmatter if not exists
  if (!mdContent.startsWith('---')) {
    mdContent = `---\nlayout: base.njk\ntitle: Imported Document\n---\n\n${mdContent}`;
  }
  
  return mdContent;
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
        const content = fs.readFileSync(filePath, 'utf8');
        const mdContent = convertNjxToMd(content);
        
        // Create corresponding .md file
        const mdFilePath = filePath.replace('.njx', '.md');
        fs.writeFileSync(mdFilePath, mdContent);
        console.log(`Converted: ${filePath} → ${mdFilePath}`);
      } catch (error) {
        console.error(`Error processing ${filePath}:`, error);
      }
    }
  });
}

// Process all import directories
IMPORT_DIRS.forEach(dir => {
  console.log(`Processing directory: ${dir}`);
  processDirectory(dir);
});

console.log('Conversion completed!');
