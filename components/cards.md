---
layout: base.njk
title: Cards
eleventyNavigation:
  key: Cards
  parent: Components
storybook:
  url: https://5ccbc373887ca40020446347-wtuhidckxo.chromatic.com/iframe.html?id=card--default&viewMode=story
---

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
  <h1 class="text-3xl font-bold text-primary mb-8">Cards</h1>
  
  <!-- Storybook Example -->
  <section class="mb-12">
    <h2 class="text-2xl font-semibold text-primary mb-4">Interactive Example</h2>
    <div class="w-full bg-white rounded-fds shadow-sm p-4">
      <iframe
        src="{{ storybook.url }}&shortcuts=false&singleStory=true"
        width="100%"
        height="400"
        class="border-0 rounded-fds"
        title="Card Component Example"
      ></iframe>
    </div>
  </section>
  
  <div class="space-y-12">
    <!-- Basic Cards -->
    <section>
      <h2 class="text-2xl font-semibold text-primary mb-4">Basic Cards</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-white p-6 rounded-fds shadow-sm">
          <h3 class="text-lg font-semibold text-primary mb-2">Basic Card</h3>
          <p class="text-neutral-dark">A simple card with basic styling and padding.</p>
        </div>
        
        <div class="bg-white p-6 rounded-fds shadow-sm border border-neutral-dark/10">
          <h3 class="text-lg font-semibold text-primary mb-2">Bordered Card</h3>
          <p class="text-neutral-dark">A card with an additional border for emphasis.</p>
        </div>
      </div>
    </section>

    <!-- Interactive Cards -->
    <section>
      <h2 class="text-2xl font-semibold text-primary mb-4">Interactive Cards</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <a href="#" class="block bg-white p-6 rounded-fds shadow-sm hover:shadow-md transition-shadow">
          <h3 class="text-lg font-semibold text-primary mb-2">Clickable Card</h3>
          <p class="text-neutral-dark">This entire card is clickable with hover effects.</p>
        </a>
        
        <div class="bg-white p-6 rounded-fds shadow-sm">
          <h3 class="text-lg font-semibold text-primary mb-2">Card with Button</h3>
          <p class="text-neutral-dark mb-4">A card with an interactive button.</p>
          <button class="px-4 py-2 bg-primary text-white rounded-fds hover:bg-primary-dark">
            Action
          </button>
        </div>
      </div>
    </section>
  </div>
</div>
