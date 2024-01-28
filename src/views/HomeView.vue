<script setup>
import { ref } from 'vue'
import ImageUpload from '@/components/ImageUpload.vue'
import ResultDisplay from '@/components/ResultDisplay.vue'
import SimpleBasket from '@/components/SimpleBasket.vue'

const classificationResults = ref([])
const products = ref([])

const getResult = (result) => {
  classificationResults.value = result;
}
const getProducts = (result) => {
  products.value = result
};
</script>

<template>
  <ImageUpload @getResult="getResult" @getProducts="getProducts" />
  <ResultDisplay v-if="classificationResults.length > 0" :labels="classificationResults" />
  <SimpleBasket v-if="classificationResults.length > 0" :products="products" />
</template>
