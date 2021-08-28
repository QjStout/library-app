import { Book } from './modules/book.js';
import { Library } from './modules/library.js';

const iliad = new Book('The Iliad', 'Homer', '722');
const library = new Library();

library.addBookToLibrary(iliad);
listCatalogue(library);

function listCatalogue(library) {
    library.catalogue.forEach(book => {
        console.table(book);
    });
}
