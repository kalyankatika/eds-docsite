
---
layout: base.njk
title: Legacy Dialog from Site 3
eleventyNavigation:
  key: Legacy Dialog
  parent: Legacy Components
  order: 135
---

# Legacy Dialog Component

This is a dialog component from the third legacy site.

## Example Code

```html
<div class="legacy-dialog">
  <div class="legacy-dialog-header">
    <h3>Confirmation</h3>
    <button class="legacy-dialog-close">×</button>
  </div>
  <div class="legacy-dialog-body">
    <p>Are you sure you want to continue?</p>
  </div>
  <div class="legacy-dialog-footer">
    <button class="legacy-dialog-cancel">Cancel</button>
    <button class="legacy-dialog-confirm">Confirm</button>
  </div>
</div>
```

## Rendered Example

<div class="bg-white border border-gray-300 rounded-md shadow-lg my-4 max-w-md mx-auto">
  <div class="flex justify-between items-center p-4 border-b border-gray-200">
    <h3 class="font-bold">Confirmation</h3>
    <button class="text-gray-500 hover:text-gray-700 text-xl font-semibold">×</button>
  </div>
  <div class="p-4 border-b border-gray-200">
    <p>Are you sure you want to continue?</p>
  </div>
  <div class="p-4 flex justify-end space-x-2">
    <button class="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md">Cancel</button>
    <button class="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">Confirm</button>
  </div>
</div>

## Attributes

| Attribute | Type | Default | Description |
| --- | --- | --- | --- |
| title | string | 'Dialog' | Title displayed in the dialog header |
| closable | boolean | true | Whether the dialog can be closed with the × button |
| showFooter | boolean | true | Whether to show the footer with action buttons |
