document.querySelector('.add > .modal_content > form > .button_box > .cancel').addEventListener('click', () => cancelModal('add'));
document.querySelector('.delete > .modal_content > form > .button_box > .cancel').addEventListener('click', () => cancelModal('delete'));

function cancelModal(className) {
    document.querySelector(`.modal.${className}`).classList.toggle('hidden');
}