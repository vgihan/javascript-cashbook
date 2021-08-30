document.querySelector('.add > .modal_content > form > .button_box > .cancel').addEventListener('click', () => cancelModal('add'));
document.querySelector('.delete > .modal_content > form > .button_box > .cancel').addEventListener('click', () => cancelModal('delete'));
document.querySelector('.delete > .modal_content > form > .button_box > .process').addEventListener('click', deletePayment);

function cancelModal(className) {
    document.querySelector(`.modal.${className}`).classList.toggle('hidden');
}
function deletePayment() {
    document.querySelector('.delete > .modal_content > form').setAttribute('action', 'http://localhost:3000/payment?_method=DELETE')
}