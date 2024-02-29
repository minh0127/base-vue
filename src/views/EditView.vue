<template>
  <el-card class="w-[480px] m-auto">
    <Form @submit="onSubmit">
      <div class="flex flex-col mb-2">
        <label for="title">Title</label>
        <InputField
          type="text"
          name="title"
          inputClass="p-2 my-1"
          :errors="errors"
          :regiter="title"
        />
      </div>
      <div class="flex flex-col">
        <label for="slug">Slug</label>
        <InputField
          type="text"
          name="slug"
          inputClass="p-2 my-1"
          :errors="errors"
          :regiter="slug"
        />
      </div>
      <div class="flex flex-col mb-2">
        <label for="describe">Describe</label>
        <InputField
          type="text"
          name="describe"
          inputClass="p-2 my-1"
          :errors="errors"
          :regiter="describe"
        />
      </div>
      <div class="flex flex-col">
        <label for="status">Status</label>
        <InputField
          type="text"
          name="status"
          inputClass="p-2 my-1"
          :errors="errors"
          :regiter="status"
        />
      </div>
      <button class="mt-3 px-2 py-1 bg-blue-500 text-white">Update</button>
    </Form>
  </el-card>
</template>

<script setup>
import CategoryApi from '@/api/CategoryApi';
import InputField from '@/components/InputField/index.vue';
import router from '@/router';
import { useRoute } from 'vue-router';
import store from '@/store';
import { Form, useForm } from 'vee-validate';
import { onMounted } from 'vue';
import * as yup from 'yup';
const schema = yup.object({
  title: yup.string().required(),
  slug: yup.string().required(),
  describe: yup.string().required(),
  status: yup.number().required(),
});

const { errors, defineInputBinds, handleSubmit, setValues } = useForm({
  validationSchema: schema,
});

const route = useRoute();
const id = route.params.id;

const title = defineInputBinds('title');
const slug = defineInputBinds('slug');
const describe = defineInputBinds('describe');
const status = defineInputBinds('status');

onMounted(async() => {
  try {
    const response = await CategoryApi.getItem({ id });
    setValues(response.data);
  } catch (error) {
    console.log(error);
  }
});
const onSubmit = handleSubmit(async(values) => {
  await store.dispatch('categoryStore/updateCategory', { id, data: values });
  router.push('/admin');
});
</script>
