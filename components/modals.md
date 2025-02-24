---
layout: base.njk
title: Modals
eleventyNavigation:
  key: Modals
  parent: Components
storybook:
  url: https://5ccbc373887ca40020446347-wtuhidckxo.chromatic.com/iframe.html?id=modal--default&viewMode=story
---

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
  <h1 class="text-3xl font-bold text-primary mb-8">Modals</h1>
  
  <!-- Storybook Example -->
  <section class="mb-12">
    <h2 class="text-2xl font-semibold text-primary mb-4">Interactive Example</h2>
    <div class="w-full bg-white rounded-fds shadow-sm p-4">
      <iframe
        src="{{ storybook.url }}&shortcuts=false&singleStory=true"
        width="100%"
        height="400"
        class="border-0 rounded-fds"
        title="Modal Component Example"
      ></iframe>
    </div>
  </section>
  
  <div class="space-y-12">
    <!-- Basic Modal -->
    <section>
      <h2 class="text-2xl font-semibold text-primary mb-4">Basic Modal</h2>
      <div class="relative">
        <div class="fixed inset-0 bg-black bg-opacity-50"></div>
        <div class="relative bg-white rounded-fds max-w-lg mx-auto mt-8 p-6">
          <div class="mb-4">
            <h3 class="text-lg font-semibold text-primary">Modal Title</h3>
            <button class="absolute top-4 right-4 text-neutral-dark hover:text-primary">
              <span class="sr-only">Close</span>
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div class="mb-6">
            <p class="text-neutral-dark">
              This is the modal content. You can put any content here including forms, images, or other components.
            </p>
          </div>
          
          <div class="flex justify-end space-x-4">
            <button class="px-4 py-2 border border-neutral-dark text-neutral-dark rounded-fds hover:bg-neutral-dark/5">
              Cancel
            </button>
            <button class="px-4 py-2 bg-primary text-white rounded-fds hover:bg-primary-dark">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>
