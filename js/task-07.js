const input = document.querySelector('input');

const controller = () => {
    const text = document.querySelector('span');
    const inputValue = Number(input.value);
    text.style.fontSize = `${inputValue}px`;
};

input.addEventListener('input', controller);