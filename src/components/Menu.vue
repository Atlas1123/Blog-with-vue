<template>
    <ul class="auth-main-menu">
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="blogs">Blogs</RouterLink></li>
        <li><RouterLink to="/login">Login</RouterLink></li>
        <li><RouterLink to="/register">Register</RouterLink></li>
    </ul>
</template>

<script>
import { RouterLink } from "vue-router";
export default {
    name: "Menu"
}
</script>