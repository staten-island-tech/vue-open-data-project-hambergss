<template>
  <div
    class="border-2 border-[#97a5c8] shadow-lg w-[28vw] h-[38vh] flex flex-col items-center justify-center p-6 mt-5 ml-5 mr-5 bg-[#c3cbdf] rounded-lg"
  >
    <h1 class="text-3xl font-bold text-[#2d3a5d]">{{ school.school_name }}</h1>
    <h2 class="text-lg font-semibold text-[#2d3a5d] mt-2">
      Borough:
      <span class="text-[#a06ea0]">{{ school.borough }}</span>
    </h2>
    <h2 class="text-lg font-semibold text-[#2d3a5d]">
      Graduation Rate:
      <span class="text-[#b21f3d]">{{ Math.floor(school.graduation_rate * 100) }}%</span>
    </h2>
  </div>
</template>

<script setup>
defineProps(['school'])
</script>

<style scoped></style>
