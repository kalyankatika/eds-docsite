---
layout: base.njk
title: Imported Document
---


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
