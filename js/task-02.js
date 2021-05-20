const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const list = document.querySelector('#ingredients')

ingredients.forEach(element => {
    const li = document.createElement('li');
    li.textContent = element;
    list.insertAdjacentElement("beforeend", li);
});