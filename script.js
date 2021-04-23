const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');
const modalAddBook = document.querySelector('[data-modal-book]');
const cardContainer = document.getElementById('container');
let myLibrary = [];

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

function createCard(num){
    for(let i=0; i < num; i++){
        let newCard = document.createElement('div')
        newCard.className = 'card';
        newCard.id = `card${i}`;
        container.appendChild(newCard);
    }
    
}

//Event listener on modal submit
modalAddBook.addEventListener('submit',(event)=>{
    event.preventDefault();
    
    let title = document.getElementById('bookTitle').value
    let author = document.getElementById('bookAuthor').value
    let page = document.getElementById('page').value
    let readed = document.getElementById('bookRead').checked

    let newBook = new Book(title,author,page,readed);

    myLibrary.push(newBook);
    addBookToLibrary(newBook);
    

});


function Book(title,author,page,read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.page = page + ' pages';
  this.read = read;
}

function addBookToLibrary(newBook) {
    //Create conponnent of a card
    let cardBody = document.createElement('div');
    cardBody.className = 'card'

    let cardHead = document.createElement('div');
    cardHead.className = 'cardHead'

    let cardTail = document.createElement('div');
    cardTail.className = 'cardTail'

    //Create h2 from book obj and append to cardHead
    for(key in newBook){
        let newText = document.createElement('h2');
        newText.textContent = newBook[key];
        cardHead.appendChild(newText);
    }

    //Create two button and append to cardTail
    let editBtn = document.createElement('button');
    editBtn.className = 'readCheck';
    editBtn.textContent = 'Edit';

    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'deleteCard';
    deleteBtn.textContent = 'Delete';

    cardTail.appendChild(editBtn);
    cardTail.appendChild(deleteBtn);

    //Append card head and tail to card
    cardBody.appendChild(cardHead);
    cardBody.appendChild(cardTail);
    //Append the card to the container
    cardContainer.appendChild(cardBody);

}