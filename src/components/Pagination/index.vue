<template>
  <el-pagination
    @current-change="setPage"
    background
    layout="prev, pager, next"
    :total="total"
    :current-page="Number(currentPage)"
  />
</template>

<script setup>
const emit = defineEmits(['setPage']);
defineProps({
  total: Number,
  currentPage: String,
});
const setPage = (value) => {
  emit('current-change', value);
};
</script>
