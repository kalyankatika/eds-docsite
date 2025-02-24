---
layout: base.njk
title: Form Elements
eleventyNavigation:
  key: Forms
  parent: Components
storybook:
  url: https://5ccbc373887ca40020446347-wtuhidckxo.chromatic.com/iframe.html?id=form--text-input&viewMode=story
---

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
  <h1 class="text-3xl font-bold text-primary mb-8">Form Elements</h1>
  
  <!-- Storybook Example -->
  <section class="mb-12">
    <h2 class="text-2xl font-semibold text-primary mb-4">Interactive Example</h2>
    <div class="w-full bg-white rounded-fds shadow-sm p-4">
      <iframe
        src="{{ storybook.url }}&shortcuts=false&singleStory=true"
        width="100%"
        height="300"
        class="border-0 rounded-fds"
        title="Form Elements Example"
      ></iframe>
    </div>
  </section>
  
  <div class="space-y-12">
    <!-- Text Inputs -->
    <section>
      <h2 class="text-2xl font-semibold text-primary mb-4">Text Inputs</h2>
      <div class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-neutral-dark mb-2">Standard Input</label>
          <input type="text" class="w-full px-4 py-2 border border-neutral-dark/20 rounded-fds focus:border-primary focus:ring-1 focus:ring-primary" placeholder="Enter text...">
        </div>
        
        <div>
          <label class="block text-sm font-medium text-neutral-dark mb-2">Disabled Input</label>
          <input type="text" disabled class="w-full px-4 py-2 border border-neutral-dark/20 bg-neutral-dark/5 rounded-fds" placeholder="Disabled input">
        </div>
      </div>
    </section>

    <!-- Checkboxes -->
    <section>
      <h2 class="text-2xl font-semibold text-primary mb-4">Checkboxes</h2>
      <div class="space-y-4">
        <label class="flex items-center space-x-3">
          <input type="checkbox" class="h-5 w-5 text-primary border-neutral-dark/20 rounded focus:ring-primary">
          <span class="text-neutral-dark">Default checkbox</span>
        </label>
        
        <label class="flex items-center space-x-3">
          <input type="checkbox" checked class="h-5 w-5 text-primary border-neutral-dark/20 rounded focus:ring-primary">
          <span class="text-neutral-dark">Checked checkbox</span>
        </label>
      </div>
    </section>

    <!-- Radio Buttons -->
    <section>
      <h2 class="text-2xl font-semibold text-primary mb-4">Radio Buttons</h2>
      <div class="space-y-4">
        <label class="flex items-center space-x-3">
          <input type="radio" name="radio-group" class="h-5 w-5 text-primary border-neutral-dark/20 focus:ring-primary">
          <span class="text-neutral-dark">Option 1</span>
        </label>
        
        <label class="flex items-center space-x-3">
          <input type="radio" name="radio-group" checked class="h-5 w-5 text-primary border-neutral-dark/20 focus:ring-primary">
          <span class="text-neutral-dark">Option 2</span>
        </label>
      </div>
    </section>
  </div>
</div>
