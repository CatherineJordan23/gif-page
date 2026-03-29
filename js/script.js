console.log("script.js loaded");

let endpoint = "https://api.giphy.com/v1/gifs/search?api_key=HnUhD6u2Wm6pZ6fDLZD4Hoj22DFCtSnX&q=gif&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips"

let images = [];

fetch(endpoint)
.then(function(response) {
    return response.json();
})

.then(function(data) {
    // data.data is an array of GIF objects
    images = data.data.map(function(gif) {
        return gif.images.original.url;
    });
    console.log(images);
})
.catch(function(error) {
    console.log("Error:", error);
});