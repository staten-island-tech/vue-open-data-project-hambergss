<template>
  <div>

  </div>
</template>

<script setup>

import { useRoute } from 'vue-router'

const route = useRoute()
const doeInfo = ref('')
async function getDoeInfo() {
  const res = await fetch(`https://data.cityofnewyork.us/resource/uq7m-95z8.json`)
  const data = await res.json()
  doeInfo.value = data
}
onMounted(() => {
  getDoeInfo()
})
</script>

<style scoped></style>
