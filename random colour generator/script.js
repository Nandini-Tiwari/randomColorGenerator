let btn = document.querySelector('button');
let box = document.getElementById('box');
const colorValue = document.getElementById('colorValue');
btn.addEventListener('click', (e) => {
    const getRandomColor = () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r},${g},${b})`;


    }

    const randomColor = getRandomColor();
    box.style.backgroundColor = randomColor;
    colorValue.textContent = `Generated Color: ${randomColor}`;
    console.log(getRandomColor());

});