class Book{
    constructor(number,name,author,type,copies){
        this.number=number;
        this.name=name;
        this.author=author;
        this.type=type;
        this.copies=copies;
    }
}
class Display{
    add(book){
        let tableBody = document.getElementById('tableBody');
        let string =`
                <tr>
                    <td>${book.number}</td>
                    <td>${book.name}</td>
                    <td>${book.author}</td>
                    <td>${book.type}</td>
                    <td>${book.copies}</td>
                </tr>`
            tableBody.innerHTML +=string;
    }
    clear(){
        let libraryform = document.getElementById('libraryform');
        libraryform.reset();
    }
    validate(book){
        if(book.name.length < 2 || book.author.length < 2){
            return false;
        }
        else{
            return true;
        }
    }
    show(type,displayMessage){
        let message = document.getElementById('message');
        let boldText;
        if(type==='success'){
            boldText = 'Success';
        }
        else{
            boldText='Error!';
        }
        message.innerHTML= `
            <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                <strong class="pr-4">${boldText}</strong>${displayMessage}
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">x<span>
                </button>
            </div>`;
        setTimeout(()=>{
            message.innerHTML='';
        },5000);
    }
}
let libraryForm = document.getElementById('libraryform');
libraryForm.addEventListener('submit',libraryFormSumbit);

function libraryFormSumbit(e){
    let name = document.getElementById('bookname').value;
    let author = document.getElementById('author').value;
    let copies = document.getElementById('copies').value;
    let number = document.getElementById('number').value;
    let type = document.getElementById('types').value;
    let book = new Book(number,name,author,type,copies);
    let display = new Display();
    if(display.validate(book)){
        display.add(book);
        display.clear();
        display.show('success','Your Book has been Sucessfully added');
    }
    else{
        display.show('danger','Sorry you cannot add this book');
    }
    e.preventDefault();
}
