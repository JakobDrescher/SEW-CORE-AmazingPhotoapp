import { defineStore } from 'pinia'

export const galleryStore = defineStore('gallery', {
    state: () => {
        return { gallery: [] }
    },
    actions: {
        addPicture(picture) {
            this.gallery.push(picture);
        },
    },
})