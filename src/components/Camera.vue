<template>
  <h1>Camera</h1>
  <video ref="video" autoplay></video>
  <button @click="takePicture();">Take Picture</button>
</template>

<script setup>
import {ref} from "vue";
import {galleryStore} from '@/stores/gallery';

const gallery=galleryStore();
const video=ref(null);
let width;
let height;

navigator.mediaDevices.getUserMedia({video: true, audio: false}).then((stream) => {
  video.value.srcObject = stream;

}).catch((err) => {
  console.error(`An error occurred: ${err}`);
});



function takePicture(){
  let picture= document.createElement('canvas');
  let context = picture.getContext('2d');

  picture.height=height;
  picture.width=width;

  context.drawImage(video.value,0,0,width,height);
  console.log(picture.toDataURL('image/png'));
  gallery.addPicture(picture.toDataURL('image/png'));
}
</script>