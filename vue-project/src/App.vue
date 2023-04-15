<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import './styles.css'
</script>

<template>
  <header class="header bg-red-500">
    <div class="bg-red-200">test 1</div>
    <HelloWorld />
  </header>

  <RouterView />
</template>

<style scoped></style>
