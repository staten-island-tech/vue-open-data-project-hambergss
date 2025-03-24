<template>
  <div>
    <main>
      <MainHeader />
      <ButtonsHeader>
        <RouterLink
          to="/borough"
          class="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded border-2 border-black"
        >
          <button>Borough</button>
        </RouterLink>
        <RouterLink
          to="/graduation"
          class="m-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded border-2 border-black"
        >
          <button>Graduation</button>
        </RouterLink>
        <div class="flex flex-col items-center my-4">
          <label for="search" class="mb-2 text-black">Search by School Name</label>
          <input type="text" id="search" v-model="search" class="border-2 border-black p-2 w-1/2" />
        </div>
      </ButtonsHeader>
      <div class="bg-gray-600 flex flex-wrap justify-center h-[70vh] overflow-y-auto">
        <SchoolCard v-for="school in searchSchools" :key="school.location" :school="school" />
      </div>
    </main>
  </div>
</template>

<script setup>
import MainHeader from '@/components/MainHeader.vue'
import ButtonsHeader from '@/components/ButtonsHeader.vue'
import { ref, onMounted, computed } from 'vue'

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
const search = ref('')
const searchSchools = computed(() =>
  schools.value.filter((school) =>
    school.location?.toLowerCase().includes(search.value.toLowerCase()),
  ),
)
</script>

<style scoped></style>
