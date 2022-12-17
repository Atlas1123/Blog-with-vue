
<script setup lang="ts">
import * as Yup from 'yup';
import { Form, Field } from 'vee-validate';
import { useUserStore } from '@/stores';
import router from '@/router';

import { RouterLink } from 'vue-router';
import '../assets/stylesheets/auth.css'

const schema = Yup.object().shape({
    username: Yup.string()
        .required('username is required.'),
    email: Yup.string()
        .required('email is required'),
    password: Yup.string()
        .required('password is required')
});
async function onSubmit(values: {}) {
    const usersStore = useUserStore();
    try {
        await usersStore.register(values);
    } catch (error) {
        console.log(error)
    }
}
</script>
<template>
  <div class="page-container">
      <div class="auth-container">
          <h2 class="auth-page-title">Register</h2>
          <div class="row">
              <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors, isSubmitting }">
                  <div class="form-body">
                      <div class="form-group">
                            <Field name="username" type="text" class="form-control" placeholder="Username" :class="{ 'is-invalid': errors.username }" />
                            <div class="invalid-feedback">{{ errors.username }}</div>
                      </div>
                      <div class="form-group">
                            <Field name="email" type="email" class="form-control" placeholder="Email" :class="{ 'is-invalid': errors.email }" />
                            <div class="invalid-feedback">{{ errors.email }}</div>
                      </div>
                      <div class="form-group">
                            <Field name="password" type="password" class="form-control" placeholder="Password" :class="{ 'is-invalid': errors.password }" />
                            <div class="invalid-feedback">{{ errors.password }}</div>
                      </div>
                      <div class="form-submit-btn">
                          <button class="btn btn-info" :disabled="isSubmitting">
                            <span v-show="isSubmitting" class="spinner-border spinner-border-sm mr-1"></span>
                            Register</button>
                          <RouterLink to="/">Cancel</RouterLink>
                      </div>
                  </div>
                </Form>
          </div>
      </div>
  </div>
</template>