
function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}

let myLibrary = [];
function addBookToLibrary(book){
        myLibrary.push(book)
}
const arrow = new Book('Arrow of God', 'Chinua Achebe', 287, 'yes');
const elder = new Book('Elder Race', 'Adrian Tchaikovsky', 176, 'no');
const ai2041 = new Book('AI 2041', 'Chen Qiufan & Kai-Fu Lee', 480, 'no');
const love = new Book('The Pursuit of Love', 'Nancy Mitford', 192, 'no');
const khazars = new Book('Dictionary of the Khazars', 'Milorad Pavić', 352, 'currently_reading');

let books = [khazars, arrow, elder, ai2041,love]
for (book of books) {
    addBookToLibrary(book)
}
let cards = document.querySelector('#cards')

//CREATE CARDS TO DISPLAY EACH BOOK
function displayBooks(){ 
    //delete any previous cards - this function creates the cards again each time you modify the library
    while (cards.firstChild){
        cards.removeChild(cards.firstChild);
    }

    for (let [index,book] of myLibrary.entries()) {
        let card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('id',index)
        //adding author + title to each card
        let div2 = document.createElement('div')
        div2.classList.add('bottom')
        for (let prop in book) {
            if (prop === 'pages') {
                continue
                }
            let line = document.createElement('div');
            if (prop === 'read') {
                card.classList.add('no')
                if (book[prop] === 'yes' || book[prop] === 'currently_reading'){
                    card.classList.replace('no',book[prop])
                }
            }
            else {
                line.classList.add(prop);
                line.textContent = book[prop]
                div2.appendChild(line)
                card.appendChild(div2)
            }
        }
        //adding a button to each card
        let exitButton = document.createElement('button');
        exitButton.classList.add('exitButton')
        exitButton.textContent = 'x'
        let div1 = document.createElement('div')
        div1.appendChild(exitButton)
        div1.classList.add('top')
        card.appendChild(div1)
        cards.appendChild(card)
    }
    let deleteButtons = document.querySelectorAll('.exitButton');
    deleteButtons.forEach(btn => btn.addEventListener('click',deleteBook));
    let bookCards = document.querySelectorAll('.card')
    bookCards.forEach(card => card.addEventListener('click',changeReadStatus))
}
displayBooks(myLibrary);

//ADDING BOOKS TO LIBRARY
let newBookButton = document.querySelector('.newBook');
newBookButton.addEventListener('click',newBookForm);
let addNew = document.querySelector('.bookForm');
let elements = ['title','author','pages','read']
let form = document.createElement('form');
let newBookColumn = document.querySelector('.new')

////creates the form to input a new book
function newBookForm (){ 
    form.setAttribute("method", "post");
    form.setAttribute("action", "submit.php");
    //each element is an input in the form
    for (element of elements){
        let div = document.createElement('div')
        div.setAttribute('class','formLine')
        let label = document.createElement('label');
        let input = document.createElement('input');
        input.setAttribute('type','text');
        input.setAttribute('class','input');
        input.setAttribute('id',element)
        label.textContent = element;
        div.appendChild(label);
        div.appendChild(input);
        form.appendChild(div);
    }
    addNew.appendChild(form)

    //Create a submit button with each new form
    let submit = document.createElement('button')
    submit.textContent = 'Add book'
    submit.setAttribute('class','submitButton')
    newBookColumn.appendChild(submit)
    submit.addEventListener('click',addNewBook)
}
//SUBMITTING THE RESULTS OF THE FROM
function addNewBook(){
    // clicking submit adds a new card for each new book, then clears the form
    let newBookArray = []
    for (element of elements) {
        newBookArray.push(document.getElementById(element).value)
    }
    let newBook = new Book(...newBookArray);
    addBookToLibrary(newBook)
    displayBooks(myLibrary)

    //clear form + its content
    while (addNew.firstChild){
        addNew.removeChild(addNew.firstChild);
    }
    while (form.firstChild){
        form.removeChild(form.firstChild);
    }
    let submitButton = document.querySelector('.submitButton')
    newBookColumn.removeChild(submitButton)
}

//DELETING BOOKS FROM LIBRARY
let deleteButtons = document.querySelectorAll('.exitButton');
deleteButtons.forEach(btn => btn.addEventListener('click',deleteBook));

function deleteBook(){
    let idToDelete = this.parentElement.parentElement.id;
    myLibrary.splice(idToDelete,1)
    displayBooks(myLibrary);
 }
 

//CHANGING READ STATUS

function changeReadStatus(){ //toggles between the three statuses (no, yes, currently reading)
    if (this.classList.contains('no')){
        this.classList.replace('no','currently_reading')
    }
    else if(this.classList.contains('currently_reading')){
        this.classList.replace('currently_reading','yes')
    }
    else this.classList.replace('yes','no')
}
