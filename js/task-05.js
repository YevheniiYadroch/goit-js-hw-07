var input = document.querySelector('#name-input');
var output = document.querySelector('#name-output');

const settingOutput = () => {
    
    if (input.value === '' || input.value.trim() === '') {
        output.textContent = 'незнакомец';
    } else {
        output.textContent = input.value;
    }
};

input.addEventListener('input', settingOutput);