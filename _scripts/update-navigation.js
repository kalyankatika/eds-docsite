
/**
 * Script to update navigation based on content files
 * This scans all content directories and updates the navigation data
 */
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// Directories to scan for content files
const CONTENT_DIRS = [
  '.', 
  'components', 
  'legacy-imports/site1', 
  'legacy-imports/site2', 
  'legacy-imports/site3'
];

// Output file for navigation data
const OUTPUT_FILE = '_data/navigation.json';

// Function to extract frontmatter from md files
function extractFrontmatter(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(content);
    return data;
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error);
    return null;
  }
}

// Main function to generate navigation structure
function generateNavigation() {
  const navigation = [];
  
  // Process each content directory
  CONTENT_DIRS.forEach(dir => {
    if (!fs.existsSync(dir)) {
      console.log(`Directory does not exist: ${dir}`);
      return;
    }
    
    // Get all .md files in the directory
    const files = fs.readdirSync(dir)
      .filter(file => file.endsWith('.md'))
      .map(file => path.join(dir, file));
    
    // Extract navigation data from each file
    files.forEach(file => {
      const frontmatter = extractFrontmatter(file);
      
      if (frontmatter && frontmatter.eleventyNavigation) {
        const { eleventyNavigation } = frontmatter;
        
        // Create navigation item
        const navItem = {
          key: eleventyNavigation.key,
          title: eleventyNavigation.title || eleventyNavigation.key,
          url: `/${file.replace(/\\/g, '/').replace(/\.md$/, '')}`,
          order: eleventyNavigation.order || 999,
          parent: eleventyNavigation.parent || null
        };
        
        navigation.push(navItem);
      }
    });
  });
  
  // Sort navigation items by order
  navigation.sort((a, b) => a.order - b.order);
  
  // Write to navigation data file
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(navigation, null, 2));
  console.log(`Navigation data written to ${OUTPUT_FILE}`);
}

generateNavigation();
