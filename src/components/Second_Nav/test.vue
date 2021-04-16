<template>
    <v-sheet class="mx-auto" elevation="3" max-width="1200">
        <v-slide-group v-model="model" class="pa-4"  show-arrows>
            <v-slide-item v-for="product in ProductCategories" :key="product.id" v-slot="{ active, toggle }">
                <v-img :src="active ? undefined : product.src" class="ma-4" height="200" width="200"
                    @click="toggle">
                    <v-row class="fill-height" align="center" justify="center">
                        <v-scale-transition>
                        </v-scale-transition>
                    </v-row>
                </v-img>
            </v-slide-item>
        </v-slide-group>
    </v-sheet>
</template>
<script>
    export default {
        data() {
            return {
                model: null,
                ProductCategories: [{
                        id: 1,
                        src: 'https://image.freepik.com/free-psd/smartphone-12-pro-max-mockup-with-shadow-overlay_165789-159.jpg',
                        name: 'Electronics',
                        price: 500,
                        discription: 'this is new item from'
                    },
                    {
                        id: 2,
                        src: 'https://image.freepik.com/free-photo/full-length-shot-glad-curly-woman-striped-pants-jumping-purple-wall-indoor-portrait-wonderful-girl-sunglasses-fooling-around_197531-5125.jpg',
                        name: 'Cloths',
                        price: 500,
                        discription: 'this is new item from'
                    },
                    {
                        id: 3,
                        src: 'https://image.freepik.com/free-psd/mockup-electronic-devices_23-2147864583.jpg',
                        name: 'Computers',
                        price: 500,
                        discription: 'this is new item from'
                    },
                    {
                        id: 4,
                        src: 'https://image.freepik.com/free-photo/kitchen-interior_1048-8217.jpg',
                        name: 'Home & kitchen',
                        price: 500,
                        discription: 'this is new item from'
                    },
                    {
                        id: 5,
                        src: 'https://image.freepik.com/free-photo/interior-dimly-lit-room-with-three-chairs-table-is-made-modern-business-style_101266-1394.jpg',
                        name: 'Health & beauty',
                        price: 500,
                        discription: 'this is new item from'
                    },
                    {
                        id: 6,
                        src: 'https://image.freepik.com/free-photo/businessman-checking-time-from-watch_105092-104.jpg',
                        name: 'jewlery & watches',
                        price: 500,
                        discription: 'this is new item from'
                    },
                    {
                        id: 7,
                        src: 'https://image.freepik.com/free-psd/cute-teddy-bear-toy_176382-350.jpg',
                        name: 'Toys',
                        price: 500,
                        discription: 'this is new item from'
                    },
                    {
                        id: 8,
                        src: 'https://image.freepik.com/free-photo/woman-collection-beauty-care-product-accessories-light-surface_23-2148181427.jpg',
                        name: 'Womens Cosmotics',
                        price: 500,
                        discription: 'this is new item from'
                    },
                    {
                        id: 9,
                        src: 'https://image.freepik.com/free-photo/businessman-checking-time-from-watch_105092-104.jpg',
                        name: 'jewlery & watches',
                        price: 500,
                        discription: 'this is new item from'
                    },
                    {
                        id: 10,
                        src: 'https://image.freepik.com/free-psd/cute-teddy-bear-toy_176382-350.jpg',
                        name: 'Toys',
                        price: 500,
                        discription: 'this is new item from'
                    },
                    {
                        id: 11,
                        src: 'https://image.freepik.com/free-photo/woman-collection-beauty-care-product-accessories-light-surface_23-2148181427.jpg',
                        name: 'Womens Cosmotics',
                        price: 500,
                        discription: 'this is new item from'
                    },
                ],
            }
        },
    }
</script>