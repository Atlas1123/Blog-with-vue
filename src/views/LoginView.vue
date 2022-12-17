<script setup lang="ts">
import * as Yup from 'yup';
import { Form, Field } from 'vee-validate';
import { useAuthStore } from '@/stores';

import { RouterLink } from 'vue-router';

import '../assets/stylesheets/auth.css'

const schema = Yup.object().shape({
    email: Yup.string()
        .required('email is required'),
    password: Yup.string()
        .required('password is required')
});
type InputVal = {
    email: "",
    password: ""
}

async function onSubmit(values: InputVal) {
    const authStore = useAuthStore();

    try {
        const { email, password } = values;
        await authStore.login(email, password);
    } catch (error) {
        console.log(error)
    }
}

</script>
<template>
    <div class="page-container">
        <div class="auth-container">
            <h2 class="auth-page-title">Login</h2>
            <div class="row">
                <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors, isSubmitting }">
                    <div class="form-body">
                        <div class="form-group">
                            <Field name="email" type="text" class="form-control" placeholder="email" :class="{ 'is-invalid': errors.email }" />
                            <div class="invalid-feedback">{{ errors.email }}</div>
                        </div>
                        <div class="form-group">
                            <Field name="password" type="password" class="form-control" placeholder="Password" :class="{ 'is-invalid': errors.password }" />
                            <div class="invalid-feedback">{{ errors.password }}</div>
                        </div>
                        <div class="form-group">
                            <button class="btn btn-info btn-lg" :disabled="isSubmitting">
                                <span v-show="isSubmitting" class="spinner-border spinner-border-sm mr-1"></span>
                                Login
                            </button>
                        </div>
                        <div class="other-link">
                            <span>If you don't have an account, click here   </span>
                            <RouterLink to="/register" class="color-g">Register</RouterLink>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    </div>
</template>