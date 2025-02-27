
---
layout: "base.njk"
title: "Project Structure"
eleventyNavigation:
  key: Project Structure
  parent: Documentation
  order: 10
---

# Project Structure

This documentation site is built with Eleventy and organized to provide a clear, maintainable structure for all content.

## Directory Structure

- `_data/`: Contains site data files (navigation, metadata)
- `_includes/`: Layout templates and partials
- `_scripts/`: Utility scripts for build processes
- `components/`: Component documentation
- `legacy-imports/`: Imported content from legacy systems
- `docs/`: General documentation pages
- `assets/`: Static assets (images, JavaScript)
- `css/`: Stylesheets and Tailwind configuration

## Key Files

- `.eleventy.js`: Eleventy configuration
- `tailwind.config.js`: Tailwind CSS configuration
- `package.json`: Project dependencies and scripts

## Navigation Structure

The site navigation is automatically generated from the frontmatter in markdown files. Each page can define its position in the navigation using the `eleventyNavigation` property.

```yaml
eleventyNavigation:
  key: Page Name
  parent: Parent Section (optional)
  order: 10
```

## Legacy Content Integration

Legacy documentation from previous systems is integrated through the `legacy-imports` directory structure. Content is organized by source system and automatically converted from `.njx` to `.md` format during the build process.
