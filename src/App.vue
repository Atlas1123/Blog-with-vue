<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Home from './components/Home.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="header">
    <Header />
  </div>
  <main class="main-content">
    <RouterView />
  </main>
  <Footer />
</template>

<style scoped>

</style>
