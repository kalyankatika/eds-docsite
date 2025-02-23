---
layout: "base.njk"
title: "Components"
eleventyNavigation:
  key: Components
  order: 4
---

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <header class="py-8">
    <h1 class="text-3xl font-bold text-primary">Components Library</h1>
    <p class="mt-2 text-lg text-gray-600">Browse our collection of reusable components</p>
  </header>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {% for component in collections.components %}
    <div class="card">
      <h2 class="text-xl font-semibold text-primary mb-2">{{ component.data.title }}</h2>
      <p class="text-gray-600 mb-4">{{ component.data.description }}</p>
      
      {% if component.data.storybook %}
      <div class="mb-4 h-48 bg-gray-100 rounded-lg overflow-hidden">
        <iframe
          src="{{ component.data.storybook }}"
          class="w-full h-full"
          title="{{ component.data.title }} preview"
        ></iframe>
      </div>
      {% endif %}
      
      <div class="flex flex-wrap gap-2">
        {% if component.data.channel %}
        <span class="meta-tag">{{ component.data.channel }}</span>
        {% endif %}
        
        {% if component.data.type %}
        <span class="meta-tag">{{ component.data.type }}</span>
        {% endif %}
        
        {% if component.data.owner %}
        <span class="meta-tag">{{ component.data.owner }}</span>
        {% endif %}
      </div>
      
      <div class="mt-4 flex gap-2">
        <a href="{{ component.url }}" class="btn btn-primary">View Details</a>
        {% if component.data.storybook %}
        <a href="{{ component.data.storybook }}" class="btn bg-gray-100 hover:bg-gray-200 text-gray-700" target="_blank">Open in Storybook</a>
        {% endif %}
      </div>
    </div>
    {% endfor %}
  </div>
</div>
