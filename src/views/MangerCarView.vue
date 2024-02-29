<template>
  <main>
    <div v-if="loading">
      <Loading />
    </div>
    <div else>
      <div class="flex justify-between items-center my-4">
        <div>
          <Form @submit="onSubmit">
            <div class="flex items-center">
              <div class="mr-2">
                <label>Name</label>
                <InputField
                  type="text"
                  name="name"
                  inputClass="p-2 my-1"
                  :errors="errors"
                  :regiter="name"
                />
              </div>
              <div class="">
                <InputRadio label="Full options" value="1" name="state" :register="state" />
                <InputRadio label="standard" value="2" name="state" :register="state" />
                <span class="text-red-500" v-if="errors['state']">{{ errors['state'] }}</span>
              </div>
              <button class="px-2 py-1 bg-slate-500 text-white">Filter</button>
            </div>
          </Form>
        </div>
        <div>
          <el-button type="success" @click="reloadPage">Reload</el-button>
          <el-button type="info" @click="() => router.push({ name: 'createCar' })"
            >Create car</el-button
          >
        </div>
      </div>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="px-6 py-3">ID</th>
              <th scope="col" class="px-6 py-3">Name</th>
              <th scope="col" class="px-6 py-3">Image</th>
              <th scope="col" class="px-6 py-3">Option</th>
              <th scope="col" class="px-6 py-3">Description</th>
              <th scope="col" class="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="car in data"
              :key="car.id"
              class="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
            >
              <th class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {{ car.id }}
              </th>
              <td class="px-6 py-4">
                {{ car.name }}
              </td>
              <td class="px-6 py-4">
                <img :src="car.image" class="w-[80px] object-cover h-[80px]" />
              </td>
              <td class="px-6 py-4">
                {{ car.state === 1 ? 'Full options' : 'Standard' }}
              </td>
              <td class="px-6 py-4">
                {{ car.description }}
              </td>
              <td class="px-6 py-4">
                <el-icon
                  :size="20"
                  @click="editHandle(car.id)"
                  color="#409EFC"
                  class="cursor-pointer mr-1"
                >
                  <Edit />
                </el-icon>
                <el-icon
                  :size="20"
                  color="#F56C6C"
                  class="cursor-pointer"
                  @click="() => setId(car.id)"
                >
                  <Delete />
                </el-icon>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="mt-5">
        <Pagination :total="total" @current-change="setPage" :currentPage="page" />
      </div>
      <el-dialog v-model="centerDialogVisible" title="Warning" width="30%" center>
        <span> It should be noted that the content will not be aligned in center by default </span>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="centerDialogVisible = false">Cancel</el-button>
            <el-button type="primary" @click="deleteHandle"> Confirm </el-button>
          </span>
        </template>
      </el-dialog>
    </div>
  </main>
</template>

<script setup>
import router from '@/router';
import store from '@/store';
import { computed, ref, watch } from 'vue';
import Pagination from '@/components/Pagination/index.vue';
import Loading from '@/components/Loading/index.vue';
import { Form, useForm } from 'vee-validate';
import InputField from '@/components/InputField/index.vue';
import InputRadio from '@/components/InputRadio/index.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const page = ref(route.query?.page || 1);
const loading = ref(false);
const centerDialogVisible = ref(false);

const { errors, defineInputBinds, handleSubmit } = useForm();
const name = defineInputBinds('name');
const state = defineInputBinds('state');

// func
const setId = (id) => {
  store.commit('carStore/setId', id);
  centerDialogVisible.value = true;
};
const queryName = ref(route.query?.name || '');
const queryState = ref(route.query?.state || '');
const queryPage = ref(route.query?.page || 1);

const setPage = (value) => {
  page.value = value;
  queryPage.value = value;
  router.push({
    name: 'car',
    query: { name: queryName.value, state: queryState.value, page: queryPage.value },
  });
};
const total = computed(() => store.state.carStore.total);
const editHandle = (id) => {
  router.push({ name: 'editCar', params: { id }});
};
const reloadPage = () => {
  queryName.value = '';
  queryState.value = '';
  queryPage.value = 1;
  router.push({
    name: 'car',
    query: null,
  });
};

const deleteHandle = () => {
  const id = store.state.carStore.id;
  store.dispatch('carStore/deleteCar', { id });
  centerDialogVisible.value = false;
  store.dispatch('carStore/getCars', { page: page.value });
};

watch(
  [queryName, queryState, queryPage],
  async([name, state, page]) => {
    // store.dispatch('carStore/getCars', { page });
    const filterParams = { name, state, page };
    for (const key in filterParams) {
      if (filterParams[key] === undefined || filterParams[key] === '') {
        delete filterParams[key];
      }
    }
    loading.value = true;
    await store.dispatch('carStore/getCars', { params: filterParams });
    loading.value = false;
  },
  { immediate: true }
);

const data = computed(() => {
  return store.getters.car;
});

const onSubmit = handleSubmit(async(values, { resetForm }) => {
  router.push({ name: 'car', query: { ...values, page: 1 }});
  queryState.value = values.state;
  queryName.value = values.name;
});
</script>

<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
