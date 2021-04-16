<template>
    <div>
        <v-app-bar app color="white" dark flat>
            <v-col class="d-flex justify-start" cols="2">
                <div class="d-flex align-center">
                    <v-img class="mr-2" contain src="../assets/ashwa.png" height="100" max-width="100"
                        transition="scale-transition" width="100" />
                    <span class="black--text">Ashewa</span>
                </div>
            </v-col>

            <v-col class="d-flex justify-center mt-5" cols="6">
                <v-row>
                    <v-col cols="2">
                        <template class="mr-5">
                            <div class="text-center">
                                <v-menu offset-y>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn text v-bind="attrs" v-on="on" large class="black--text">
                                            All
                                            <v-icon right>mdi-chevron-down</v-icon>
                                        </v-btn>
                                    </template>
                                    <v-list>
                                        <v-list-item v-for="(item, index) in items" :key="index">
                                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                                        </v-list-item>
                                    </v-list>
                                </v-menu>
                            </div>
                        </template>
                    </v-col>
                    <v-col cols="6">
                        <template>
                            <v-text-field light placeholder="I'm shopping for ..." color="black" class="black--text">
                            </v-text-field>
                        </template>
                    </v-col>
                    <v-col cols="2">
                        <v-btn borderd class="black--text" color="transparent">search</v-btn>
                    </v-col>
                </v-row>

            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="3">
                <v-row>
                    <v-chip class="white">
                        <v-icon color="blue-grey darken-4">
                            equalizer
                        </v-icon>
                        <v-avatar right color="blue-grey darken-4" size="30">
                            <span class="white--text">1</span>
                        </v-avatar>
                    </v-chip>
                    <v-chip class="white">
                        <v-icon color="blue-grey darken-4 ">
                            favorite_border
                        </v-icon>
                        <v-avatar right color="blue-grey darken-4" small>
                            <span class="white--text">1</span>
                        </v-avatar>
                    </v-chip>
                    <v-chip class="white">
                        <v-icon color="blue-grey darken-4 ">
                            shopping_cart
                        </v-icon>
                        <v-avatar right color="blue-grey darken-4" small>
                            <span class="white--text">1</span>
                        </v-avatar>
                    </v-chip>

                    <v-spacer></v-spacer>
                </v-row>
            </v-col>
            <v-col>
                <login_register />
            </v-col>
        </v-app-bar>
    </div>
</template>


<script>
    import login_register from './Register_login'

    export default {
        components: {
            login_register,
        },
        data() {
            return {
                search: '',
                 items: [{
                    title: 'Electronics'
                },
                {
                    title: 'Home & kitchen'
                },
                {
                    title: 'Health & beauty'
                },
                {
                    title: 'jewlery & watches'
                },
                {
                    title:'Womens Cosmotics'
                }
            ],
            }
        },

    }
</script>