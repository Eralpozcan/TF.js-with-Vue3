<template>
  <div class="mx-auto bg-gray-800 rounded p-4 mt-2 shadow-md">
    <h2 class="text-xl font-semibold mb-4">Product Basket</h2>
    <div class="flex justify-between items-center border-b pb-4 mb-4" v-for="(product,index) in products" :key="index">
      <div>
        <h3 class="text-lg font-medium">{{ product.name }}</h3>
      </div>
      <div class="flex items-center">
        <span class="text-gray-600 font-semibold">Price: {{ product.price }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    products: Array 
  },
  data() {
    return {
      previewImage: "https://placehold.co/600x600",
      loadingImage: false,
    };
  }
}
</script>