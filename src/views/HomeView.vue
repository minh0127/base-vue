<template>
  <button @click="errorTest">Error Test</button>
  <main>
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 px-32 lg:px-60">
      <el-card :body-style="{ padding: '0px' }" v-for="(car, index) in data" :key="index">
        <img :src="car.image" class="w-full object-cover h-[250px]" />
        <div style="padding: 14px">
          <h2 class="mb-2">{{ car.name }}</h2>
          <h4 class="mb-2">option:{{ car.state === 1 ? 'Full options' : 'Standard' }}</h4>
          <p class="mb-2">{{ car.description }}</p>
          <time class="time">{{ formatDate(car.created_at) }}</time>
        </div>
        <div class="w-full flex justify-center p-2">
          <el-button
            type="primary"
            @click="
              () => router.push({ name: 'Details', params: { carName: car.name, id: car.id } })
            "
            >Detail</el-button
          >
        </div>
      </el-card>
    </div>
    <div class="mt-5 px-60">
      <Pagination :total="11" @current-change="setPage" />
    </div>
  </main>
</template>
<script setup>
import { formatDate } from '@/utils/date';
// import { ref } from 'vue';
// import Pagination from '@/components/Pagination/index.vue';
// import router from '@/router';
import { computed } from 'vue';

// const page = ref(1);

// const setPage = (value) => {
//   page.value = value;
// };
// watch(
//   page,
//   (page) => {
//     store.dispatch('carStore/getCars', { page });
//   },
//   { immediate: true },
// );
const data = computed(() => {
  return [];
  // return store.getters.car;
});

function setPage(value) {
  console.log(value);
}

function errorTest() {
  throw new Error('hihi');
}
</script>
