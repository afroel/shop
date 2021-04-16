<template>
    <div class="px-5 mt-5">
        <v-card flat>
            <v-card-title class="text-secondary text-uppercase">Top Categories </v-card-title>
            <v-item-group class="mb-5 px-3">
                <v-row class="pt-5 d-flex justify-content-start">
                    <v-col v-for="product in ProductCategories" :key="product.product_id" cols="12" sm="6" md="6"
                        lg="3">
                        <v-item cols="12" sm="12" md="6" lg="6">
                            <v-hover v-slot="{ hover }">
                                <v-card class="mx-auto" max-width="400" :elevation="hover ? 12 : 2"
                                    :class="{ 'on-hover': hover }">
                                    <v-img :src="product.src" lazy-src="/no_image.png" height="250px"
                                        class="d-flex align-end">
                                    </v-img>
                                    <v-card-subtitle class="d-flex justify-content-center">
                                        <router-link :to="{name:'test',params:{id: product.id}}" class="" >
                                            {{product.name}}
                                        </router-link>
                                        <br>
                                    </v-card-subtitle>
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                    </v-card-actions>
                                </v-card>
                            </v-hover>
                        </v-item>
                    </v-col>
                </v-row>
            </v-item-group>
        </v-card>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                ProductCategories: [{
                        src: 'https://image.freepik.com/free-psd/smartphone-12-pro-max-mockup-with-shadow-overlay_165789-159.jpg',
                        name: 'Electronics',
                        price: 500,
                        discription: 'this is new item from'
                    },
                    {
                        src: 'https://image.freepik.com/free-photo/full-length-shot-glad-curly-woman-striped-pants-jumping-purple-wall-indoor-portrait-wonderful-girl-sunglasses-fooling-around_197531-5125.jpg',
                        name: 'Cloths',
                        price: 500,
                        discription: 'this is new item from'
                    },
                    {
                        src: 'https://image.freepik.com/free-psd/mockup-electronic-devices_23-2147864583.jpg',
                        name: 'Computers',
                        price: 500,
                        discription: 'this is new item from'
                    },
                    {
                        src: 'https://image.freepik.com/free-photo/kitchen-interior_1048-8217.jpg',
                        name: 'Home & kitchen',
                        price: 500,
                        discription: 'this is new item from'
                    }, {
                        src: 'https://image.freepik.com/free-photo/interior-dimly-lit-room-with-three-chairs-table-is-made-modern-business-style_101266-1394.jpg',
                        name: 'Health & beauty',
                        price: 500,
                        discription: 'this is new item from'
                    },
                    {
                        src: 'https://image.freepik.com/free-photo/businessman-checking-time-from-watch_105092-104.jpg',
                        name: 'jewlery & watches',
                        price: 500,
                        discription: 'this is new item from'
                    }, {
                        src: 'https://image.freepik.com/free-psd/cute-teddy-bear-toy_176382-350.jpg',
                        name: 'Toys',
                        price: 500,
                        discription: 'this is new item from'
                    },
                    {
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
<style scoped>
    .v-card {
        transition: opacity .5s ease-in-out;
    }

    .v-card:not(.on-hover) {
        opacity: 1.0;
    }

    .show-btns {
        color: rgb(221, 157, 18) !important;
    }
</style>