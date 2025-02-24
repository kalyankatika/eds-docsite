---
layout: base.njk
title: Buttons
eleventyNavigation:
  key: Buttons
  parent: Components
storybook:
  url: https://5ccbc373887ca40020446347-wtuhidckxo.chromatic.com/iframe.html?id=button--primary&viewMode=story
---

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
  <h1 class="text-3xl font-bold text-primary mb-8">Buttons</h1>
  
  <!-- Storybook Example -->
  <section class="mb-12">
    <h2 class="text-2xl font-semibold text-primary mb-4">Interactive Example</h2>
    <div class="w-full bg-white rounded-fds shadow-sm p-4">
       <iframe
  src="https://5ccbc373887ca40020446347-wtuhidckxo.chromatic.com/iframe.html?id=shadowboxcta--default&viewMode=story&shortcuts=false&singleStory=true"
  width="800"
  height="200"
></iframe>
    </div>
  </section>
  
  <div class="space-y-12">
    <!-- Primary Buttons -->
    <section>
      <h2 class="text-2xl font-semibold text-primary mb-4">Primary Buttons</h2>
      <div class="space-y-4">
        <button class="px-6 py-3 bg-primary text-white rounded-fds hover:bg-primary-dark">
          Primary Button
        </button>
        <button class="px-6 py-3 bg-primary text-white rounded-fds hover:bg-primary-dark" disabled>
          Disabled
        </button>
      </div>
    </section>

    <!-- Secondary Buttons -->
    <section>
      <h2 class="text-2xl font-semibold text-primary mb-4">Secondary Buttons</h2>
      <div class="space-y-4">
        <button class="px-6 py-3 border border-primary text-primary rounded-fds hover:bg-neutral-dark/5">
          Secondary Button
        </button>
        <button class="px-6 py-3 border border-neutral-dark text-neutral-dark rounded-fds hover:bg-neutral-dark/5" disabled>
          Disabled
        </button>
      </div>
    </section>

    <!-- Button Sizes -->
    <section>
      <h2 class="text-2xl font-semibold text-primary mb-4">Button Sizes</h2>
      <div class="space-y-4">
        <button class="px-4 py-2 bg-primary text-white text-sm rounded-fds hover:bg-primary-dark">
          Small
        </button>
        <button class="px-6 py-3 bg-primary text-white rounded-fds hover:bg-primary-dark">
          Medium
        </button>
        <button class="px-8 py-4 bg-primary text-white text-lg rounded-fds hover:bg-primary-dark">
          Large
        </button>
      </div>
    </section>
  </div>
</div>
