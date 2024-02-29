<template>
  <main>
    <div class="flex justify-between items-center my-4">
      <h1 class="text-red">Manage</h1>
      <el-button type="info" @click="() => router.push({ name: 'create' })"
        >Create category</el-button
      >
    </div>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3">ID</th>
            <th scope="col" class="px-6 py-3">Title</th>
            <th scope="col" class="px-6 py-3">Slug</th>
            <th scope="col" class="px-6 py-3">describe</th>
            <th scope="col" class="px-6 py-3">status</th>
            <th scope="col" class="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in data"
            :key="item.id"
            class="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
          >
            <th class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {{ item.id }}
            </th>
            <td class="px-6 py-4">
              {{ item.title }}
            </td>
            <td class="px-6 py-4">
              {{ item.slug }}
            </td>
            <td class="px-6 py-4">
              {{ item.describe }}
            </td>
            <td class="px-6 py-4">
              {{ item.status }}
            </td>
            <td class="px-6 py-4">
              <el-icon
                :size="20"
                @click="editHandle(item.id)"
                color="#409EFC"
                class="cursor-pointer mr-1"
              >
                <Edit />
              </el-icon>
              <el-icon
                :size="20"
                color="#F56C6C"
                class="cursor-pointer"
                @click="() => setId(item.id)"
              >
                <Delete />
              </el-icon>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="mt-5">
      <Pagination :total="105" @current-change="setPage" />
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
  </main>
</template>

<script setup>
import router from '@/router';
import store from '@/store';
import { computed, ref, watch } from 'vue';
import Pagination from '@/components/Pagination/index.vue';
const page = ref(1);
const centerDialogVisible = ref(false);
// func
const setId = (id) => {
  store.commit('categoryStore/setId', id);
  centerDialogVisible.value = true;
};

const setPage = (value) => {
  page.value = value;
};

const editHandle = (id) => {
  router.push({ name: 'edit', params: { id }});
};

const deleteHandle = () => {
  const id = store.state.categoryStore.id;
  store.dispatch('categoryStore/deleteCategory', { id });
  centerDialogVisible.value = false;
  store.dispatch('categoryStore/getCategory', { page: page.value });
};

watch(
  page,
  (page) => {
    store.dispatch('categoryStore/getCategory', { page });
  },
  { immediate: true }
);

const data = computed(() => {
  return store.getters.category;
});
</script>

<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
