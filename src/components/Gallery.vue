<template>
<h1>Gallery</h1>
  <img v-for="picture in gallery.gallery" :src="picture">
</template>

<script setup>
import {galleryStore} from "@/stores/gallery.js";

let gallery=galleryStore();
</script>