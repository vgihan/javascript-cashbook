document.getElementById('income').addEventListener('click', incomeCheckHandler);
document.getElementById('expenditure').addEventListener('click', expenditureCheckHandler);

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