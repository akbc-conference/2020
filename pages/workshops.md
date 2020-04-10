---
title: Workshops
layout: page-fullwidth
permalink: /workshops/
header:
  image_fullwidth: "generic-gradient.png"
---

<ul>
{% for workshop in site.data.workshops %}
    <li>
    <b>
        {{- workshop.name -}}
        {% if workshop.acronym %}
            ({{- workshop.acronym -}})
        {%- endif -%}
    </b>, <i>{{- workshop.duration -}}</i>
    {%- if workshop.url -%}
    , <a href="{{ workshop.url }}">Website</a>
    {%- endif -%}
    {%- if workshop.organizers -%}
    <br>
    <i>
        {{- workshop.organizers -}}
    </i>
    {%- endif -%}
    </li>
{% endfor %}
</ul>

If you have any questions, please get in touch with our workshop chairs.
