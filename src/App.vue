<template>
  <v-row>
    <v-app style="background: #F5F5F5;">
      <nav-bar /><br><br><br>
      <!-- <secondnav /> -->
      <second_nav />
      <v-main class="px-5">
        <router-view></router-view>
      </v-main>
      <br><br><br>
      <footer_bar />
    </v-app>
  </v-row>
</template>

<script>
//  import secondnav from './components/nav2'
  import NavBar from './components/navBar.vue';
  import second_nav from './components/Second_Nav/Second_nav';
  import footer_bar from './components/footer';
  export default {
    name: 'App',

    components: {
      NavBar,
      // secondnav,
      second_nav,
      footer_bar
    },

    data: () => ({

    }),
  };
</script>