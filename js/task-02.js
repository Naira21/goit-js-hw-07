const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredientsRef = document.querySelector(`#ingredients`);

const markup = ingredients.map(ingredient => {
    const itemList = document.createElement('li');
    itemList.innerHTML = `<p>${ingredient}</p>`;
    console.log(itemList);
    return itemList;   
});

ingredientsRef.append(...markup);
