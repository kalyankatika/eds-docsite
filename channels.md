---
layout: base.njk
title: Components by Channel
---

# Components by Channel

{% for channel in metadata.channels %}
<section class="channel-section">
    <h2>{{ channel.name }}</h2>
    <p>{{ channel.description }}</p>
    
    <div class="component-grid">
        {% for component in collections.all %}
            {% if component.data.channel == channel.name %}
            <div class="component-card">
                <h3><a href="{{ component.url }}">{{ component.data.title }}</a></h3>
                <p>{{ component.data.description }}</p>
                <div class="component-meta">
                    <span class="meta">Type: {{ component.data.type }}</span>
                    <span class="meta">Owner: {{ component.data.owner }}</span>
                </div>
            </div>
            {% endif %}
        {% endfor %}
    </div>
</section>
{% endfor %}
