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
  <span class="legacy-alert-icon">ℹ️</span>
  <div class="legacy-alert-content">This is an informational alert.</div>
</div>
```

## Examples

<div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
  <div class="flex">
    <div class="flex-shrink-0">ℹ️</div>
    <div class="ml-3">
      <p class="text-sm text-blue-700">
        This is an information alert. It provides important information.
      </p>
    </div>
  </div>
</div>

<div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-4">
  <div class="flex">
    <div class="flex-shrink-0">⚠️</div>
    <div class="ml-3">
      <p class="text-sm text-yellow-700">
        This is a warning alert. Be careful with this action.
      </p>
    </div>
  </div>
</div>

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| type | string | 'info' | Alert type (info, success, warning, error) |
| dismissible | boolean | false | Whether the alert can be dismissed |
| icon | boolean | true | Whether to show the alert icon |