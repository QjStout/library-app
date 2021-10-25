/**
 * 
 * @param {string} title 
 * @param {string} author 
 * @param {string} pages 
 * @param {boolean} read 
 */
function Book(title, author, pages, read = false) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? 'has been read' : 'not read yet'}.`;
};

Book.prototype.toggleRead = function() {
    this.read = this.read ? false : true;
};

export { Book };