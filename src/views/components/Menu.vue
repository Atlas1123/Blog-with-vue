<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>
<template>
    <ul class="auth-main-menu">
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/login">Login</RouterLink></li>
        <li><RouterLink to="/register">Register</RouterLink></li>
    </ul>
</template>