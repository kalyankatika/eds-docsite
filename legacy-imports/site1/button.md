
---
layout: base.njk
title: Legacy Button Component
eleventyNavigation:
  key: Legacy Button
  parent: Components
  order: 110
---

# Legacy Button Component

This is a legacy button component from site 1.

## Usage

```html
<button class="legacy-btn legacy-btn-primary">Primary Button</button>
<button class="legacy-btn legacy-btn-secondary">Secondary Button</button>
```

## Examples

<div class="flex space-x-4 my-8">
  <button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Primary Button</button>
  <button class="border border-blue-600 text-blue-600 hover:bg-blue-50 px-4 py-2 rounded">Secondary Button</button>
</div>

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| size | string | 'medium' | Button size (small, medium, large) |
| variant | string | 'primary' | Button style (primary, secondary, danger) |
| disabled | boolean | false | Whether the button is disabled |
