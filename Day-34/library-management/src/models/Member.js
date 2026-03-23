import {User} from "./User.js"


const borrowedMap = new WeakMap();


export class Member extends User{
    constructor(name, email){
        super(name, email)
        const borrowedFromStorage = JSON.parse(localStorage.getItem("borrowedBooks")) || [];
        borrowedMap.set(this, borrowedFromStorage)
        // here the "this" refers to the object instance which is A Member in this case
    }

    borrowBook(book){
       const borrowed = borrowedMap.get(this);// this will refers to that instance on which the borrowBook() method is called on.
       // therefore this will return all the borrowed books which is an empty array or array stored in localStorage.
       borrowed.push(book);
       book.isAvailable = false;
       localStorage.setItem("borrowedBooks", JSON.stringify(borrowed));
    }

    returnBook(bookId){}

    getBorrowedBooks(){
        return borrowedMap.get(this)
    }

    getRole(){
        return "Member"
    }
}