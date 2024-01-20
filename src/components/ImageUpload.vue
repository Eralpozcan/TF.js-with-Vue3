<template>
  <div class="flex flex-col items-center">
    <div class="indicator">
      <span v-if="loadingImage" class="indicator-item indicator-center indicator-middle badge badge-primary">Uploading Image...</span> 
      <img :src="previewImage" alt="Input Image" class="w-96 h-96 my-2 rounded" />
    </div>

    <input type="file" accept="image/*" class="file-input w-full max-w-xs mb-2" alt="Image Input" @change="handleImageUpload" />
    <button class="btn btn-primary w-32" @click="processImage" :disabled="!isImageSelected">Classify</button>
  </div>
</template>

<script>
import { classifyImage, loadModel } from '../utils/tensorflowImageClassifier'
export default {
  data() {
    return {
      classificationResults: [],
      previewImage: "https://placehold.co/600x600",
      loadingImage: false,
    };
  },
  computed: {
    isImageSelected() {
      return this.previewImage !== "https://placehold.co/600x600"
    }
  },
  methods: {
    async handleImageUpload(event) {
      const file = event.target.files[0]
      const image = new Image()
      const reader = new FileReader()

      reader.onloadstart = () => {
        this.loadingImage = true
      };

      reader.onloadend = () => {
        this.loadingImage = false
        image.src = reader.result
        this.previewImage = reader.result
      };

      reader.readAsDataURL(file)
    },
    async processImage() {
      if (this.previewImage) {
        const image = new Image()
        image.src = this.previewImage
        await loadModel()
        this.classificationResults = await classifyImage(image)
        this.$emit('getResult', this.classificationResults)
        this.$emit('getProducts', this.classificationResults)
      }
    },
  },
};
</script>
