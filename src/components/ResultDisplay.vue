<script setup>
defineProps({
  labels: Array
});
</script>

<template>
  <div class="bg-white-800 dark:bg-gray-800 p-4 my-2 rounded shadow-md">
    <h2 class="text-2xl text-slate-600 dark:text-slate-400 font-bold mb-4">Classification Result</h2>
    <ul>
      <li v-for="(result, index) in labels" :key="index" class="mb-2 p-2 border rounded">
        <span class="font-semibold text-slate-600 dark:text-slate-400">{{ result.label }}</span> - {{ (result.probability).toFixed(2) }}
      </li>
    </ul>
  </div>
</template>