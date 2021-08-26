document.getElementById('income').addEventListener('click', incomeCheckHandler);
document.getElementById('expenditure').addEventListener('click', expenditureCheckHandler);
document.querySelector('.input_box.category > .dropdown_box').addEventListener('click', categoryDropdownHandler);
document.querySelectorAll('.dropdown_category > .dropdown_item').forEach(element => {
    element.addEventListener('click', categoryClickHandler);
});

function categoryClickHandler(ev) {
    const target = document.querySelector('.dropdown_box > .target');
    const selectedValue = ev.target.innerText;
    target.innerText = selectedValue;
    target.style.color = 'black';
    document.querySelector('.input_box.category > #category').value = selectedValue;
}
function categoryDropdownHandler() {
    const categoryDropdown = document.querySelector('.dropdown_category');
    if(categoryDropdown.style.display === 'none')
        categoryDropdown.style.display = 'block';
    else categoryDropdown.style.display = 'none';
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