<template>
  <div>
    <canvas id="myChart" style="position: relative; height: 70vh; width: 80vw"></canvas>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import Chart from 'chart.js/auto'

let percents = ref([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])

let schools = ref([])

onMounted(() => {
  const getSchools = async () => {
    try {
      let res = await fetch('https://data.cityofnewyork.us/resource/uq7m-95z8.json?$limit=300')
      schools.value = await res.json()
    } catch (error) {
      console.error('Error fetching the data', error)
    }
  }

  getSchools()
})

watch(
  () => schools.value,
  () => {
    if (schools.value.length === 0) return

    percents.value = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    schools.value.forEach((school) => {
      const value = school.graduation_rate

      if (value < 0.85) percents.value[0]++
      else if (value < 0.9) percents.value[1]++
      else if (value < 0.95) percents.value[2]++
      else if (value < 1) percents.value[3]++
      else if (value < 1.05) percents.value[4]++
      else if (value < 1.1) percents.value[5]++
      else if (value < 1.15) percents.value[6]++
      else if (value < 1.2) percents.value[7]++
      else if (value < 1.25) percents.value[8]++
      else percents.value[9]++
    })

    const myChart = document.getElementById('myChart')

    new Chart(myChart, {
      type: 'bar',
      data: {
        labels: [
          '80-85%',
          '85-90%',
          '90-95%',
          '95-100%',
          '100-105%',
          '105-110%',
          '110-115%',
          '115-120%',
          '120-125%',
          '125%+',
        ],
        datasets: [
          {
            label: 'Number of Schools',
            data: percents.value,
            backgroundColor: [
              'rgb(255, 182, 193)',
              'rgb(255, 204, 128)',
              'rgb(255, 255, 158)',
              'rgb(179, 238, 238)',
              'rgb(173, 216, 230)',
              'rgb(230, 190, 255)',
              'rgb(224, 224, 224)',
              'rgb(255, 179, 128)',
              'rgb(204, 153, 255)',
              'rgb(192, 255, 192)',
            ],
            borderColor: 'rgb(0, 0, 0)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          x: {
            ticks: {
              color: 'rgb(255, 255, 255)',
              font: {
                size: 17,
                weight: 'bold',
                family: 'Arial',
              },
            },
          },
          y: {
            ticks: {
              color: 'rgb(255, 255, 255)',
              font: {
                size: 17,
                weight: 'bold',
                family: 'Arial',
              },
            },
          },
        },
        plugins: {
          title: {
            display: true,
            text: 'Number of Schools and the Percent of FSF Received',
            font: {
              size: 20,
              weight: 'bold',
              family: 'Arial',
            },
            color: 'rgb(250, 250, 250)',
          },
          legend: {
            labels: {
              color: 'rgb(220, 220, 220)',
              font: {
                size: 16,
                weight: 'bold',
                family: 'Arial',
              },
            },
          },
        },
        elements: {
          title: {
            display: true,
            text: 'Number of Schools',
            font: {
              size: 18,
              weight: 'bold',
              family: 'Arial',
            },
          },
        },
      },
    })
  },
  { immediate: true },
)
</script>

<style scoped></style>
