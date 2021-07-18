const categoriesListRef = document.querySelector("#categories");
    const list = categoriesListRef.children.length;
    console.log (`В списке ${list} категории.`);
[...categoriesListRef.children].forEach(item => {
    console.log(`Категория: ${item.children[0].textContent}`);
    console.log(`Количество элементов: ${item.children[1].children.length}`);
});