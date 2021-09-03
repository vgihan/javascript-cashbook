document.body.addEventListener('click', bodyClickEvent);
document.querySelector('.input_box.category > .dropdown_box').addEventListener('click', (ev) => dropdownHandler(ev, 'category'));
document.querySelector('.input_box.payment > .dropdown_box').addEventListener('click', (ev) => dropdownHandler(ev, 'payment'));
document.querySelector('.dropdown_payment > .dropdown_item:last-child').addEventListener('click', toggleAddModal);
document.querySelector('.input_box.price > div > span').addEventListener('click', (ev) => changeCategory(ev));
document.querySelector('.info_box').addEventListener('click', (ev) => ev.stopPropagation());
document.querySelector('.input_bar').addEventListener('click', (ev) => ev.stopPropagation());
document.querySelectorAll('.modal_background').forEach(element => {
    element.addEventListener('click', closeModal);
});
document.querySelectorAll('.dropdown_payment > .dropdown_item > img').forEach(element => {
    element.addEventListener('click', toggleDeleteModal);
});
document.querySelectorAll('.dropdown_category > .dropdown_item > .content').forEach(element => {
    element.addEventListener('click', (ev) => dropdownClickHandler(ev, 'category'));
});
document.querySelectorAll('.dropdown_payment > .dropdown_item > .content:not(:last-child)').forEach(element => {
    element.addEventListener('click', (ev) => dropdownClickHandler(ev, 'payment'));
});

function bodyClickEvent(ev) {
    closeOptionLayout(ev);
    initInputBar(ev);
}
function initInputBar(ev) {
    const today = new Date();
    document.querySelector('#date').value = `${today.getFullYear()}-${(today.getMonth()+1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;
    document.querySelector('#category').value = '';
    document.querySelector('#memo').value = '';
    document.querySelector('#payment').value = '';
    document.querySelector('#price').value = '';
    document.querySelectorAll('.display').forEach(element => element.value = '선택하세요');
    document.querySelector('form').setAttribute('action', '/history');
    ev.stopPropagation();
}
function closeModal(ev) {
    document.querySelectorAll('.modal').forEach(element => {
        element.classList.add('hidden');
    });
}
function closeOptionLayout(ev) {
    document.querySelector('.dropdown_category').classList.add('hidden');
    document.querySelector('.dropdown_payment').classList.add('hidden');
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
    
    document.querySelector('.category > .dropdown_box > .display').value = '선택하세요';
    document.querySelector('.category > .dropdown_box > .target').value = '';

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
    const target = document.querySelector(`.input_box.${name} > .dropdown_box > .target`);
    const display = document.querySelector(`.input_box.${name} > .dropdown_box > .display`);
    const selectedValue = ev.currentTarget.innerText;
    display.value = selectedValue;
    target.value = selectedValue;
    target.style.color = 'black';
    document.querySelector('.dropdown_payment').classList.add('hidden');
    document.querySelector('.dropdown_category').classList.add('hidden');
    ev.stopPropagation();
}