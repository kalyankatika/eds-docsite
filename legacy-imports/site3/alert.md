
---
layout: base.njk
title: Legacy Alert Component
eleventyNavigation:
  key: Legacy Alert
  parent: Components
  order: 130
---

# Legacy Alert Component

This is a legacy alert component from site 3.

## Usage

```html
<div class="legacy-alert legacy-alert-info">
  This is an information alert message
</div>
```

## Examples

<div class="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 my-8">
  <p>Information: This is an example of an alert component</p>
</div>

<div class="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 my-8">
  <p>Success: Operation completed successfully</p>
</div>

<div class="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 my-8">
  <p>Warning: This action cannot be undone</p>
</div>

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| type | string | 'info' | Alert type (info, success, warning, error) |
| dismissible | boolean | false | Whether the alert can be dismissed |
| icon | boolean | true | Whether to show an icon |
