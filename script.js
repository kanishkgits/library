const myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, read){
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

const container = document.querySelector(".main");
function display(){
    for(let i = 0; i < myLibrary.length; i++){
        const book = document.createElement("div");
        book.innerHTML(`
            <h2>${myLibrary[i].title}</h2>
            <h3>${myLibrary[i].author}</h3>
            <h3>No. of Pages: ${myLibrary[i].read}</h3>
            <h3>ID: ${myLibrary[i].id}</h3>
            `);
        container.appendChild(book);
    }
}