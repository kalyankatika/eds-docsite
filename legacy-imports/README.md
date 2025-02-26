
# Legacy Documentation Import Guide

This directory contains imported documentation from three legacy documentation sites.

## Structure

- `site1/`: Contains documentation from the first legacy site
- `site2/`: Contains documentation from the second legacy site 
- `site3/`: Contains documentation from the third legacy site

## How to Import New Content

1. Place `.md` or `.njx` files in the appropriate legacy site directory
2. The build process will automatically:
   - Convert `.njx` files to `.md` format
   - Update the navigation structure
   - Build the site with the new content

## Manual Import

To manually import and process legacy files:

```
npm run convert-legacy   # Convert .njx to .md
npm run update-nav       # Update navigation
npm run build            # Build the site
```

## Notes on File Format

- `.njx` files are automatically converted to `.md` during build
- Frontmatter should include proper eleventyNavigation data for navigation integration
- Example frontmatter:

```yaml
---
layout: base.njk
title: My Legacy Document
eleventyNavigation:
  key: LegacyDoc
  parent: Documentation
  order: 100
---
```
