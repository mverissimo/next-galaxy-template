---
title: Callout
description: Provide contextual feedback messages.
---

## Usage

{% markdoc %}

```markdoc
{% callout appearance="danger" %}
content
{% /callout %}
```

{% /markdoc %}

## Examples

Semantically designed

{% callout appearance="caution" %}
I have a message for you
{% /callout %}

{% callout appearance="danger" %}
I have a message for you
{% /callout %}

{% callout appearance="info" %}
I have a message for you
{% /callout %}

{% callout appearance="tip" %}
I have a message for you
{% /callout %}

{% callout appearance="note" %}
I have a message for you
{% /callout %}

## Specifying title

You may also specify an optional title.

{% markdoc %}

```markdoc
{% callout title="Custom title" %}
content
{% /callout %}
```

{% /markdoc %}

{% callout title="Custom title" %}
I have a message for you
{% /callout %}
