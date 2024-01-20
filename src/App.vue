<template>
  <div id="app" class="container mx-auto flex justify-center">
    <div>
      <Banner></Banner>
      <router-view />
    </div>
  </div>
</template>

<script>
import Banner from './components/Banner.vue';

export default {
    name: 'App',
    components: { Banner }
};
</script>

