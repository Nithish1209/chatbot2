const API_KEY = "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";
const submitButton = document.getElementById("submit");
const clearButton = document.getElementById("clear");
const inputElement = document.getElementById("input");
const imageContainer = document.getElementById("image-container");

async function generateImage() {
  const query = inputElement.value.trim();
  if (query === "") {
    return;
  }
  const options = {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "image-alpha-001",
      prompt: query,
      num_images: 1,
      size: "512x512",
      response_format: "url"
    })
  };
  try {
    const response = await fetch("https://api.openai.com/v1/images/generations", options);
    const data = await response.json();
    console.log(data);
    const imageUrl = data.data[0].url;
    imageContainer.innerHTML = `<img src="${imageUrl}" alt="Generated Image">`;
  } catch (error) {
    console.log(error);
  }
}

submitButton.addEventListener("click", generateImage);

clearButton.addEventListener("click", function() {
  inputElement.value = "";
  imageContainer.innerHTML = "";
});
