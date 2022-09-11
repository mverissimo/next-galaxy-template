---
title: Tabs
description: Easily create tabs.
---

## Usage

This component was extended from [headlessui](https://headlessui.com/react/tabs), built on top of markdoc.

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

Default

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

With code

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
