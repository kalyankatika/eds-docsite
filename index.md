
---
layout: base.njk
title: Home - Enterprise Design System
eleventyNavigation:
  key: Home
  order: 0
---

<div class="py-12 bg-white">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center">
      <h1 class="text-4xl font-extrabold text-primary tracking-tight sm:text-5xl">
        Enterprise Design System
      </h1>
      <p class="mt-3 max-w-2xl mx-auto text-xl text-neutral-dark sm:mt-4">
        A comprehensive design system for building consistent Enterprise digital experiences
      </p>
      <div class="mt-8 flex justify-center space-x-4">
        <a href="/getting-started" class="btn-primary">Get Started</a>
        <a href="/components" class="btn-secondary">Browse Components</a>
      </div>
    </div>
  </div>
</div>

<div class="py-12 bg-gray-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="lg:text-center">
      <h2 class="text-3xl font-bold text-primary">Latest Updates</h2>
      <div class="mt-8 grid gap-6 lg:grid-cols-3">
        {% for update in metadata.latestUpdates %}
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="px-4 py-5 sm:p-6">
            <h3 class="text-lg font-medium text-primary">{{ update.title }}</h3>
            <p class="mt-2 text-neutral-dark">{{ update.description }}</p>
            <div class="mt-3 text-sm text-gray-500">
              {{ update.author }}, {{ update.date }}
            </div>
          </div>
        </div>
        {% endfor %}
      </div>
    </div>
  </div>
</div>

<div class="py-12 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div>
        <h2 class="text-2xl font-bold text-primary mb-4">By Owner</h2>
        <ul class="space-y-2">
        {% for owner in metadata.owners %}
          <li><a href="{{ owner.url }}" class="text-neutral-dark hover:text-primary">{{ owner.name }}</a> <span class="text-sm text-gray-500">({{ owner.count }})</span></li>
        {% endfor %}
        </ul>
      </div>
      
      <div>
        <h2 class="text-2xl font-bold text-primary mb-4">By Channel</h2>
        <ul class="space-y-2">
        {% for channel in metadata.channels %}
          <li><a href="{{ channel.url }}" class="text-neutral-dark hover:text-primary">{{ channel.name }}</a> <span class="text-sm text-gray-500">({{ channel.count }})</span></li>
        {% endfor %}
        </ul>
      </div>
      
      <div>
        <h2 class="text-2xl font-bold text-primary mb-4">By Type</h2>
        <ul class="space-y-2">
        {% for type in metadata.types %}
          <li><a href="{{ type.url }}" class="text-neutral-dark hover:text-primary">{{ type.name }}</a> <span class="text-sm text-gray-500">({{ type.count }})</span></li>
        {% endfor %}
        </ul>
      </div>
      
      <div>
        <h2 class="text-2xl font-bold text-primary mb-4">Legacy Components</h2>
        <ul class="space-y-2">
          <li><a href="/legacy-imports/site1/button/" class="text-neutral-dark hover:text-primary">Legacy Button</a></li>
          <li><a href="/legacy-imports/site2/card/" class="text-neutral-dark hover:text-primary">Legacy Card</a></li>
          <li><a href="/legacy-imports/site3/alert/" class="text-neutral-dark hover:text-primary">Legacy Alert</a></li>
          <li><a href="/legacy-imports/site1/input/" class="text-neutral-dark hover:text-primary">Legacy Input</a></li>
          <li><a href="/legacy-imports/site3/dialog/" class="text-neutral-dark hover:text-primary">Legacy Dialog</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>

<div class="py-12 bg-gray-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div>
        <h3 class="text-xl font-bold text-primary mb-4">Getting Started</h3>
        <ul class="space-y-2">
        {% for item in metadata.sections[0].items %}
          <li><a href="{{ item.url }}" class="text-neutral-dark hover:text-primary">{{ item.name }}</a></li>
        {% endfor %}
        </ul>
      </div>
      
      <div>
        <h3 class="text-xl font-bold text-primary mb-4">Foundation</h3>
        <ul class="space-y-2">
        {% for item in metadata.sections[1].items %}
          <li><a href="{{ item.url }}" class="text-neutral-dark hover:text-primary">{{ item.name }}</a></li>
        {% endfor %}
        </ul>
      </div>
      
      <div>
        <h3 class="text-xl font-bold text-primary mb-4">Components</h3>
        <ul class="space-y-2">
        {% for item in metadata.sections[2].items %}
          <li><a href="{{ item.url }}" class="text-neutral-dark hover:text-primary">{{ item.name }}</a></li>
        {% endfor %}
        </ul>
      </div>
      
      <div>
        <h3 class="text-xl font-bold text-primary mb-4">Resources</h3>
        <ul class="space-y-2">
        {% for item in metadata.sections[3].items %}
          <li><a href="{{ item.url }}" class="text-neutral-dark hover:text-primary">{{ item.name }}</a></li>
        {% endfor %}
        </ul>
      </div>
    </div>
  </div>
</div>
