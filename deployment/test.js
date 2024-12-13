const axios = require("axios");

const TF_SERVING_URL = "http://localhost:8501/v1/models/model_bert_en_uncased_L-12_H-768_A-12:predict";

const inputData = {
  instances: [
    ["i can't take it anymore, i wanna die"],
  ],
};

axios
  .post(TF_SERVING_URL, inputData)
  .then((response) => {
    console.log("Predictions:", response.data.predictions);
  })
  .catch((error) => {
    console.error("Error communicating with TensorFlow Serving:", error.response?.data || error.message);
  });