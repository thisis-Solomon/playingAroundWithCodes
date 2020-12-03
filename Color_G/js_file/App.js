const colors = ['red', 'green', 'rgba(133,122,200)', '#f15025', '#cecece'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
    const randomNun = getRandNum();
    document.body.style.backgroundColor = colors[randomNun];
    color.textContent = colors[randomNun];
});

function getRandNum() {
    return Math.floor(Math.random() * colors.length);
}
