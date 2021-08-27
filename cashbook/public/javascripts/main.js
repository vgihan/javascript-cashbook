document.getElementById('income').addEventListener('click', incomeCheckHandler);
document.getElementById('expenditure').addEventListener('click', expenditureCheckHandler);
document.querySelector('.input_box.category > .dropdown_box').addEventListener('click', () => dropdownHandler('category'));
document.querySelector('.input_box.payment > .dropdown_box').addEventListener('click', () => dropdownHandler('payment'));
document.querySelector('.dropdown_payment > .dropdown_item:last-child').addEventListener('click', addPaymentBtnClickHandler);
document.querySelector('.input_box.price > div > span').addEventListener('click', (ev) => signClickHandler(ev));
document.querySelectorAll('.dropdown_category > .dropdown_item > .content').forEach(element => {
    element.addEventListener('click', (ev) => dropdownClickHandler(ev, 'category'));
});
document.querySelectorAll('.dropdown_payment > .dropdown_item > .content:not(:last-child)').forEach(element => {
    element.addEventListener('click', (ev) => dropdownClickHandler(ev, 'payment'));
});

function signClickHandler(ev) {
    const sign = document.querySelector('.input_box.price > div > input[type=hidden]');
    const span = document.querySelector('.input_box.price > div > span');
    const incomeCategory = document.querySelectorAll('.dropdown_item.income');
    const expenditureCategory = document.querySelectorAll('.dropdown_item.expenditure');
    
    document.querySelector('.input_box.category > #category').innerText = '미분류';;
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
function addPaymentBtnClickHandler(ev) {
    const newPayment = window.prompt('추가하실 결제수단을 입력해주세요.');
}
function dropdownClickHandler(ev, name) {
    const target = document.querySelector(`.input_box.${name} > .dropdown_box > .target`);
    const selectedValue = ev.target.innerText;
    target.innerText = selectedValue;
    target.style.color = 'black';
    console.log(selectedValue)
    document.querySelector(`.input_box.${name} > #${name}`).value = selectedValue;
}
function dropdownHandler(name) {
    const dropdown = document.querySelector(`.dropdown_${name}`);
    if(dropdown.style.display === 'none')
    dropdown.style.display = 'block';
    else dropdown.style.display = 'none';
}
function incomeCheckHandler() {
    const incomeCheckbox = document.getElementById('income');
    if(incomeCheckbox.checked) onIncome();
    else offIncome();
}
function expenditureCheckHandler() {
    const incomeCheckbox = document.getElementById('expenditure');
    if(incomeCheckbox.checked) onExpenditure();
    else offExpenditure();
}
function onIncome() {
    Array.from(document.getElementsByClassName('day_box')).forEach((element) => {
        const isOnBox = Array.from(element.lastChild.childNodes).reduce((pre, history) => {
            if(history.lastChild.textContent[0] !== '-') {
                history.setAttribute('style', 'display:flex;');
                pre = true;
            }
            return pre;
        }, false);
        if(isOnBox) element.setAttribute('style', 'display:flex;');
    });
}
function offIncome() {
    Array.from(document.getElementsByClassName('day_box')).forEach((element) => {
        const isOffBox = Array.from(element.lastChild.childNodes).reduce((pre, history) => {
            if(history.lastChild.textContent[0] !== '-') {
                history.setAttribute('style', 'display:none;');
            } else if(history.style.display !== 'none') {
                pre = true;
            }
            return pre;
        }, false);
        if(!isOffBox) element.setAttribute('style', 'display:none;');
    });
}
function onExpenditure() {
    Array.from(document.getElementsByClassName('day_box')).forEach((element) => {
        const isOnBox = Array.from(element.lastChild.childNodes).reduce((pre, history) => {
            if(history.lastChild.textContent[0] === '-') {
                history.setAttribute('style', 'display:flex;');
                pre = true;
            }
            return pre;
        }, false);
        if(isOnBox) element.setAttribute('style', 'display:flex;');
    });
}
function offExpenditure() {
    Array.from(document.getElementsByClassName('day_box')).forEach((element) => {
        const isOffBox = Array.from(element.lastChild.childNodes).reduce((pre, history) => {
            if(history.lastChild.textContent[0] === '-') {
                history.setAttribute('style', 'display:none;');
            } else if(history.style.display !== 'none') {
                pre = true;
            }
            return pre;
        }, false);
        if(!isOffBox) element.setAttribute('style', 'display:none;');
    });
}