<template>
    <div class="px-5 mt-5">
        <v-card flat>
            <v-card-title class="headline grey lighten-2">Fashion</v-card-title>
            <v-item-group class="mb-5 px-3">
                <v-row class="pt-5 d-flex justify-content-around">
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
                                        {{product.price}}
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
                        src: 'https://image.freepik.com/free-psd/ripped-jean-shorts-with-tag-mockup_53876-65769.jpg',
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
                        src: 'https://image.freepik.com/free-psd/grey-hoodie-yellow-mockup_125540-534.jpg',
                        name: 'Computers',
                        price: 500,
                        discription: 'this is new item from'
                    },
                    {
                        src: 'https://image.freepik.com/free-psd/sport-tank-top-mockup_1051-2909.jpg',
                        name: 'Home & kitchen',
                        price: 500,
                        discription: 'this is new item from'
                    }, {
                        src: 'https://image.freepik.com/free-photo/white-front-sweater_125540-793.jpg',
                        name: 'Health & beauty',
                        price: 500,
                        discription: 'this is new item from'
                    },
                    {
                        src: 'https://image.freepik.com/free-photo/businessman-adjusting-his-cufflinks_105092-77.jpg',
                        name: 'jewlery & watches',
                        price: 500,
                        discription: 'this is new item from'
                    }, {
                        src: 'https://image.freepik.com/free-photo/brown-man-s-leather-derby-shoes_53876-97144.jpg',
                        name: 'Toys',
                        price: 500,
                        discription: 'this is new item from'
                    },
                    {
                        src: 'https://image.freepik.com/free-photo/female-sneakers-run-pink-background-fashion-stylish-sport-shoes-close-up_77190-2501.jpg',
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