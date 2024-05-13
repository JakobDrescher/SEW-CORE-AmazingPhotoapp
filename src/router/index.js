import { createRouter, createWebHistory } from 'vue-router'
import Camera from "@/components/Camera.vue";
import Gallery from "@/components/Gallery.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/camera',
      name: 'camera',
      component: Camera
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: Gallery
    },
    {
      path: '/',
      redirect:'/camera'
    }
  ]
})

export default router
