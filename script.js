import { Book } from './modules/book.js';
import { Library } from './modules/library.js';

const iliad = new Book('The Iliad', 'Homer', '722');
const odyssey = new Book('The Odyssey', 'Homer', '961');
const nineteenEightyFour = new Book('1984', 'George Orwell', '342', true);

const library = new Library();
library.addBookToLibrary(iliad);
library.addBookToLibrary(odyssey);
library.addBookToLibrary(nineteenEightyFour);
listCatalogue(library);

function listCatalogue(library) {
    library.catalogue.forEach(book => {
        console.table(book);
    });
}
