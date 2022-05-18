const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

// Get random number
let getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}

// Simple Background Colour Update
btn.addEventListener('click', () => {
    const mainElement = document.getElementsByTagName('main')[0];
    const randomNumber = getRandomInt(colors.length);
    mainElement.style.backgroundColor = colors[randomNumber];
    color.innerHTML = colors[randomNumber];
});