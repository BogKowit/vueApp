<template>
  <MainNav/>
  <RouterView />
</template>


<script setup >
import MainNav from "@/components/Navigation/MainNav.vue"

import './styles.css'
import { RouterView } from 'vue-router'
</script>
