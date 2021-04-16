<template>
    <div id="second_nav">
        <v-card color="white" height="70" max-width-="500" elevation="0" class="pt-4">
            <v-container-fluid>
                <v-row class="mx-3 d-flex justify-space-around">
                    <v-col>
                        <nav_menu />
                    </v-col>
                    <v-col>
                        <v-row class="d-flex justify-content-around">
                            <span>
                                <router-link to="/" class="black--text">Home</router-link>
                                <span>Sell on ashewa</span>
                            </span>
                        </v-row>

                    </v-col>
                    <v-col id="spacer"></v-col>

                    <v-col class="d-flex justify-content-end ml-5">
                        <v-col>
                            Track order
                        </v-col>
                        <v-col id="spacer_2"></v-col>
                        <v-col>
                            <template class="ml-5">
                                <div class="text-center">
                                    <v-menu offset-y open-on-hover small>
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-btn text color="black" dark v-bind="attrs" v-on="on">
                                                Language
                                                <v-icon right>mdi-chevron-down</v-icon>
                                            </v-btn>
                                        </template>
                                        <v-list dense>
                                            <v-list-item-group v-model="item" color="primary">
                                                <v-list-item v-for="(item, i) in items" :key="i">
                                                    <v-list-item-content>
                                                        <v-list-item-title v-text="item.title"></v-list-item-title>
                                                    </v-list-item-content>
                                                </v-list-item>
                                            </v-list-item-group>
                                        </v-list>
                                    </v-menu>
                                </div>
                            </template>
                        </v-col>

                    </v-col>
                </v-row>
            </v-container-fluid>
        </v-card>
    </div>
</template>

<script>
    import nav_menu from './Nav_menu';
    export default {
        components: {
            nav_menu
        },
        data() {
            return {
                items: [{
                        title: 'English'
                    },
                    {
                        title: 'አማርኛ'
                    },
                ],
            }
        },

    }
</script>
<style scoped>
    /* #spacer {
        background-color: white;
        width: 400px;
        height: 10px;
    } */

    #second_nav {
        width: 100%;
        align-content: center;
        border-top: 5px solid black;
    }

    #spacer_2 {
        background-color: white;
        width: 550px;
        height: 10px;
    }

    span {
        color: white;
        padding-right: 20px;
        margin-top: 20px;
    }
</style>