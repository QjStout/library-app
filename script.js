import { Book } from './modules/book.js';
import { Library } from './modules/library.js';

const MODAL = document.getElementById('newBookModal');

attachEventListeners();

const iliad = new Book('The Iliad', 'Homer', '722');
const odyssey = new Book('The Odyssey', 'Homer', '961');
const nineteenEightyFour = new Book('1984', 'George Orwell', '342', true);

const library = new Library();
library.addBookToLibrary(iliad);
library.addBookToLibrary(odyssey);
library.addBookToLibrary(nineteenEightyFour);
library.displayCatalogue();

function setDisplay(element, value = 'none') {
    element.style.display = value;
}

function attachEventListeners() {
    attachNewBookListener();
    // attachSubmitListener();
}

// function attachSubmitListener() {
//     document.getElementById('submit-btn')
//         .addEventListener('click', sub);
// }

function attachNewBookListener() {
    document.getElementById('new-book-btn')
        .addEventListener('click', newBookBtnHandler);
    function newBookBtnHandler() {
        setDisplay(MODAL, 'flex');
        MODAL.addEventListener('mousedown', modalClickOffHandler);
    }
    function modalClickOffHandler(e) {
        if (e.target == MODAL) {
            MODAL.removeEventListener('mousedown', modalClickOffHandler);
            setDisplay(MODAL);
        }
    }
}
