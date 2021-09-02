document.querySelectorAll('.detail_box').forEach(element => {
    element.addEventListener('click', selectHistory);
});

function selectHistory(ev) {
    document.querySelector('#date').value = ev.currentTarget.parentNode.getAttribute('data-date');
    document.querySelector('#category').value = ev.currentTarget.childNodes[0].innerText;
    document.querySelector('#memo').value = ev.currentTarget.childNodes[1].innerText;
    document.querySelector('#payment').value = ev.currentTarget.childNodes[2].innerText;
    document.querySelector('#price').value = ev.currentTarget.childNodes[3].innerText.replace(/[^0-9]/g, '');
    document.querySelector('.category > .dropdown_box > .display').value = ev.currentTarget.childNodes[0].innerText;
    document.querySelector('.payment > .dropdown_box > .display').value = ev.currentTarget.childNodes[2].innerText;
    document.querySelector('#id').value = ev.currentTarget.id;
    
    const sign = document.querySelector('.input_box.price > div > input[type=hidden]');
    const span = document.querySelector('.input_box.price > div > span');
    const incomeCategory = document.querySelectorAll('.dropdown_item.income');
    const expenditureCategory = document.querySelectorAll('.dropdown_item.expenditure');

    if(ev.currentTarget.childNodes[3].innerText[0] !== '-') {
        span.innerText = '+'
        sign.value = 1;
        incomeCategory.forEach((element) => element.style.display = 'flex');
        expenditureCategory.forEach((element) => element.style.display = 'none');
    } else if(ev.currentTarget.childNodes[3].innerText[0] === '-') {
        span.innerText = '-'
        sign.value = -1;
        incomeCategory.forEach((element) => element.style.display = 'none');
        expenditureCategory.forEach((element) => element.style.display = 'flex');
    }

    document.querySelector('form').setAttribute('action', '/history?_method=PATCH');
    ev.stopPropagation();
}