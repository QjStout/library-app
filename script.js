import { Book } from './modules/book.js';
import { Library } from './modules/library.js';

const MODAL = document.getElementById('newBookModal');
const FORM_ADD_BOOK = document.getElementById('add-book-form');

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
    FORM_ADD_BOOK.onsubmit = submitNewBook;
}

function submitNewBook(e) {
    e.preventDefault();
    const newBook = new Book(...getFormInput());
    library.addBookToLibrary(newBook);
    library.displayClear();
    library.displayCatalogue();
    closeModal();
}

function getFormInput() {
    const title = document.getElementById('form-title').value;
    const author = document.getElementById('form-author').value;
    const pages = document.getElementById('form-pages').value;
    const read = document.getElementById('form-read').value;
    return [title, author, pages, read];
}

function attachNewBookListener() {
    document.getElementById('new-book-btn')
        .addEventListener('click', newBookBtnHandler);
    function newBookBtnHandler() {
        setDisplay(MODAL, 'flex');
        MODAL.addEventListener('mousedown', modalClickOffHandler);
        FORM_ADD_BOOK.reset();
    }
}

function modalClickOffHandler(e) {
    if (e.target == MODAL) {
        closeModal();
    }
}

function closeModal() {
    MODAL.removeEventListener('mousedown', modalClickOffHandler);
    setDisplay(MODAL);
}