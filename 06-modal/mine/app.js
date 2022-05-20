// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay


const openModalBtn = document.querySelector('button.modal-btn');
const modalOverlayEl = document.querySelector('.modal-overlay');
const closeModalBtn = document.querySelector('.close-btn');

let openModal = () => {
    modalOverlayEl.classList.add('open-modal');
}

let closeModal = () => {
    modalOverlayEl.classList.remove('open-modal');
}


openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
