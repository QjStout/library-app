function Library() {
    this.catalogue = [];
}

Library.prototype.addBookToLibrary = function (book) {
    this.catalogue.push(book);
}

Library.prototype.remBookFromLibrary = function (title) {
    const index = this.catalogue.findIndex(book => book.title === title);
    this.catalogue.splice(index, 1);
}

Library.prototype.displayUpdate = function () {
    this.displayClear();
    this.displayCatalogue();
}

Library.prototype.displayClear = function () {
    const table = Array.from(document.getElementsByClassName('table-row'));
    table.forEach(row => { row.remove() });
}

Library.prototype.displayCatalogue = function () {
    const table = document.getElementById('book-table');

    this.catalogue.forEach(book => {
        const keys = Object.keys(book);
        const row = table.insertRow();
        row.classList.add('table-row');
        row.setAttribute('data-book', book.title);
        
        keys.forEach(key => {
            const cell = row.insertCell();
            cell.classList.add(`td-${key}`);
            cell.innerText = book[key];
        });

        const cell = row.insertCell();
        cell.innerHTML = `<button class="btn-delete" data-book="${book.title}">Delete</button>`;
    });
}

export { Library };