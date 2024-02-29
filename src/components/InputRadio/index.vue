<template>
  <div>
    <div style="display: flex">
      <div>
        <input
          v-for="option in options"
          :value="option"
          :key="option.value"
          type="radio"
          :name="name"
          v-model="radioValue"
          @change="handleChange"
        />
      </div>
    </div>
    <div class="error-feedback">{{ errors[name] }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps({
  name: String,
  options: Array,
  value: String,
  handleChange: Function,
  errors: Object,
});
const radioValue = ref(props.value);
console.log(props.options);
</script>
