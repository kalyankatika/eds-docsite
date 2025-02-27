---
layout: base.njk
title: Home - Enterprise Design System
eleventyNavigation:
  key: Home
  order: 0
---

# Enterprise Design System

A comprehensive design system for building consistent Enterprise digital experiences

[Get Started](/getting-started){.btn-primary} [Browse Components](/components){.btn-secondary}

## Latest Updates

{% for update in metadata.latestUpdates %}
- **{{ update.title }}**: {{ update.description }} ({{ update.author }}, {{ update.date }})
{% endfor %}

## By Owner

{% for owner in metadata.owners %}
- [{{ owner.name }}]({{ owner.url }}) - {{ owner.description }} ({{ owner.count }})
{% endfor %}

## By Channel

{% for channel in metadata.channels %}
- [{{ channel.name }}]({{ channel.url }}) ({{ channel.count }})
{% endfor %}

## By Type

{% for type in metadata.types %}
- [{{ type.name }}]({{ type.url }}) ({{ type.count }})
{% endfor %}

## Legacy Components

- [Legacy Button](/legacy-imports/site1/button/) - Button component from legacy site 1
- [Legacy Card](/legacy-imports/site2/card/) - Card component from legacy site 2
- [Legacy Alert](/legacy-imports/site3/alert/) - Alert component from legacy site 3

## Quick Links

### Getting Started
{% for item in metadata.sections[0].items %}
- [{{ item.name }}]({{ item.url }})
{% endfor %}

### Foundation
{% for item in metadata.sections[1].items %}
- [{{ item.name }}]({{ item.url }})
{% endfor %}

### Components
{% for item in metadata.sections[2].items %}
- [{{ item.name }}]({{ item.url }})
{% endfor %}

### Resources
{% for item in metadata.sections[3].items %}
- [{{ item.name }}]({{ item.url }})
{% endfor %}