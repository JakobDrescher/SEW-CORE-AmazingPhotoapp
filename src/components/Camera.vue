<template>
  <h1>Camera</h1>
  <video ref="video"></video>
</template>

<script setup>
import {ref} from "vue";

let videoSrc;
let video=ref(null);
navigator.mediaDevices.getUserMedia({video: true, audio: false}).then((stream) => {
  console.log(video.value);
  video.srcObject = stream;
  video.value.play();
}).catch((err) => {
  console.error(`An error occurred: ${err}`);
});
</script>