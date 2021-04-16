<template>
    <v-carousel id="carousel_width">
        <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src" reverse-transition="fade-transition"
            transition="fade-transition"></v-carousel-item>
    </v-carousel>
</template>

<script>
    export default {
        data() {
            return {
                items: [{
                        src: 'https://image.freepik.com/free-psd/smartphone-12-pro-max-mockup-with-shadow-overlay_165789-159.jpg',
                    },
                    {
                        src: 'https://image.freepik.com/free-photo/loft-style-house-with-armchair-sofa-accessories-room-3d-rendering_41470-3342.jpg',
                    },
                    {
                        src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
                    },
                    {
                        src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
                    },
                ],
            }
        },
    }
</script>
<style scoped>
#carousel_width{
    width: 100%;
}
</style>