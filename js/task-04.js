var stringValue = document.querySelector('#value').textContent;
var counterValue = Number(stringValue);

const increment = () => {
    counterValue += 1;
    document.querySelector('#value').textContent = counterValue;
};
const decrement = () => {
    counterValue -= 1;
    document.querySelector('#value').textContent = counterValue;
};

const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);




