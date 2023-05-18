const API_KEY = "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";
const submitButton = document.getElementById("submit");
const clearButton = document.getElementById("clear");
const inputElement = document.getElementById("input");
const videoContainer = document.getElementById("video-container");

async function generateVideo() {
  const query = inputElement.value.trim();
  if (query === "") {
    return;
  }
  
  // Send the query to your backend for video generation using appropriate server-side code and OpenAI API calls
  
  // Example of a server-side request with placeholder code
  const response = await fetch("/generate-video", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ query }) // Send the query to the server
  });

  if (response.ok) {
    const videoUrl = await response.text(); // Retrieve the generated video URL from the server
    videoContainer.innerHTML = `<video controls autoplay><source src="${videoUrl}" type="video/mp4"></video>`;
  } else {
    console.log("Error generating video");
  }
}

submitButton.addEventListener("click", generateVideo);

clearButton.addEventListener("click", function() {
  inputElement.value = "";
  videoContainer.innerHTML = "";
});
