<template>
  <div>
    <video ref="video" width="400" height="300" autoplay></video>
  </div>
</template>

<script>
export default {
  mounted() {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        this.$refs.video.srcObject = stream;
      })
      .catch(error => {
        console.error('Error accessing camera:', error);
      });
  }
}
</script>
