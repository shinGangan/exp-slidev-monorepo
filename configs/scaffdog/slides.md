---
name: "slides"
root: "."
output: "."
ignore: []
questions:
  pj: "Please enter Project name. >"
  layout:
    message: "Please select the using global components. >"
    multiple: true
    choices:
      - global-top
      - global-bottom
      - layouts/default
    initial: ["layouts/default"]
---

<!--
  @summary slidevで利用するslides.md
  @description slidevにおける起点ファイル.必要に応じて pages/*.md などを適宜追加すれば良い
  @param inputs.pj - プロジェクト名
 -->

# `{{ inputs.pj }}/slides.md`

```markdown
---
theme: default
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
drawings:
  persist: false
transition: slide-left
fonts:
  sans: "M PLUS 1p"
lineNumbers: false
title: Welcome to Slidev
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
mdc: true
---

# Welcome to Slidev

This file is created scaffdog.
```

<!--
  @summary 各プロジェクトのpackage.json
  @param inputs.pj - プロジェクト名. name = cloudflare project name である
 -->

# `{{ inputs.pj }}/package.json`

```json
{
  "name": "{{ inputs.pj }}",
  "type": "module",
  "private": true,
  "scripts": {
    "build": "slidev build",
    "dev": "slidev --open",
    "export": "slidev export",
    "deploy:pages": "wrangler pages deploy ./dist --project-name $npm_package_name"
  }
}
```

<!--
  @summary 各スライドの上部に固定するコンポーネント
 -->

# `{{ contains(inputs.layout, "global-top") || "!" }}{{ inputs.pj }}/global-top.vue`

```vue
<script setup lang="ts">
import GlobalHeader from "../common/components/global-top.vue";
</script>

<template>
  <GlobalHeader />
</template>
```

<!--
  @summary 各スライドの下部に固定するコンポーネント
  @description 会社ロゴ, コピーライト, 会社名などを明示する際に利用する
 -->

# `{{ contains(inputs.layout, "global-bottom") || "!" }}{{ inputs.pj }}/global-bottom.vue`

```vue
<script setup lang="ts">
import GlobalFooter from "../common/components/global-bottom.vue";
</script>

<template>
  <GlobalFooter />
</template>
```

<!--
  @summary default.vueをオーバーライドしたコンポーネント
 -->

# `{{ contains(inputs.layout, "layouts/default") || "!" }}{{ inputs.pj }}/layouts/default.vue`

```vue
<script setup lang="ts">
import CustomLayout from "../../common/layouts/default.vue";
</script>

<template>
  <CustomLayout>
    <slot />
  </CustomLayout>
</template>
```
