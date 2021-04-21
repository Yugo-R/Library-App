const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openModalButtons.forEach(button =>{
    button.addEventListener('click', () =>{
        let modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal);
    })
})

closeModalButtons.forEach(button =>{
    button.addEventListener('click', () =>{
        let modal = document.querySelector(button.dataset.closeButton)
        closeModal(modal);
    })
})

overlay.addEventListener('click', () => {
    let modal = document.querySelector('.modalBook')
    let modaltwo = document.querySelector('.modalFolder')
    if(modal.classList.contains('active')){
        closeModal(modal);
    }
    else{
        closeModal(modaltwo);
    }
})

function openModal(modal){
    if(modal == null) return;
    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal(modal){
    if(modal == null) return;
    modal.classList.remove('active');
    overlay.classList.remove('active');
}