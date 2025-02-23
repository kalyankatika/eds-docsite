---
layout: base.njk
title: Components by Type
---

# Components by Type

{% for type in metadata.widgetTypes %}
<section class="type-section">
    <h2>{{ type.name }}</h2>
    <p>{{ type.description }}</p>
    
    <div class="component-grid">
        {% for component in collections.all %}
            {% if component.data.type == type.name %}
            <div class="component-card">
                <h3><a href="{{ component.url }}">{{ component.data.title }}</a></h3>
                <p>{{ component.data.description }}</p>
                <div class="component-meta">
                    <span class="meta">Channel: {{ component.data.channel }}</span>
                    <span class="meta">Owner: {{ component.data.owner }}</span>
                </div>
            </div>
            {% endif %}
        {% endfor %}
    </div>
</section>
{% endfor %}
