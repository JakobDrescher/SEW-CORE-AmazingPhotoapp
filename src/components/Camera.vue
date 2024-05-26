<template>
  <div class="row col-12 col-md-8 p-3 m-0 position-fixed top-50 start-50 translate-middle text-center justify-content-center g-4">
    <h1>Camera</h1>
    <video ref="video" autoplay class="object-fit-contain p-0 border border-secondary border-5 rounded shadow-none"></video>
    <button @click="takePicture();" class="btn btn-primary col-sm-3">Take Picture</button>
  </div>
</template>

<script setup>
import {ref} from "vue";
import {galleryStore} from '@/stores/gallery';

const gallery = galleryStore();
const video = ref(null);
let width;
let height;

navigator.mediaDevices.getUserMedia({video: true, audio: false}).then((stream) => {
  video.value.srcObject = stream;
  height = stream.getVideoTracks()[0].getSettings().height;
  width = stream.getVideoTracks()[0].getSettings().width;
}).catch((err) => {
  console.error(`An error occurred: ${err}`);
});


function takePicture() {
  let picture = document.createElement('canvas');
  let context = picture.getContext('2d');

  picture.height = height;
  picture.width = width;

  context.drawImage(video.value, 0, 0, width, height);
  console.log(picture.toDataURL('image/png'));
  gallery.addPicture(picture.toDataURL('image/png'));
}
</script>