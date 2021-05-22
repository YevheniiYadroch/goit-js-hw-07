const input = document.querySelector('input');
const renderBtn = document.querySelector('button[data-action="render"]')
const destroyBtn = document.querySelector('button[data-action="destroy"]')
let boxes = document.querySelector('#boxes');

const createBoxes = (amount) => {
    const divDimension = 30;
    console.log(amount);
    for (const i = 0; i < amount; i += 1) {
        const div = document.createElement(div);
        div.style.heigth = `${divDimension}px`;
        div.style.width = `${divDimension}px`;
        div.style.backgroundColor = '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
        divDimension += 10;
        boxes.appendChild(div);
    };
};

const renderAction = () => {
    const amount = input.value;
    createBoxes;
};

renderBtn.addEventListener('click', renderAction);