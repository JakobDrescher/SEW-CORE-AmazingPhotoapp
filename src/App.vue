<script setup>
import {RouterLink, RouterView} from 'vue-router'

</script>

<template>
  <nav class="container-fluid d-flex p-3 bg-dark justify-content-between">
    <button class="btn btn-light col-4 col-sm-2" @click="$router.push('camera')">Camera</button>
    <button class="btn btn-light col-4 col-sm-2" @click="$router.push('gallery')">Gallery</button>
  </nav>
  <main class="container-fluid text-center justify-content-center">
    <RouterView></RouterView>
  </main>
</template>