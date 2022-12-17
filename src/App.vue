<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './views/components/Header.vue'
import Footer from './views/components/Footer.vue'
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