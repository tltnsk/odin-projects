let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleRead = function() {
    this.read = !this.read;
}

myLibrary.push(
    new Book("Crime and Punishment", "Fyodor Dostoyevsky", 624, true),
    new Book("Пиреј", "Петре М. Андреевски", 252, true)
);

function toggleRead(index) {
    myLibrary[index].toggleRead();
    render();
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    render();
}

function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").checked;

    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    render();
}

function render() {
    let libraryEl = document.querySelector(".library");
    libraryEl.innerHTML = "";

    myLibrary.forEach((book, i) => {
        let bookEl = document.createElement("div");
        bookEl.setAttribute("class", "book-card");
        bookEl.innerHTML = `
            <div class="card-header">
                <div class="remove-btn-div">
                    <button class="remove-btn" onclick="removeBook(${i})">&times;</button>
                </div>
                <div class="data">
                    <h3 class="title" title="${book.title}">${book.title}</h3>
                    <h5 class="author">by ${book.author}</h5>
                </div>
            </div>
            <div class="card-body">
                <p>${book.pages} pages</p>
                <p class="read-status">${book.read ? "Read" : "Not Read Yet"}</p>
                <button class="toggle-read-btn" onclick="toggleRead(${i})">Toggle Read</button>
            </div>
        `;
        libraryEl.appendChild(bookEl);
    });
}

let newBookbtn = document.querySelector("#new-book-btn");
newBookbtn.addEventListener("click", function() {
    let newBookForm = document.querySelector("#new-book-form");
    newBookForm.style.display = "block";
});

document.querySelector("#new-book-form").addEventListener("submit", function(event) {
    event.preventDefault();
    addBookToLibrary();
    this.reset();
    this.style.display = "none";
});

let closeFormBtn = document.querySelector("#close-form-button");
closeFormBtn.addEventListener("click", function() {
    let newBookForm = document.querySelector("#new-book-form");
    newBookForm.style.display = "none";
});

render();