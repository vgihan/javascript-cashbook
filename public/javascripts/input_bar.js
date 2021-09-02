document.body.addEventListener('click', closeOptionLayout);
document.querySelector('.input_box.category > .dropdown_box').addEventListener('click', (ev) => dropdownHandler(ev, 'category'));
document.querySelector('.input_box.payment > .dropdown_box').addEventListener('click', (ev) => dropdownHandler(ev, 'payment'));
document.querySelector('.dropdown_payment > .dropdown_item:last-child').addEventListener('click', toggleAddModal);
document.querySelector('.input_box.price > div > span').addEventListener('click', (ev) => changeCategory(ev));
document.querySelector('.modal_background').addEventListener('click', closeModal);
document.querySelectorAll('.dropdown_payment > .dropdown_item > img').forEach(element => {
    element.addEventListener('click', toggleDeleteModal);
});
document.querySelectorAll('.dropdown_category > .dropdown_item > .content').forEach(element => {
    element.addEventListener('click', (ev) => dropdownClickHandler(ev, 'category'));
});
document.querySelectorAll('.dropdown_payment > .dropdown_item > .content:not(:last-child)').forEach(element => {
    element.addEventListener('click', (ev) => dropdownClickHandler(ev, 'payment'));
});

function closeModal(ev) {
    document.querySelector('.modal').classList.add('hidden');
    ev.stopPropagation();
}
function closeOptionLayout(ev) {
    document.querySelector('.dropdown_category').classList.add('hidden');
    document.querySelector('.dropdown_payment').classList.add('hidden');
    ev.stopPropagation();
}
function dropdownHandler(ev, name) {
    document.querySelector(`.dropdown_${name}`).classList.toggle('hidden');
    ev.stopPropagation();
}
function toggleAddModal(ev) {
    document.querySelector(`.add`).classList.toggle('hidden');
    ev.stopPropagation();
}
function toggleDeleteModal(ev) {
    document.querySelector('#deletePayment').value = ev.currentTarget.parentNode.firstChild.innerText;
    document.querySelector('#targetId').value = ev.currentTarget.parentNode.id;
    document.querySelector(`.delete`).classList.toggle('hidden');
    ev.stopPropagation();
}
function changeCategory(ev) {
    const sign = document.querySelector('.input_box.price > div > input[type=hidden]');
    const span = document.querySelector('.input_box.price > div > span');
    const incomeCategory = document.querySelectorAll('.dropdown_item.income');
    const expenditureCategory = document.querySelectorAll('.dropdown_item.expenditure');
    
    document.querySelector('.category > .dropdown_box > .target').value = '선택하세요';;

    if(parseInt(sign.value) === -1) {
        span.innerText = '+'
    } else if(parseInt(sign.value) === 1) {
        span.innerText = '-'
    }
    sign.value *= -1;
    incomeCategory.forEach((element) => element.classList.toggle('hidden'));
    expenditureCategory.forEach((element) => element.classList.toggle('hidden'));
    ev.stopPropagation();
}
function dropdownClickHandler(ev, name) {
    const target = document.querySelector(`.input_box.${name} > .dropdown_box > .display`);
    const display = document.querySelector(`.input_box.${name} > .dropdown_box > .target`);
    const selectedValue = ev.target.innerText;
    display.value = selectedValue;
    target.value = selectedValue;
    target.style.color = 'black';
}