<template>
  <div class="min-h-screen py-[200px]">
    <el-card class="w-[480px] m-auto">
      <Form @submit="onSubmit">
        <div class="flex flex-col mb-2">
          <label for="email">Email</label>
          <InputField
            type="text"
            name="email"
            inputClass="p-2 my-1"
            :errors="errors"
            :regiter="email"
          />
        </div>
        <div class="flex flex-col">
          <label for="password">Password</label>
          <InputField
            type="password"
            name="password"
            inputClass="p-2 my-1"
            :errors="errors"
            :regiter="password"
          />
        </div>
        <div class="flex flex-col">
          <label for="confirm_password">Confirm password</label>
          <InputField
            type="password"
            name="confirm_password"
            inputClass="p-2 my-1"
            :errors="errors"
            :regiter="confirm_password"
          />
        </div>
        <button
          class="mt-3 px-2 py-1 bg-blue-500 text-white transition-transform duration-300 ease-in-out"
        >
          Register
        </button>
      </Form>
    </el-card>
  </div>
</template>

<script setup>
import InputField from '@/components/InputField/index.vue';
import router from '@/router';
import store from '@/store';
import { Form, useForm } from 'vee-validate';
import * as yup from 'yup';
const schema = yup.object({
  email: yup.string().required('email required').email('Email invalid'),
  password: yup.string().required('Password required'),
  confirm_password: yup
    .string()
    .required()
    .oneOf([yup.ref('password')], 'Passwords do not match'),
});

const { errors, defineInputBinds, handleSubmit } = useForm({
  validationSchema: schema,
});

const email = defineInputBinds('email');
const password = defineInputBinds('password');
const confirm_password = defineInputBinds('confirm_password');

const onSubmit = handleSubmit(async(values) => {
  const res = await store.dispatch('authStore/register', values);
  if (res.status === 'success') {
    router.push('/auth/login');
  } else {
    alert('register failed');
  }
});
</script>
