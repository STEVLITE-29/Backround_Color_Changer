let body = document.getElementById("body");
let hexColors = document.getElementById("hex-color");
hexColors;
const btn = document.getElementById("btn");
const randomColor = [
    "#7DF9FF",  
    "#DC143C",
    "#673AB7",
    "#39FF14",
    "#CC5500",
    "#191970",
    "#FF6F91",
    "#808000",
    "#36454F",
    "#DAA520",
    "#008080",
    "#E6E6FA"
] 

btn.onclick = getRandom;

function getRandom() {
    let currentColor = randomColor[Math.floor(Math.random() * randomColor.length)];
    body.style.backgroundColor = currentColor;
    hexColors.textContent = "Hex Color: " + currentColor;
}

