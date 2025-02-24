---
layout: base.njk
title: Navigation
eleventyNavigation:
  key: Navigation
  parent: Components
storybook:
  url: https://5ccbc373887ca40020446347-wtuhidckxo.chromatic.com/iframe.html?id=navigation--navbar&viewMode=story
---

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
  <h1 class="text-3xl font-bold text-primary mb-8">Navigation</h1>
  
  <!-- Storybook Example -->
  <section class="mb-12">
    <h2 class="text-2xl font-semibold text-primary mb-4">Interactive Example</h2>
    <div class="w-full bg-white rounded-fds shadow-sm p-4">
      <iframe
        src="{{ storybook.url }}&shortcuts=false&singleStory=true"
        width="100%"
        height="200"
        class="border-0 rounded-fds"
        title="Navigation Component Example"
      ></iframe>
    </div>
  </section>
  
  <div class="space-y-12">
    <!-- Navigation Bar -->
    <section>
      <h2 class="text-2xl font-semibold text-primary mb-4">Navigation Bar</h2>
      <nav class="bg-white shadow-sm rounded-fds">
        <div class="px-4 py-3">
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-4">
              <a href="#" class="text-primary font-semibold">Home</a>
              <a href="#" class="text-neutral-dark hover:text-primary">Products</a>
              <a href="#" class="text-neutral-dark hover:text-primary">About</a>
              <a href="#" class="text-neutral-dark hover:text-primary">Contact</a>
            </div>
          </div>
        </div>
      </nav>
    </section>

    <!-- Breadcrumbs -->
    <section>
      <h2 class="text-2xl font-semibold text-primary mb-4">Breadcrumbs</h2>
      <nav class="flex">
        <ol class="flex items-center space-x-2">
          <li>
            <a href="#" class="text-neutral-dark hover:text-primary">Home</a>
          </li>
          <li class="text-neutral-dark">/</li>
          <li>
            <a href="#" class="text-neutral-dark hover:text-primary">Category</a>
          </li>
          <li class="text-neutral-dark">/</li>
          <li>
            <span class="text-primary">Current Page</span>
          </li>
        </ol>
      </nav>
    </section>
  </div>
</div>
