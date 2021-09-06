function Library() {
    this.catalogue = [];
}

Library.prototype.addBookToLibrary = function (book) {
    this.catalogue.push(book);
}

Library.prototype.displayCatalogue = function () {
    const table = document.getElementById('book-table');

    this.catalogue.forEach(book => {
        const keys = Object.keys(book);
        const row = table.insertRow();
        keys.forEach(key => {
            const cell = row.insertCell();
            cell.innerText = book[key];
        });
    });
}

export { Library };