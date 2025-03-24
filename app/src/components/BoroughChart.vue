<template>
  <div>
    <canvas id="myChart" style="position: relative; height: 70vh; width: 35vw"></canvas>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import Chart from 'chart.js/auto'

const { schools } = defineProps(['schools'])

let manhattan = ref(0),
  bronx = ref(0),
  brooklyn = ref(0),
  queens = ref(0),
  statenIsland = ref(0),
  unknown = ref(0)

onMounted(() => {
  manhattan.value = 0
  bronx.value = 0
  brooklyn.value = 0
  queens.value = 0
  statenIsland.value = 0
  unknown.value = 0

  watch(
    () => schools,
    () => {
      if (schools.length === 0) return
      for (let i = 0; i < schools.length; i++) {
        const borough = schools[i].borough?.toLowerCase() || 'unknown'
        if (borough.includes('manhattan')) manhattan.value++
        else if (borough.includes('bronx')) bronx.value++
        else if (borough.includes('brooklyn')) brooklyn.value++
        else if (borough.includes('queens')) queens.value++
        else if (borough.includes('staten')) statenIsland.value++
        else unknown.value++
      }

      const myChart = document.getElementById('myChart')

      new Chart(myChart, {
        type: 'pie',
        data: {
          labels: ['Manhattan', 'Bronx', 'Brooklyn', 'Queens', 'Staten Island', 'Unknown'],
          datasets: [
            {
              label: 'Number of Schools per Borough',
              data: [
                manhattan.value,
                bronx.value,
                brooklyn.value,
                queens.value,
                statenIsland.value,
                unknown.value,
              ],
              backgroundColor: [
                'rgb(255, 0, 0)',
                'rgb(255, 165, 0)',
                'rgb(255, 255, 0)',
                'rgb(0, 128, 0)',
                'rgb(0, 0, 255)',
                'rgb(128, 0, 128)',
              ],
              hoverOffset: 4,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              labels: {
                color: 'rgb(255, 255, 255)',
                font: {
                  size: 14,
                },
              },
            },
          },
          aspectRatio: 1,
        },
      })
    },
    { immediate: true },
  )
})
</script>

<style scoped></style>
