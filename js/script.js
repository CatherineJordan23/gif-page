console.log("script.js loaded");

let gifContainer = document.querySelector("#gif-container");
let button = document.querySelector("#fetch-gif-btn");
let input = document.querySelector("#search-input");

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
  gifContainer.innerHTML = "";

  let searchValue = input.value;

  let endpoint = `https://api.giphy.com/v1/gifs/search?api_key=Kevwt8hwkdN6d0kAJRdgpGWI5n369wIV&q=${searchValue}`;

  try {
    let response = await fetch(endpoint);
    let data = await response.json();

    images = data.data.map(gif => gif.images.original.url);

    images.forEach(function(url) {
      gifContainer.innerHTML += `
        <img src="${url}" class="col-3 mb-3">
      `;
    });

  } catch (error) {
    console.log("Error:", error);
  }
});