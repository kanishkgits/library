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
    container.replaceChildren();
    for(let i = 0; i < myLibrary.length; i++){
        const book = document.createElement("div");
        book.innerHTML = `
            <h2>${myLibrary[i].title}</h2>
            <h3>${myLibrary[i].author}</h3>
            <h3>No. of Pages: ${myLibrary[i].pages}</h3>
            <h3>Read: ${myLibrary[i].read}</h3>
            <h3>ID: ${myLibrary[i].id}</h3>
            <button>Remove</button>
            `;
        container.appendChild(book);
    }
}

const addBook = document.querySelector("#addBook");
const cancelButton = document.getElementById("cancel");
const dialog = document.getElementById("book-details");
const submit = document.querySelector("#submit");

addBook.addEventListener("click", () => {
    console.log("click");
    dialog.showModal();
})

cancelButton.addEventListener("click", () => {
    dialog.close();
})

submit.addEventListener("click", (e) => {
    e.preventDefault();
    dialog.close();
    const myForm = document.querySelector(".myForm");
    const name = myForm.elements[0].value;
    const author = myForm.elements[1].value;
    const pages = myForm.elements[2].value;
    const read = myForm.elements[3].value;
    addBookToLibrary(name, author, pages, read);
    display();
    myForm.reset();
})
