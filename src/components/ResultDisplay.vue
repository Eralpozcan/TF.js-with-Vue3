<template>
  <div class="bg-gray-800 p-4 my-2 rounded">
    <h2 class="text-2xl font-bold mb-4">Classification Result</h2>
    <ul>
      <li v-for="(result, index) in labels" :key="index" class="mb-2 p-2 border rounded">
        <span class="font-semibold">{{ result.label }}</span> - {{ (result.probability * 10).toFixed(2) }}%
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    labels: Array
  }
}
</script>
