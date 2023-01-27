const images = [
    "./images/avocado.jpeg",
    "./images/pancake.jpeg",
    "./images/sandwich.jpeg",
    "./images/spaghetti.jpeg"
]

const img = document.querySelector('img')
let currIndex = 0;

window.addEventListener("DOMContentLoaded", () => {
    img.src = images[currIndex]
})

const prevBtn = document.querySelector("#prev-button");
const nextBtn = document.querySelector("#next-button");

prevBtn.addEventListener('click', function(e) {
    currIndex--;

    if (currIndex < 0)
        currIndex = 3;

    img.src = images[currIndex];
})

nextBtn.addEventListener('click', function(e) {
    currIndex++;

    if (currIndex > 3)
        currIndex = 0;

    img.src = images[currIndex];
})
