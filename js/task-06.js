const input = document.querySelector('#validation-input');

const validator = () => {
    const inputValueLength = input.value.length;
    if (inputValueLength > input.dataset.length) {
        input.classList.add('invalid');
        input.classList.remove('valid');
    } else {
        input.classList.add('valid');
        input.classList.remove('invalid');
    }
};

input.addEventListener('blur', validator)