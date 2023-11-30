<script setup lang="ts">
const author = "example corp.";
const href = "http://example.com";
</script>

<template>
  <div class="absolute bottom-0 left-0 right-0 pl-2 z-10 text-white">
    <slot name="left">
      [ロゴ] 2023 author:
      <a :href="href">
        {{ author }}
      </a>
    </slot>
    <slot name="right"></slot>
  </div>
</template>
