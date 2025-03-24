<template>
  <div class="text-[#2d3a5d] h-[15vh] flex items-center justify-center bg-[#fcb6a4]">
    <div class="flex gap-4">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped></style>
