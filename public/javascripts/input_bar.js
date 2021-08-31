document.querySelector('.input_box.category > .dropdown_box').addEventListener('click', () => dropdownHandler('category'));
document.querySelector('.input_box.payment > .dropdown_box').addEventListener('click', () => dropdownHandler('payment'));
document.querySelector('.dropdown_payment > .dropdown_item:last-child').addEventListener('click', toggleAddModal);
document.querySelector('.input_box.price > div > span').addEventListener('click', (ev) => changeCategory(ev));
document.querySelectorAll('.dropdown_payment > .dropdown_item > img').forEach(element => {
    element.addEventListener('click', toggleDeleteModal);
});
document.querySelectorAll('.dropdown_category > .dropdown_item > .content').forEach(element => {
    element.addEventListener('click', (ev) => dropdownClickHandler(ev, 'category'));
});
document.querySelectorAll('.dropdown_payment > .dropdown_item > .content:not(:last-child)').forEach(element => {
    element.addEventListener('click', (ev) => dropdownClickHandler(ev, 'payment'));
});

function dropdownHandler(name) {
    document.querySelector(`.dropdown_${name}`).classList.toggle('hidden');
}
function toggleAddModal() {
    document.querySelector(`.add`).classList.toggle('hidden');
}
function toggleDeleteModal(ev) {
    document.querySelector('#deletePayment').value = ev.currentTarget.parentNode.firstChild.innerText;
    document.querySelector('#targetId').value = ev.currentTarget.parentNode.id;
    document.querySelector(`.delete`).classList.toggle('hidden');
}
function changeCategory(ev) {
    const sign = document.querySelector('.input_box.price > div > input[type=hidden]');
    const span = document.querySelector('.input_box.price > div > span');
    const incomeCategory = document.querySelectorAll('.dropdown_item.income');
    const expenditureCategory = document.querySelectorAll('.dropdown_item.expenditure');
    
    document.querySelector('.input_box.category > #category').innerText = '미분류';
    document.querySelector('.category > .dropdown_box > .target').innerText = '선택하세요';;

    if(parseInt(sign.value) === -1) {
        span.innerText = '+'
        sign.value = 1;
        incomeCategory.forEach((element) => element.style.display = 'flex');
        expenditureCategory.forEach((element) => element.style.display = 'none');
    } else if(parseInt(sign.value) === 1) {
        span.innerText = '-'
        sign.value = -1;
        incomeCategory.forEach((element) => element.style.display = 'none');
        expenditureCategory.forEach((element) => element.style.display = 'flex');
    }
}
function dropdownClickHandler(ev, name) {
    const target = document.querySelector(`.input_box.${name} > .dropdown_box > .target`);
    const selectedValue = ev.target.innerText;
    target.innerText = selectedValue;
    target.style.color = 'black';
    document.querySelector(`.input_box.${name} > #${name}`).value = selectedValue;
}