<template>
  <slot></slot>
</template>

<script setup>
import { onErrorCaptured } from 'vue';
import { ElNotification } from 'element-plus';

onErrorCaptured((error) => {
  ElNotification({
    title: 'Error',
    dangerouslyUseHTMLString: true,
    message:
      error.message || '<div>Opps!! Something went wrong.</div><i>Please try again later.<i>',
    type: 'error',
    duration: 3000,
  });
  return false;
});
</script>

<style lang="scss"></style>
