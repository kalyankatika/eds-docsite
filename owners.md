---
layout: base.njk
title: Components by Owner
---

# Components by Owner

{% for owner in metadata.owners %}
<section class="owner-section">
    <h2>{{ owner.name }}</h2>
    <p>{{ owner.description }}</p>
    
    <div class="component-grid">
        {% for component in collections.all %}
            {% if component.data.owner == owner.name %}
            <div class="component-card">
                <h3><a href="{{ component.url }}">{{ component.data.title }}</a></h3>
                <p>{{ component.data.description }}</p>
                <div class="component-meta">
                    <span class="meta">Channel: {{ component.data.channel }}</span>
                    <span class="meta">Type: {{ component.data.type }}</span>
                </div>
            </div>
            {% endif %}
        {% endfor %}
    </div>
</section>
{% endfor %}
