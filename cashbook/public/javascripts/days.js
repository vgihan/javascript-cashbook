document.querySelectorAll('.detail_box').forEach(element => {
    element.addEventListener('click', selectHistory);
});

function selectHistory(ev) {
    document.querySelector('#date').value = ev.currentTarget.parentNode.getAttribute('data-date');
    document.querySelector('#category').value = ev.currentTarget.childNodes[0].innerText;
    document.querySelector('#memo').value = ev.currentTarget.childNodes[1].innerText;
    document.querySelector('#payment').value = ev.currentTarget.childNodes[2].innerText;
    document.querySelector('#price').value = ev.currentTarget.childNodes[3].innerText;
    document.querySelector('.category > .dropdown_box > .target').innerText = ev.currentTarget.childNodes[0].innerText;
    document.querySelector('.payment > .dropdown_box > .target').innerText = ev.currentTarget.childNodes[2].innerText;
    document.querySelector('#id').value = ev.currentTarget.id;
}