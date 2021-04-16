<template>
    <div class="text-center">
        <v-menu open-on-hover v-model="menu" :close-on-content-click="false" :nudge-width="80" offset-y>
            <template v-slot:activator="{ on, attrs }">
                <v-btn text dark v-bind="attrs" v-on="on">
                    <v-icon left color="black">
                        menu
                    </v-icon>
                   <span class="black--text">Shop by Department</span> 
                </v-btn>
            </template>
            <v-list>
                <v-list-item v-for="(item, index) in items" :key="index" @click="search">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
        
    </div>
</template>
<script>
    export default {
        data: () => ({
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
        }),
    }
</script>