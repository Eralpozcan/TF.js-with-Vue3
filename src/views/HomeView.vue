<template>
  <ImageUpload @getResult="getResult" @getProducts="getProducts" />
  <ResultDisplay v-if="classificationResults.length > 0" :labels="classificationResults"   />
  <SimpleBasket v-if="products.length > 0" :products="products" />
</template>

<script>
import ImageUpload from '@/components/ImageUpload.vue'
import ResultDisplay from '@/components/ResultDisplay.vue'
import SimpleBasket from '@/components/SimpleBasket.vue'
import { searchByName } from '../services/productService.js'

export default {
  components: {
    ImageUpload,
    ResultDisplay,
    SimpleBasket
},
  data() {
    return {
      classificationResults: [],
      products: []
    };
  },
  methods: {
    getResult(result) {
      this.classificationResults = result;
    },
    getProducts() {
      this.products = searchByName(this.classificationResults[0].label)
    }
  },

};
</script>
