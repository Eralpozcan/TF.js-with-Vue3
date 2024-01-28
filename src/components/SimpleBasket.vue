<script setup>
defineProps({
  products: Array
});
</script>

<template>
  <div class="mx-auto bg-white-800 dark:bg-gray-800 rounded p-4 mt-2 shadow-md">
    <h2 class="text-xl font-semibold mb-4">Product Basket</h2>
    <div class="flex justify-between items-center border-b pb-4 mb-4" v-for="product in products" :key="product.id">
      <div>
        <h3 class="text-lg text-balance font-medium">{{ product.name }}</h3>
      </div>
      <div class="flex items-center">
        <span class="text-slate-600 dark:text-slate-400 font-semibold">Price: {{ product.price }}</span>
      </div>
    </div>
  </div>
</template>