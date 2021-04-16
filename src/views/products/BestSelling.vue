<template>
    <div class="px-5 mt-5">
        <v-card flat>
            <v-card-title class="headline grey lighten-2">Best Selling</v-card-title>
            <v-item-group class="mb-5 px-3">
                <v-row class="pt-5 d-flex justify-content-start">
                    <v-col v-for="product in ProductCategories" :key="product.product_id" cols="12" sm="6" md="6"
                        lg="2">
                        <v-item cols="12" sm="12" md="6" lg="6">
                            <v-hover v-slot="{ hover }">
                                <v-card class="mx-auto" max-width="400" :elevation="hover ? 12 : 2"
                                    :class="{ 'on-hover': hover }">
                                    <v-img :src="product.src" lazy-src="/no_image.png" height="250px"
                                        class="d-flex align-end">
                                    </v-img>
                                    <v-card-subtitle class="d-flex justify-content-center">
                                            
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
                        src: 'https://image.freepik.com/free-psd/minimal-living-room-with-classic-sofa-carpet-interior-design-ideas_176382-1528.jpg',
                        name: 'Furniture',
                        price: 500,
                        discription: 'this is new item from'
                    },
                    {
                        src: 'https://image.freepik.com/free-photo/kitchen-interior_1048-8217.jpg',
                        name: 'Home & kitchen',
                        price: 500,
                        discription: 'this is new item from'
                    },
                    {
                        src: 'https://image.freepik.com/free-psd/smartphone-12-pro-max-mockup-with-shadow-overlay_165789-159.jpg',
                        name: 'Electronics',
                        price: 500,
                        discription: 'this is new item from'
                    },
                    {
                        src: 'https://image.freepik.com/free-photo/selective-focus-shot-white-stuffed-teddy-bear-with-mask_181624-32530.jpg',
                        name: 'Toyes',
                        price: 500,
                        discription: 'this is new item from'
                    }, {
                        src: 'https://image.freepik.com/free-photo/stylish-woman-clothing_132475-40.jpg',
                        name: 'Health & beauty',
                        price: 500,
                        discription: 'this is new item from'
                    },
                    {
                        src: 'https://image.freepik.com/free-psd/isometric-view-smartphone-mockup_1332-2508.jpg',
                        name: 'jewlery & watches',
                        price: 500,
                        discription: 'this is new item from'
                    }, {
                        src: 'https://image.freepik.com/free-psd/samsung-tv-mockup_1022-20.jpg',
                        name: 'Toys',
                        price: 500,
                        discription: 'this is new item from'
                    },
                    {
                        src: 'https://image.freepik.com/free-photo/white-drone-hovering-bright-blue-sky_158595-3345.jpg',
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