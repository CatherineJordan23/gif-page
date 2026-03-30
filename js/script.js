console.log("script.js loaded");

let endpoint = "https://api.giphy.com/v1/gifs/search?api_key=Kevwt8hwkdN6d0kAJRdgpGWI5n369wIV&q=funny&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips"
let gifContainer = document.querySelector("#gif-container");
let button = document.querySelector("#fetch-gif-btn");
let images = [];

async function fetchGifs() {
  try {
    let response = await fetch(endpoint);
    let data = await response.json();

    images = data.data.map(gif => gif.images.original.url);

    console.log(images);
  } catch (error) {
    console.log("Error:", error);
  }
}

button.addEventListener("click", async function () {
  gifContainer.innerHTML = ""; // clears old gifs

  await fetchGifs();

  images.forEach(function(url) {
    gifContainer.innerHTML += `
      <img src="${url}" class="col-3 mb-3">
    `;
  });
});