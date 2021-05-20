const categories = document.querySelectorAll('.item');

console.log(`В списке ${categories.length} категории.`);

categories.forEach(el => {
    const categoryName = el.firstElementChild.textContent;
    const numberOfItems = el.lastElementChild.childElementCount;
    console.log(`Категория: ${categoryName};`);
    console.log(`Количество элемнетов: ${numberOfItems};`);
});

