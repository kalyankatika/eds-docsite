---
layout: "base.njk"
title: "Documentation"
eleventyNavigation:
  key: Documentation
  order: 3
---

# Documentation

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Basic knowledge of Markdown

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/windsurf-project.git

# Install dependencies
npm install

# Start development server
npm start
```

## Project Structure

```
windsurf-project/
├── _includes/          # Templates and components
├── css/               # Stylesheets
├── _site/             # Generated site (don't edit)
├── .eleventy.js       # Eleventy configuration
└── package.json       # Project dependencies
```

## Creating Content

### Adding New Pages

1. Create a new `.md` file in the root directory
2. Add the required front matter:
   ```yaml
   ---
   layout: "base.njk"
   title: "Your Page Title"
   eleventyNavigation:
     key: Navigation Name
     order: 4
   ---
   ```
3. Add your content using Markdown

### Using Components

To embed a Storybook component:

```html
<div class="storybook-embed">
    <iframe
        src="YOUR_STORYBOOK_URL"
        style="width:100%; height:500px; border:0;"
        title="Storybook Embed"
    ></iframe>
</div>
```
