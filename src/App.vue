<template>
  <div id="app" class="container mx-auto flex justify-center">
    <div>
      <Banner></Banner>
      <router-view />
      <SpeedInsights />
    </div>
  </div>
</template>

<script setup>
import { SpeedInsights } from "@vercel/speed-insights/vue"
import Banner from './components/Banner.vue';
</script>
