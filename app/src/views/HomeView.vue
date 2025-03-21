<template>
  <div>
    <BoroughData :doeInfo="doeInfo" />
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import BoroughData from '@/components/BoroughData.vue'
let doeInfo = ref([])
async function getDoeInfo() {
  try {
    let res = await fetch('https://data.cityofnewyork.us/resource/uq7m-95z8.json?$limit=40')
    let data = await res.json()
    doeInfo.value = data
  } catch (error) {
    alert('failure to catch the doe data')
  }
}
onMounted(() => {
  getDoeInfo()
})

</script>

<style scoped></style>
