<template>
  <div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const doeInfo = ref([])
async function getDoeInfo() {
  const res = await fetch('https://data.cityofnewyork.us/resource/uq7m-95z8.json')
  const data = await res.json()
  doeInfo.value = data.results
}
onMounted(() => {
  getDoeInfo()
})
</script>

<style scoped></style>
