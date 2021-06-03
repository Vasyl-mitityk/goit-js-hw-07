const totalItemCategories = document.querySelectorAll('.item');

console.log(`В списке ${totalItemCategories.length} категорий`);

totalItemCategories.forEach(element =>
    console.log(
        `Категория:${element.firstElementChild.textContent}, Количество элементов: ${element.lastElementChild.children.length}`,
    ),
);
