---
layout: base.njk
title: Alerts
eleventyNavigation:
  key: Alerts
  parent: Components
storybook:
  url: https://5ccbc373887ca40020446347-wtuhidckxo.chromatic.com/iframe.html?id=alert--success&viewMode=story
---

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
  <h1 class="text-3xl font-bold text-primary mb-8">Alerts</h1>
  
  <!-- Storybook Example -->
  <section class="mb-12">
    <h2 class="text-2xl font-semibold text-primary mb-4">Interactive Example</h2>
    <div class="w-full bg-white rounded-fds shadow-sm p-4">
      <iframe
        src="{{ storybook.url }}&shortcuts=false&singleStory=true"
        width="100%"
        height="200"
        class="border-0 rounded-fds"
        title="Alert Component Example"
      ></iframe>
    </div>
  </section>
  
  <div class="space-y-12">
    <!-- Basic Alerts -->
    <section>
      <h2 class="text-2xl font-semibold text-primary mb-4">Basic Alerts</h2>
      <div class="space-y-4">
        <div class="bg-green-50 border-l-4 border-green-400 p-4 rounded-fds">
          <div class="flex">
            <div class="ml-3">
              <p class="text-sm text-green-700">
                Success alert message goes here
              </p>
            </div>
          </div>
        </div>

        <div class="bg-red-50 border-l-4 border-red-400 p-4 rounded-fds">
          <div class="flex">
            <div class="ml-3">
              <p class="text-sm text-red-700">
                Error alert message goes here
              </p>
            </div>
          </div>
        </div>

        <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-fds">
          <div class="flex">
            <div class="ml-3">
              <p class="text-sm text-yellow-700">
                Warning alert message goes here
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Dismissible Alerts -->
    <section>
      <h2 class="text-2xl font-semibold text-primary mb-4">Dismissible Alerts</h2>
      <div class="space-y-4">
        <div class="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-fds">
          <div class="flex justify-between items-center">
            <div class="flex">
              <div class="ml-3">
                <p class="text-sm text-blue-700">
                  Information alert with dismiss button
                </p>
              </div>
            </div>
            <button class="text-blue-700 hover:text-blue-900">
              <span class="sr-only">Dismiss</span>
              <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>
