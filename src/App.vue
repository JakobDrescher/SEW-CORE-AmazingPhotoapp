<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <nav>
    <RouterLink to="/camera">Head to the Camera</RouterLink>
    <RouterLink to="/gallery">Head to the Gallery</RouterLink>
  </nav>
<main>
  <RouterView></RouterView>
</main>
</template>