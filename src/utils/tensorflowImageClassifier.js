import * as tf from '@tensorflow/tfjs';

let model
let labels
let labelsArray

async function loadModel() {
  model = await tf.loadGraphModel("https://www.kaggle.com/models/google/mobilenet-v2/frameworks/TfJs/variations/035-128-classification/versions/3", { fromTFHub: true })
  labels = await fetch("https://storage.googleapis.com/download.tensorflow.org/data/ImageNetLabels.txt")
  .then((res) => res.text())
  labelsArray = labels.split('\n').map(label => label.trim()).filter(label => label !== '');
}

async function classifyImage(image) {
  const imgTensor = tf.browser.fromPixels(image)
    .resizeNearestNeighbor([128, 128])
    .toFloat()
    .div(tf.scalar(255))
    .expandDims();
  const predictions = await model.predict(imgTensor);
  const topPredictions = Array.from(predictions.dataSync())
    .map((probability, index) => ({ probability, label: labelsArray[index]}))
    .sort((a, b) => b.probability - a.probability)
    .slice(0, 3);
  return topPredictions;
}

export { loadModel, classifyImage };
