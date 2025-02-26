
---
layout: base.njk
title: Legacy Card Component
eleventyNavigation:
  key: Legacy Card
  parent: Components
  order: 120
---

# Legacy Card Component

This is a legacy card component from site 2.

## Usage

```html
<div class="legacy-card">
  <div class="legacy-card-header">Card Title</div>
  <div class="legacy-card-body">Card content goes here</div>
  <div class="legacy-card-footer">Card footer</div>
</div>
```

## Examples

<div class="bg-white rounded shadow p-4 max-w-md my-8">
  <h3 class="font-semibold mb-2">Example Card</h3>
  <p class="text-gray-700">This is an example of the legacy card component.</p>
  <div class="mt-4 pt-4 border-t">
    <button class="text-blue-600 hover:underline">Learn More</button>
  </div>
</div>

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| elevation | number | 1 | Card shadow elevation |
| rounded | boolean | true | Whether card has rounded corners |
| bordered | boolean | false | Whether card has a border |
---
layout: base.njk
title: Legacy Card Component
eleventyNavigation:
  key: Legacy Card
  parent: Components
  order: 111
---

# Legacy Card Component

This is a legacy card component from site 2.

## Usage

```html
<div class="legacy-card">
  <div class="legacy-card-header">Card Title</div>
  <div class="legacy-card-body">
    <p>Card content goes here</p>
  </div>
  <div class="legacy-card-footer">
    <button>Action</button>
  </div>
</div>
```

## Examples

<div class="border rounded-lg overflow-hidden shadow-sm my-6 max-w-md">
  <div class="bg-gray-100 px-4 py-2 font-bold">Card Title</div>
  <div class="p-4">
    <p>This is an example of a legacy card component from site 2.</p>
  </div>
  <div class="bg-gray-100 px-4 py-2 text-right">
    <button class="bg-blue-500 text-white px-3 py-1 rounded text-sm">Action</button>
  </div>
</div>

## Properties

| Property | Type | Description |
|----------|------|-------------|
| elevation | number | Card elevation level (1-5) |
| bordered | boolean | Whether the card has a border |
| interactive | boolean | Whether the card has hover effects |
