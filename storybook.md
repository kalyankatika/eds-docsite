---
layout: base.njk
title: Storybook
---

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
  <header class="mb-8">
    <h1 class="text-3xl font-bold text-primary">Storybook</h1>
    <p class="mt-2 text-lg text-gray-600">Explore our components in an isolated development environment</p>
  </header>

  <div class="prose prose-primary max-w-none">
    <h2 class="text-2xl font-semibold text-gray-800 mb-4">What is Storybook?</h2>
    <p class="text-gray-600 mb-6">
      Storybook is a frontend workshop for building UI components and pages in isolation. It makes it easy to develop hard-to-reach states and edge cases, making our components more robust and well-tested.
    </p>

    <div class="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
      <iframe
        src="https://5ccbc373887ca40020446347-wtuhidckxo.chromatic.com/iframe.html"
        class="w-full h-[600px]"
        title="Storybook"
      ></iframe>
    </div>

    <h2 class="text-2xl font-semibold text-gray-800 mb-4">Getting Started with Storybook</h2>
    
    <div class="grid md:grid-cols-2 gap-6 mb-8">
      <div class="card">
        <h3 class="text-xl font-semibold text-primary mb-2">For Developers</h3>
        <ul class="space-y-2 text-gray-600">
          <li>• Clone the repository</li>
          <li>• Install dependencies</li>
          <li>• Run Storybook locally</li>
          <li>• Create and modify stories</li>
        </ul>
        <a href="/getting-started" class="btn btn-primary mt-4 inline-block">View Setup Guide</a>
      </div>

      <div class="card">
        <h3 class="text-xl font-semibold text-primary mb-2">For Designers</h3>
        <ul class="space-y-2 text-gray-600">
          <li>• Browse components</li>
          <li>• View different states</li>
          <li>• Test interactions</li>
          <li>• Provide feedback</li>
        </ul>
        <a href="/guidelines" class="btn btn-primary mt-4 inline-block">View Guidelines</a>
      </div>
    </div>

    <h2 class="text-2xl font-semibold text-gray-800 mb-4">Key Features</h2>
    
    <div class="grid md:grid-cols-3 gap-6 mb-8">
      <div class="card">
        <h3 class="text-xl font-semibold text-primary mb-2">Isolated Development</h3>
        <p class="text-gray-600">Develop UI components in isolation without worrying about app-specific dependencies.</p>
      </div>

      <div class="card">
        <h3 class="text-xl font-semibold text-primary mb-2">Interactive Testing</h3>
        <p class="text-gray-600">Test components interactively to ensure they work as expected in different states.</p>
      </div>

      <div class="card">
        <h3 class="text-xl font-semibold text-primary mb-2">Documentation</h3>
        <p class="text-gray-600">Auto-generate documentation with component props, examples, and usage guidelines.</p>
      </div>
    </div>

    <div class="bg-gray-100 rounded-lg p-6">
      <h2 class="text-2xl font-semibold text-gray-800 mb-4">Need Help?</h2>
      <p class="text-gray-600 mb-4">
        If you need assistance with Storybook or have questions about our component library, our support team is here to help.
      </p>
      <div class="flex gap-4">
        <a href="/support/fds" class="btn btn-primary">Contact Support</a>
        <a href="/documentation" class="btn bg-white hover:bg-gray-50 text-gray-700">View Documentation</a>
      </div>
    </div>
  </div>
</div>
