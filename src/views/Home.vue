<template>
  <div>
    <slider />
    <product_categories />
    <br><br><br>
    <v-divider></v-divider>
    <fashions />
    <br><br><br>
    <v-divider></v-divider>
    <electronics />
    <br><br><br>
    <v-divider></v-divider>
    <best_sellilng />
  </div>
</template>

<script>
  import slider from '../components/slider'
  import product_categories from '../views/products/ProductCategories'
  import fashions from '../views/products/Fashion'
  import electronics from '../views/products/Electronics'
  import best_sellilng from '../views/products/BestSelling'

  export default {
    components: {
      slider,
      fashions,
      electronics,
      product_categories,
      best_sellilng
    }
  }
</script>