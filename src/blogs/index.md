---
layout: base.njk
pageTitle: Blog Page
eleventyExcludeFromCollections: true
---


{% for blog in collections.blogs %}
  - [{{ blog.data.pageTitle }}]({{ blog.url | url }})
{% endfor %}