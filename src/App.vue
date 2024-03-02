<script setup>
import { RouterView } from 'vue-router';
import { ErrorBoundary } from '@/hoc';
</script>

<template>
  <ErrorBoundary>
    <RouterView />
  </ErrorBoundary>
</template>

<style scoped></style>
