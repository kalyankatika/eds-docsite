
---
layout: base.njk
title: Legacy Input from Site 1
eleventyNavigation:
  key: Legacy Input
  parent: Legacy Components
  order: 112
---

# Legacy Input Component

This is a legacy input component from the first documentation site.

## Example Code

```html
<div class="legacy-input-container">
  <label for="legacy-input">Username:</label>
  <input type="text" id="legacy-input" class="legacy-input" placeholder="Enter your username">
</div>
```

## Rendered Example

<div class="bg-gray-100 border border-gray-300 p-4 rounded-md my-4">
  <div class="mb-2">
    <label for="demo-input" class="block text-sm font-medium text-gray-700 mb-1">Username:</label>
    <input type="text" id="demo-input" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" placeholder="Enter your username">
  </div>
</div>

## Properties

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| type | string | 'text' | Type of input (text, password, email, etc.) |
| placeholder | string | '' | Placeholder text to display |
| disabled | boolean | false | Whether the input is disabled |
| required | boolean | false | Whether the input is required |
