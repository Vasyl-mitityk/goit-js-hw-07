const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const menuingredients = document.querySelector('#ingredients');

console.log(menuingredients);

const ingredientsName = ingredients.map(ingredient => {
    const ingredientsList = document.createElement('li');
    ingredientsList.textContent = ingredient;

    return ingredientsList;
});
menuingredients.append(...ingredientsName);