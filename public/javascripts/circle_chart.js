document.querySelectorAll('.category_list > .item').forEach(element => {
    element.addEventListener('click', openCategoryInfo);
});

function openCategoryInfo(ev) {
    const categoryIndex = {'문화/여가': '1','교통': '2','미분류': '3','식비': '4','생활': '5','월급': '6','쇼핑/뷰티': '7','의료/건강': '8'};
    const categoryName = {'문화/여가': 'culture_data','교통': 'traffic_data','미분류': 'undefinedCategory_data','식비': 'food_data','생활': 'life_data','쇼핑/뷰티': 'shopping_data','의료/건강': 'health_data'};
    const targetCategory = ev.currentTarget.firstChild.innerText;

    document.querySelector('.graph_box').classList.remove('hidden');
    document.querySelectorAll('.category_box').forEach(element => element.classList.add('hidden'));
    document.querySelector(`.category_box.category_${categoryIndex[targetCategory]}`).classList.remove('hidden');

    const dataElement = document.getElementById(categoryName[targetCategory]);
    initGraph();
    drawData(dataElement);
}