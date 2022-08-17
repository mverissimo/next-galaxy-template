---
title: Getting Started
description: Build acessible and beautiful interfaces.
source: true #show source code button
---

## Installation

To use Galaxy UI in your project, run one of the following commands in your terminal:

```js
import { ThemeProvider } from '@galaxy-ui/react';
```

{% tabs defaultValue="tab1" %}

{% list %}

{% trigger children="one" value="tab1" /%}

{% trigger children="two" value="tab2" /%}

{% /list %}

{% content value="tab1" %}

```js
const haha = '';
```

{% /content %}

{% content value="tab2" %}
hehehe
{% /content %}

{% /tabs %}
