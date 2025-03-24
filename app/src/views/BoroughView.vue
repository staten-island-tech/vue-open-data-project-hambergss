<template>
  <main>
    <MainHeader />
    <ButtonsHeader>
      <RouterLink
        to="/"
        class="m-2 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded border-2 border-black"
      >
        <button>Home</button>
      </RouterLink>
      <RouterLink
        to="/graduation"
        class="m-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded border-2 border-black"
      >
        <button>Graduation</button>
      </RouterLink>
    </ButtonsHeader>
    <div class="bg-gray-600 flex flex-wrap justify-center h-[70vh]">
      <BoroughChart :schools="schools" />
    </div>
  </main>
</template>

<script setup>
import MainHeader from '@/components/MainHeader.vue'
import ButtonsHeader from '@/components/ButtonsHeader.vue'
import BoroughChart from '@/components/BoroughChart.vue'
import { onMounted, ref } from 'vue'
let schools = ref([])

async function getSchools() {
  try {
    let res = await fetch('https://data.cityofnewyork.us/resource/uq7m-95z8.json?$limit=100')
    let data = await res.json()
    schools.value = data
  } catch (error) {
    alert('Failed to fetch schools data.')
  }
}
onMounted(() => {
  getSchools()
})
</script>

<style scoped></style>
