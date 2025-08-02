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

        const name = document.createElement("h2");
        name.textContent = `${myLibrary[i].title}`;

        const author = document.createElement("h3");
        author.textContent = `- by ${myLibrary[i].author}`;

        const pages = document.createElement("h3");
        pages.textContent = `No. of pages: ${myLibrary[i].pages}`;

        const read = document.createElement("h3");
        read.textContent = `Read: ${myLibrary[i].read}`;

        const btn = document.createElement("button");
        btn.textContent = "Remove";

        book.appendChild(name);
        book.appendChild(author);
        book.appendChild(pages);
        book.appendChild(read);
        book.appendChild(btn);
        
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
