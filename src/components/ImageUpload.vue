<script setup>
// Importing ref and computed features from Vue.js
import { ref, computed } from 'vue';
// Importing classifyImage and loadModel functions from the tensorflowImageClassifier module
import { classifyImage, loadModel } from '@/utils/tensorflowImageClassifier';
import { searchByName } from '../services/productService.js'
// Creating a reactive array to hold image classification results
const classificationResults = ref([]);
// Creating a reactive variable to hold the preview image URL, initially set with a placeholder URL
const previewImage = ref("https://placehold.co/600x600");
// Creating a reactive boolean variable to track the loading state of the image
const loadingImage = ref(false);
// Defining custom events within the component using Vue.js' defineEmits function
const emit = defineEmits(['getResult', 'getProducts']);
// Creating a computed property to check if the user has selected an image
const isImageSelected = computed(() => previewImage.value !== "https://placehold.co/600x600");
// Event handler function triggered when the user selects a file
const handleImageUpload = (event) => {
  const file = event.target.files[0]; // Retrieve the selected file
  const image = new Image(); // Create a new HTML image element
  const reader = new FileReader(); // Create a FileReader for file reading operations

  // When the file reading process starts
  reader.onloadstart = () => {
    previewImage.value = previewImage; // Set the preview image (this line seems redundant or incorrect)
    loadingImage.value = true; // Set the loading state of the image to true
  };

  // When the file reading process completes
  reader.onloadend = () => {
    loadingImage.value = false; // Set the loading state of the image to false
    image.src = reader.result; // Set the source of the image element with the read data
    previewImage.value = reader.result; // Set the preview image with the read data
  };

  // Start reading the file, converting it to base64 format
  reader.readAsDataURL(file);
};

// Event handler function to initiate image classification
const processImage = async () => {
  if (previewImage.value) { // If a preview image is available
    const image = new Image(); // Create a new HTML image element
    image.src = previewImage.value; // Set the source of the image element with the preview image URL
    await loadModel(); // Load the TensorFlow model
    classificationResults.value = await classifyImage(image); // Classify the image and assign the results to classificationResults
    emit('getResult', classificationResults.value); // Trigger the 'getResult' event and send the results to higher-level components
    const products = searchByName(classificationResults.value[0].label)
    emit('getProducts',products); // Trigger the 'getProducts' event and send the results to higher-level components
  }
};
</script>
<template>
  <div class="flex flex-col items-center">
    <div class="indicator">
      <span v-if="loadingImage" class="indicator-item indicator-center indicator-middle badge badge-primary">Uploading Image...</span> 
      <img :src="previewImage" alt="Input Image" class="w-96 h-96 my-2 rounded" loading="lazy"/>
    </div>
    <input type="file" accept="image/*" class="file-input w-full max-w-xs mb-2" alt="Image Input" @change="handleImageUpload" />
    <button class="btn btn-primary w-32" @click="processImage" :disabled="!isImageSelected">Classify</button>
  </div>
</template>
