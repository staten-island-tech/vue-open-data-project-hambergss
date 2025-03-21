<template>
  <div>
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import Chart from 'chart.js/auto';

const chartCanvas = ref(null);
let chartInstance = null;


</script>

<style scoped></style>
