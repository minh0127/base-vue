<template>
  <div class="w-[40%] m-auto">
    <div v-bind="getRootProps()" class="h-28 bg-gray-300 text-center leading-10">
      <input v-bind="getInputProps()" />
      <p v-if="isDragActive">Drop the files here ...</p>
      <p v-else>Drag 'n' drop some files here, or click to select files</p>
    </div>
    <div class="w-96 grid grid-cols-3 gap-2 mt-4 m-auto">
      <div
        v-for="(url, index) in imagePreviews"
        :key="index"
        :class="index === 0 ? 'relative col-span-3 h-48' : 'col-span-1 h-24 relative'"
      >
        <el-image class="w-full h-full" :src="url" :fit="fit" />
        <el-icon
          :size="20"
          color="#409EFC"
          class="!absolute right-1 top-1 cursor-pointer"
          @click="() => handleRemoveImage(index)"
          ><CircleClose
        /></el-icon>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useDropzone } from 'vue3-dropzone';
const imagePreviews = ref([]);

function onDrop(acceptFiles) {
  for (const file of acceptFiles) {
    const imageUrl = URL.createObjectURL(file);
    imagePreviews.value.push(imageUrl);
  }
}

function handleRemoveImage(id) {
  const newArray = imagePreviews.value.filter((_, index) => index !== id);
  imagePreviews.value = newArray;
}

const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
</script>
