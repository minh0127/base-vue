<template>
  <div>
    <label :for="name">{{ label }}</label>
    <select :id="name" v-model="selectedValue" @change="handleChange">
      <option value="" disabled>Select a car brand</option>
      <option v-for="option in options" :value="option" :key="option.value">{{ option }}</option>
    </select>
    <div class="error-feedback">{{ errors[name] }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps({
  label: String,
  name: String,
  options: Array,
  value: String,
  handleChange: Function,
  errors: Object,
});

const selectedValue = ref(props.value);
</script>
