const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bImg = document.createElement("img");

bImg.src = `img/${chosenImage}`;

document.body.appendChild(bImg);
console.log(bImg);