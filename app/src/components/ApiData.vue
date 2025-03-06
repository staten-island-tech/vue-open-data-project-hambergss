<template>
  <div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const pokemon = ref('')
async function getPokemon() {
  const res = await fetch(`https://data.cityofnewyork.us/resource/uq7m-95z8.json`)
  const data = await res.json()
  doeInfo.value = data
}
onMounted(() => {
  getDoeInfo()
})
</script>

<style scoped></style>
