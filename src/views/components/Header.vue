  <script setup lang="ts">
  import { storeToRefs } from "pinia";
  import { useAuthStore } from "@/stores";
  
  import MenuVue from "./Menu.vue";
  import "../../assets/stylesheets/header.css";
  
  const authStore = useAuthStore();
  const { user } = storeToRefs(authStore);
</script>

<template>
    <div class="page-container">
      <div class="main-header">
        <div class="row">
          <div class="logo">
            <router-link to="/">
              <img alt="Vue logo" class="logo" src="../../assets/logo.svg" width="125" height="125" />
              <span>My Blog</span>
            </router-link>
          </div>
          <div class="profile-side">
              <div class="user-info"></div>
              <div class="auth-menu">
                <div v-if="user" class="user-profile">
                  <ul class="auth-main-menu">
                      <li><RouterLink to="/">Home</RouterLink></li>
                      <li><RouterLink to="blogs">Blogs</RouterLink></li>
                      &nbsp;&nbsp;|&nbsp;&nbsp;
                      <li><span>Hi Atlas1123{{user.username}}!</span></li>
                      <li><a href="" @click="authStore.logout()">Logout</a></li>
                  </ul>
                </div>
                <MenuVue v-else />
              </div>
          </div>
        </div>
        <div class="row">
          <div class="menu-bar">
          </div>
        </div>
      </div>
    </div>
  </template>
  <style scoped>
  .auth-main-menu li span {
    font-family: cursive;
    display: inline-block;
    padding: 10px;
  }
</style>