<template>
  <Form @submit="onSubmit">
    <div v-for="{ as, name, label, children, ...attrs } in schema.fields" :key="name">
      <label :for="name">{{ label }}</label>
      <Field :as="as" :id="name" :name="name" v-bind="attrs">
        <template v-if="children && children.length">
          <component
            v-for="({ tag, text, ...childAttrs }, idx) in children"
            :key="idx"
            :is="tag"
            v-bind="childAttrs"
          >
            {{ text }}
          </component>
        </template>
      </Field>
      <ErrorMessage :name="name" />
    </div>

    <button>Submit</button>
  </Form>
</template>
<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate';
defineProps({
  schema: {
    type: Object,
    required: true,
  },
});

const onSubmit = (value) => {
  console.log('🚀 ~ file: index.vue:32 ~ onSubmit ~ value:', value);
};
</script>
