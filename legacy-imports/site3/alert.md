
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
---
layout: base.njk
title: Legacy Alert Component
eleventyNavigation:
  key: Legacy Alert
  parent: Components
  order: 112
---

# Legacy Alert Component

This is a legacy alert component from site 3.

## Usage

```html
<div class="legacy-alert legacy-alert-info">
  <span class="legacy-alert-icon">i</span>
  <div class="legacy-alert-content">This is an informational alert</div>
</div>
```

## Examples

<div class="bg-blue-100 border-l-4 border-blue-500 p-4 my-6">
  <div class="flex">
    <div class="flex-shrink-0">
      <svg class="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
      </svg>
    </div>
    <div class="ml-3">
      <p class="text-sm text-blue-700">This is an example of a legacy alert component from site 3.</p>
    </div>
  </div>
</div>

## Properties

| Property | Type | Description |
|----------|------|-------------|
| type | string | Alert type (info, success, warning, error) |
| dismissible | boolean | Whether the alert can be dismissed |
| inline | boolean | Whether the alert is displayed inline |
