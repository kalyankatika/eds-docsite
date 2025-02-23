---
layout: base.njk
title: Home
eleventyNavigation:
  key: Home
  order: 0
---

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
  <!-- Hero Section -->
  <div class="mb-16">
    <h1 class="text-4xl font-bold text-primary mb-4">{{ metadata.title }}</h1>
    <p class="text-xl text-neutral-dark mb-8">{{ metadata.description }}</p>

    <div class="flex gap-4">
      <a href="/getting-started" class="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-fds transition-colors">
        Get Started
      </a>
      <a href="/components" class="inline-flex items-center px-6 py-3 border border-primary text-primary hover:bg-neutral-dark/5 rounded-fds transition-colors">
        Browse Components
      </a>
    </div>
  </div>

  <!-- Latest Updates -->
  ---
  layout: base.njk
  title: Buttons
  eleventyNavigation:
    key: Buttons
    parent: Components
  ---
  
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-3xl font-bold text-primary mb-8">Buttons</h1>
    
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
  </div>---
  layout: base.njk
  title: Form Elements
  eleventyNavigation:
    key: Forms
    parent: Components
  ---
  
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-3xl font-bold text-primary mb-8">Form Elements</h1>
    
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
  </div>---
  layout: base.njk
  title: Cards
  eleventyNavigation:
    key: Cards
    parent: Components
  ---
  
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-3xl font-bold text-primary mb-8">Cards</h1>
    
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
  </div>---
  layout: base.njk
  title: Navigation
  eleventyNavigation:
    key: Navigation
    parent: Components
  ---
  
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-3xl font-bold text-primary mb-8">Navigation</h1>
    
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
  </div>---
  layout: base.njk
  title: Alerts
  eleventyNavigation:
    key: Alerts
    parent: Components
  ---
  
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-3xl font-bold text-primary mb-8">Alerts</h1>
    
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
  </div>---
  layout: base.njk
  title: Modals
  eleventyNavigation:
    key: Modals
    parent: Components
  ---
  
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-3xl font-bold text-primary mb-8">Modals</h1>
    
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
  <div class="mb-16">
    <h2 class="text-2xl font-bold text-primary mb-6">Latest Updates</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      {% for update in metadata.latestUpdates %}
        <div class="bg-white p-6 rounded-fds">
          <h3 class="text-lg font-semibold text-primary mb-2">{{ update.title }}</h3>
          <p class="text-neutral-dark mb-4">{{ update.description }}</p>
          <div class="flex justify-between items-center text-sm">
            <span class="text-neutral-dark">{{ update.author }}</span>
            <span class="text-neutral-dark">{{ update.date }}</span>
          </div>
        </div>
      {% endfor %}
    </div>
  </div>

  <!-- Components Section -->
  <div class="mb-16">
    <h2 class="text-2xl font-bold text-primary mb-6">Essential Components</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <a href="/components/buttons" class="block p-6 bg-white rounded-fds hover:bg-neutral-dark/5">
        <h3 class="text-lg font-semibold text-primary mb-2">Buttons</h3>
        <p class="text-neutral-dark">Standard button components with various styles and states</p>
      </a>
      
      <a href="/components/forms" class="block p-6 bg-white rounded-fds hover:bg-neutral-dark/5">
        <h3 class="text-lg font-semibold text-primary mb-2">Form Elements</h3>
        <p class="text-neutral-dark">Input fields, checkboxes, radio buttons, and form layouts</p>
      </a>
      
      <a href="/components/cards" class="block p-6 bg-white rounded-fds hover:bg-neutral-dark/5">
        <h3 class="text-lg font-semibold text-primary mb-2">Cards</h3>
        <p class="text-neutral-dark">Versatile card components for displaying content</p>
      </a>
      
      <a href="/components/navigation" class="block p-6 bg-white rounded-fds hover:bg-neutral-dark/5">
        <h3 class="text-lg font-semibold text-primary mb-2">Navigation</h3>
        <p class="text-neutral-dark">Navigation bars, menus, and breadcrumbs</p>
      </a>
      
      <a href="/components/alerts" class="block p-6 bg-white rounded-fds hover:bg-neutral-dark/5">
        <h3 class="text-lg font-semibold text-primary mb-2">Alerts</h3>
        <p class="text-neutral-dark">Alert and notification components for user feedback</p>
      </a>
      
      <a href="/components/modals" class="block p-6 bg-white rounded-fds hover:bg-neutral-dark/5">
        <h3 class="text-lg font-semibold text-primary mb-2">Modals</h3>
        <p class="text-neutral-dark">Dialog and modal components for focused interactions</p>
      </a>
    </div>
  </div>

  <!-- Categories Grid -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
  <!-- By Owner -->
  <div class="mb-16">
    <h2 class="text-2xl font-bold text-primary mb-6">By Owner</h2>
    <ul class="space-y-4">
      {% for owner in metadata.owners %}
      <li>
        <a href="{{ owner.url }}" class="flex items-center justify-between p-4 bg-white rounded-fds hover:bg-neutral-dark/5 transition-colors">
          <div>
            <span class="text-neutral-dark block">{{ owner.name }}</span>
            <span class="text-neutral-dark/60 text-sm">{{ owner.description }}</span>
          </div>
          <span class="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">{{ owner.count }}</span>
        </a>
      </li>
      {% endfor %}
    </ul>
  </div>


  <!-- By Channel -->
  <div class="mb-16">
    <h2 class="text-2xl font-bold text-primary mb-6">By Channel</h2>
    <ul class="space-y-4">
      {% for channel in metadata.channels %}
      <li>
        <a href="{{ channel.url }}" class="flex items-center justify-between p-4 bg-white rounded-fds hover:bg-neutral-dark/5 transition-colors">
          <span class="text-neutral-dark">{{ channel.name }}</span>
          <span class="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">{{ channel.count }}</span>
        </a>
      </li>
      {% endfor %}
    </ul>
  </div>

  <!-- By Type -->
  <div class="mb-16">
    <h2 class="text-2xl font-bold text-primary mb-6">By Type</h2>
    <ul class="space-y-4">
      {% for type in metadata.types %}
      <li>
        <a href="{{ type.url }}" class="flex items-center justify-between p-4 bg-white rounded-fds hover:bg-neutral-dark/5 transition-colors">
          <span class="text-neutral-dark">{{ type.name }}</span>
          <span class="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">{{ type.count }}</span>
        </a>
      </li>
      {% endfor %}
    </ul>
  </div>
  </div>

    <!-- Quick Links -->
  <div class="mb-16">
    <h2 class="text-2xl font-bold text-primary mb-6">Quick Links</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {% for section in metadata.sections %}
        <div class="bg-white p-6 rounded-fds">
          <h3 class="text-lg font-semibold text-primary mb-4">{{ section.title }}</h3>
          <ul class="space-y-2">
            {% for item in section.items %}
              <li>
                <a href="{{ item.url }}" class="text-neutral-dark hover:text-primary transition-colors">{{ item.name }}</a>
              </li>
            {% endfor %}
          </ul>
        </div>
      {% endfor %}
    </div>
  </div>
</div>
