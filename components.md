---
layout: "base.njk"
title: "Components"
eleventyNavigation:
  key: Components
  order: 2
---

# Components

## Form Elements

Our collection of form components designed for seamless user interaction.

### Buttons

Buttons are used to trigger actions or events. They come in different variants and sizes to suit your needs.

<div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
  <div class="bg-white p-6 rounded-fds shadow-sm">
    <h4 class="font-semibold mb-4">Primary Button</h4>
    <button class="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-fds">Click me</button>
    <div class="mt-4">
      <a href="/components/buttons" class="text-primary hover:underline">View Documentation →</a>
    </div>
  </div>
  <div class="bg-white p-6 rounded-fds shadow-sm">
    <h4 class="font-semibold mb-4">Secondary Button</h4>
    <button class="border border-primary text-primary hover:bg-primary hover:text-white px-4 py-2 rounded-fds">Click me</button>
    <div class="mt-4">
      <a href="/components/buttons#secondary" class="text-primary hover:underline">View Documentation →</a>
    </div>
  </div>
</div>

### Input Fields

Text inputs, textareas, and other form fields for collecting user data.

<div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
  <div class="bg-white p-6 rounded-fds shadow-sm">
    <h4 class="font-semibold mb-4">Text Input</h4>
    <input type="text" placeholder="Enter text..." class="w-full px-4 py-2 border border-neutral-dark/20 rounded-fds focus:border-primary focus:ring-1 focus:ring-primary">
    <div class="mt-4">
      <a href="/components/inputs" class="text-primary hover:underline">View Documentation →</a>
    </div>
  </div>
  <div class="bg-white p-6 rounded-fds shadow-sm">
    <h4 class="font-semibold mb-4">Textarea</h4>
    <textarea placeholder="Enter long text..." class="w-full px-4 py-2 border border-neutral-dark/20 rounded-fds focus:border-primary focus:ring-1 focus:ring-primary"></textarea>
    <div class="mt-4">
      <a href="/components/inputs#textarea" class="text-primary hover:underline">View Documentation →</a>
    </div>
  </div>
</div>

## Navigation

Components for helping users move through your application.

### Breadcrumbs

Help users understand their current location in a hierarchy.

<div class="bg-white p-6 rounded-fds shadow-sm my-8">
  <h4 class="font-semibold mb-4">Basic Breadcrumb</h4>
  <nav class="flex space-x-2">
    <a href="#" class="text-primary hover:underline">Home</a>
    <span class="text-neutral-dark">/</span>
    <a href="#" class="text-primary hover:underline">Components</a>
    <span class="text-neutral-dark">/</span>
    <span class="text-neutral-dark">Current Page</span>
  </nav>
  <div class="mt-4">
    <a href="/components/navigation#breadcrumbs" class="text-primary hover:underline">View Documentation →</a>
  </div>
</div>

## Data Display

Components for displaying data and content effectively.

### Cards

Containers for organizing related content and actions.

<div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
  <div class="bg-white p-6 rounded-fds shadow-sm">
    <h4 class="font-semibold mb-2">Basic Card</h4>
    <p class="text-neutral-dark mb-4">A simple card with title and content.</p>
    <a href="/components/cards" class="text-primary hover:underline">View Documentation →</a>
  </div>
  <div class="bg-white p-6 rounded-fds shadow-sm">
    <h4 class="font-semibold mb-2">Interactive Card</h4>
    <p class="text-neutral-dark mb-4">A card with hover and click states.</p>
    <a href="/components/cards#interactive" class="text-primary hover:underline">View Documentation →</a>
  </div>
</div>

## Legacy Components

Components imported from legacy design systems.

<div class="grid grid-cols-1 md:grid-cols-3 gap-8 my-8">
  <div class="bg-white p-6 rounded-fds shadow-sm hover:shadow-md transition-shadow">
    <h4 class="font-semibold mb-2">Legacy Button</h4>
    <p class="text-neutral-dark mb-4">Button component from legacy site 1.</p>
    <div class="mt-auto">
      <a href="/legacy-imports/site1/button/" class="text-primary hover:underline">View Documentation →</a>
    </div>
  </div>
  <div class="bg-white p-6 rounded-fds shadow-sm hover:shadow-md transition-shadow">
    <h4 class="font-semibold mb-2">Legacy Card</h4>
    <p class="text-neutral-dark mb-4">Card component from legacy site 2.</p>
    <div class="mt-auto">
      <a href="/legacy-imports/site2/card/" class="text-primary hover:underline">View Documentation →</a>
    </div>
  </div>
  <div class="bg-white p-6 rounded-fds shadow-sm hover:shadow-md transition-shadow">
    <h4 class="font-semibold mb-2">Legacy Alert</h4>
    <p class="text-neutral-dark mb-4">Alert component from legacy site 3.</p>
    <div class="mt-auto">
      <a href="/legacy-imports/site3/alert/" class="text-primary hover:underline">View Documentation →</a>
    </div>
  </div>
</div>