const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const list = document.querySelector('#ingredients');
let newElements = [];

ingredients.forEach(value => {
  const li = document.createElement('li');
  li.textContent = value;
  newElements.push(li);
});

list.append(...newElements);