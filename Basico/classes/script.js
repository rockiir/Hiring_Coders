class Book{
    constructor(title, author, pages){
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
    read(){
        return`Estou lendo ${this.title}`
    }
}

let book = new Book ( 'algoritimos para viver', 'Brian', 500);
let otherBook = new Book('Um exu em nova york', 'cidinha da silva', 100)

console.log(book, otherBook.read())

class ITBook extends Book{
    constructor(title, author, pages,technology){
        super(title, author, pages, );
        this.technology = technology;

    }

}

let itBook = new ITBook ( 'algoritimos para viver 2', 'Brian', 500, 'Algoritmos');
console.log(itBook);

