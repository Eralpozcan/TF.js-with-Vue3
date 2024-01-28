<template>
  <div id="app" class="container mx-auto flex justify-center">
    <div>
      <Banner></Banner>
      <router-view />
    </div>
  </div>
</template>

<script setup>
import Banner from './components/Banner.vue';
</script>
