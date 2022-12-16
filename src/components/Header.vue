<template>
    <div class="page-container">
      <div class="main-header">
        <div class="row">
          <div class="logo">
            <router-link to="/">
              <img alt="Vue logo" class="logo" src="../assets/logo.svg" width="125" height="125" />
              <span>My Blog</span>
            </router-link>
          </div>
          <div class="profile-side">
              <div class="user-info"></div>
              <div class="auth-menu">
                <MenuVue />
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
  
  <script setup>
  import MenuVue from "./Menu.vue";
  import "../assets/stylesheets/header.css";
  
//   export default {
//     name: "Header",
//     components : {
//       MenuVue
//     }
//   }
  </script>
  
  <style scoped>
    
  </style>