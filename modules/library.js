function Library() {
    this.catalogue = [];
}

Library.prototype.addBookToLibrary = function (book) {
    this.catalogue.push(book);
} 

export { Library };