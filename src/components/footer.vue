<template>
<div >
    <v-footer dark padless>
        <v-card  tile  color="#778899 " class="white--text text-center" id="foot" >
            <v-card-text class="white--text pt-3">
                <v-container>
                    <v-row class="footer_padding">
                        <v-col cols="12" sm="12" md="6" lg="4">
                            <h2>OUR OURSES</h2>
                            <ul>
                                <li>Digital marketing</li>
                                <li>Web Designe</li>
                                <li>MLM Trainings</li>
                                <li>Personal Development</li>
                                <li>Project Management</li>
                            </ul>
                        </v-col>
                        <v-col cols="12" sm="12" md="6" lg="4">
                            <h2>ABOUT</h2>
                            <ul>
                                <li> Ashewa story</li>
                                <li>Community</li>
                                <li>Blog</li>
                                <li>Job Vacancy</li>
                                <li>Contact</li>
                            </ul>
                        </v-col>
                        <v-col cols="12" sm="12" md="6" lg="4">
                            <h2>OUR ECOMMERCE</h2>
                            <ul>
                                <li>Order Now</li>
                                <li>Terms and Condition</li>
                                <li>Shipping</li>
                                <li>Support</li>
                                <li>Register to Buy</li>
                            </ul>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-text class="white--text">
                <v-row class="d-flex justify-content-around">
                    <v-col>
                        <v-card-text>
                            <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
                                <v-icon size="24px">{{ icon }}</v-icon>
                            </v-btn>
                        </v-card-text>
                    </v-col>
                    <v-col class="pt-5">

                        {{ new Date().getFullYear() }} — <strong> &copy; All rights reserved Ashewa Technology PLC</strong>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </v-footer>
</div>
</template>

<script>
    export default {
        data: () => ({
            icons: [
                'mdi-facebook',
                'mdi-twitter',
                'mdi-linkedin',
                'mdi-instagram',
            ],
        }),
    }
</script>
<style scoped>
    #foot{
        width: 100%;
    }

    li {
        list-style: none;
        list-style-position:start;
        padding:0px;
        text-align: start;
        /* align-items: flex-start; */
    }
h2{
    padding-left:20px;
    text-align: start;
}

</style>