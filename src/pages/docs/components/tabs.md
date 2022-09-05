---
title: Tabs
description: Easily create accessible, fully customizable tab interfaces, with robust focus management and keyboard navigation support.
---

## Markup

{% markdoc %}

```markdoc
{% tab-group %}

{% tab-list %}
  {% tab label="npm" /%}
  {% tab label="yarn" /%}
{% /tab-list %}

{% tabs-panels %}
  {% tab-panel %}
    npm install react
  {% /tab-panel %}

  {% tab-panel %}
    yarn add react
  {% /tab-panel %}
{% /tabs-panels %}

{% /tab-group %}
```

{% /markdoc %}

## Examples

{% tab-group %}

{% tab-list %}
{% tab label="npm" /%}
{% tab label="yarn" /%}
{% /tab-list %}

{% tabs-panels %}
{% tab-panel %}
npm install react
{% /tab-panel %}

{% tab-panel %}
yarn add react
{% /tab-panel %}
{% /tabs-panels %}

{% /tab-group %}

## Fences

{% tab-group %}

{% tab-list %}
{% tab label="index.tsx" /%}
{% tab label="/components/Button/Button.tsx" /%}
{% /tab-list %}

{% tabs-panels %}
{% tab-panel %}

```tsx
import { Button } from '@/components/Button';

function App() {
  return <Button>send mail</Button>;
}
```

{% /tab-panel %}

{% tab-panel %}

```tsx
function Button(props) {
  let { children } = props;

  return <button>{children}</button>;
}
```

{% /tab-panel %}
{% /tabs-panels %}

{% /tab-group %}
