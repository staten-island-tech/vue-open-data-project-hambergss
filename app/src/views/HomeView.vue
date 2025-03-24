<template>
  <div>
    <main>
      <MainHeader />
      <ButtonsHeader>
        <RouterLink
          to="/borough"
          class="m-2 bg-[#a06ea0] hover:bg-[#703e70] text-white font-bold py-2 px-4 rounded inline-block"
        >
          <button>Borough</button>
        </RouterLink>
        <RouterLink
          to="/graduation"
          class="m-2 bg-[#b21f3d] hover:bg-[#7b182c] text-white font-bold py-2 px-4 rounded inline-block"
        >
          <button>Graduation</button>
        </RouterLink>
        <div class="flex flex-col items-center my-4">
          <label for="search" class="mb-2 text-[#2d3a5d]">Search by School Name</label>
          <input
            type="text"
            id="search"
            v-model="search"
            class="border-2 border-[#2d3a5d] p-2 w-1/2"
          />
        </div>
      </ButtonsHeader>
      <div class="bg-[#f9f5eb] flex flex-wrap justify-center gap-5 p-5 h-[70vh] overflow-y-auto">
        <DoeCards v-for="school in searchSchools" :key="school.location" :school="school" />
      </div>
    </main>
  </div>
</template>

<script setup>
import MainHeader from '@/components/MainHeader.vue'
import ButtonsHeader from '@/components/ButtonsHeader.vue'
import { ref, onMounted, computed } from 'vue'
import DoeCards from '@/components/DoeCards.vue'
let schools = ref([])

async function getSchools() {
  try {
    let res = await fetch('https://data.cityofnewyork.us/resource/uq7m-95z8.json?$limit=300')
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
