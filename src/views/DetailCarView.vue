<template>
  <main>
    <div class="px-60">
      <h1>{{ car.name }}</h1>
      <h4 class="mb-2">option:{{ car.state === 1 ? 'Full options' : 'Standard' }}</h4>
      <time class="time">{{ formatDate(car.created_at) }}</time>
      <div class="grid grid-cols-12 gap-4 mt-4">
        <div class="col-span-5">
          <img :src="car.image" class="w-full object-cover h-[300px]" />
        </div>
        <div class="col-span-7">
          {{ car.description }}
        </div>
      </div>
    </div>
  </main>
</template>
<script setup>
import CarApi from '@/api/CarApi';
import { formatDate } from '@/utils/date';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const car = ref({});
const route = useRoute();
const id = route.params.id;

onMounted(async() => {
  try {
    const res = await CarApi.getCarItem({ id });
    car.value = res.data;
  } catch (error) {
    console.log(error);
  }
});
</script>
