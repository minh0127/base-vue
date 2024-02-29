<template>
  <main>
    <el-card class="max-w-[880px] m-auto p-0" body-class="!p-0">
      <div class="h-10 bg-gray-400 px-[90px] leading-10 font-bold">Title</div>
      <div class="px-5 mt-4">
        <Form @submit="onSubmit">
          <div class="grid grid-rows-10 gap-4">
            <div class="flex items-center">
              <div class="min-w-[200px]"></div>
              <InputRadio label="Full options" value="1" name="state" :register="state" />
              <InputRadio label="standard" value="2" name="state" :register="state" />
              <span class="text-red-500" v-if="errors['state']">{{ errors['state'] }}</span>
            </div>
            <div class="flex items-center">
              <div class="min-w-[200px]">
                <span class="p-1 bg-red-500 text-white mr-2">required</span>
                <label for="name">Name</label>
              </div>
              <InputField
                type="text"
                name="name"
                inputClass="p-2 my-1"
                :errors="errors"
                :regiter="name"
              />
            </div>

            <div class="flex items-center">
              <div class="min-w-[200px]">
                <span class="p-1 bg-red-500 text-white mr-2">required</span>
                <label for="description">Description</label>
              </div>
              <div class="w-full">
                <InputField
                  type="text"
                  name="description"
                  inputClass="p-2 my-1"
                  :errors="errors"
                  :regiter="description"
                />
              </div>
            </div>
            <div class="flex items-center">
              <div class="min-w-[200px]">
                <span class="p-1 bg-red-500 text-white mr-2">required</span>
                <label for="company">Image</label>
              </div>
              <div class="w-full">
                <div class="mt-2" v-show="imagePreviewUrl">
                  <img
                    :src="imagePreviewUrl"
                    alt="Image Preview"
                    style="max-width: 150px; max-height: 150px"
                  />
                </div>
                <input
                  type="file"
                  name="image"
                  class="p-2 my-1"
                  style="width: 100%"
                  accept="image/*"
                  v-on:change="handleImageChange"
                />
                <span class="text-red-500" v-if="errors['image']">{{ errors['image'] }}</span>
              </div>
            </div>
          </div>
          <button class="mt-3 px-2 py-1 bg-blue-500 text-white">submit</button>
        </Form>
      </div>
    </el-card>
  </main>
</template>

<script setup>
import { Form, useForm } from 'vee-validate';
import InputField from '@/components/InputField/index.vue';
import InputRadio from '@/components/InputRadio/index.vue';
import * as yup from 'yup';
import { ref } from 'vue';
import store from '@/store';
import router from '@/router';

const file = ref();
const imagePreviewUrl = ref();
const schema = yup.object({
  state: yup.string().required(),
  name: yup.string().required(),
  description: yup.string().required(),
});

const { errors, defineInputBinds, setErrors, handleSubmit } = useForm({
  validationSchema: schema,
});
const name = defineInputBinds('name');
const description = defineInputBinds('description');
const state = defineInputBinds('state');

// Function to handle file input change
const handleImageChange = (event) => {
  file.value = event.target.files[0];
  if (file.value) {
    setErrors({ image: '' });
    const reader = new FileReader();
    reader.onload = (e) => {
      imagePreviewUrl.value = e.target.result;
    };
    reader.readAsDataURL(file.value);
  } else {
    imagePreviewUrl.value = '';
  }
};
const onSubmit = handleSubmit(async(values, { resetForm }) => {
  if (!file.value) {
    setErrors({ image: 'file is required' });
    return;
  }

  const data = { ...values, image: file.value };
  const res = await store.dispatch('carStore/createCar', { data });
  if (res.status === 'success') {
    resetForm();
    router.push('/admin/cars');
    alert('Created car successfully');
  }
});
</script>
