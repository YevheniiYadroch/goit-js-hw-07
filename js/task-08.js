const input = document.querySelector('input');
const renderBtn = document.querySelector('button[data-action="render"]')
const destroyBtn = document.querySelector('button[data-action="destroy"]')
let boxes = document.querySelector('#boxes');

const createBoxes = (amount) => {
    let divDimension = 30;
    for (let i = 0; i < amount; i += 1) {
        const divEl = document.createElement('div');
        divEl.style.height = `${divDimension}px`;
        divEl.style.width = `${divDimension}px`;
        divEl.style.backgroundColor = '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
        divEl.classList.add("div");
        divDimension += 10;
        boxes.appendChild(divEl);
    };
};

const renderAction = () => {
    const amount = input.value;
    return createBoxes(amount);
};

const destroyAction = () => {
    const allDivEls = document.querySelectorAll('.div');
    allDivEls.forEach(value => value.remove())
};


renderBtn.addEventListener('click', renderAction);
destroyBtn.addEventListener('click', destroyAction);


