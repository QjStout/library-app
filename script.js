import { Book } from './modules/book.js';
import { Library } from './modules/library.js';

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
}

function attachNewBookListener() {
    document.getElementById('new-book-btn')
        .addEventListener('click', newBookBtnHandler);
    function newBookBtnHandler() {
        setDisplay(document.getElementById('new-book-form'), 'block');
    }
}
