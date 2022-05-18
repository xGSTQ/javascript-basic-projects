const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

// Get random hex colour code
let generateRandomColor = () => {
    let hexColor = [];

    for (let i=0; i < 6; i++) {
        let random = hex[Math.floor(Math.random() * 16)];
        hexColor.push(random);
    }
    return '#' + hexColor.join('');
}

// Hex background colour update
btn.addEventListener('click', () => {
    const mainElement = document.getElementsByTagName('main')[0];
    const randomColor = generateRandomColor();
    mainElement.style.backgroundColor = randomColor;
    color.innerHTML = randomColor;
});