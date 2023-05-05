class PrintEditionItem {
    constructor (name, releaseDate, pagesCount){
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = null;
    }
    // задание 2 подклеил. Главное помнить что надо присваивать а не просто ровно
    fix () {
    this.state *= 1.5; 
    }
    // задание 3 новое состояние печатного издания. новое как в примере из видео
    set state (number) {
    if (number < 0) {
      this._state = 0;
    }
    if (number >100) {
        this._state = 100;
    } else {
    this._state = number;
    }
  }
    // задание 4 создаем гетер. 
    get state (){
    return this._state;
  }  
}
  class Magazine extends PrintEditionItem {
    constructor (name, releaseDate, pagesCount){
      super(name, releaseDate, pagesCount);
      this.type = "magazine";
  }
  }
   // создаем клас книги из которого будем потом создавать типы книг. Добавляем автора
  class Book extends PrintEditionItem {
    constructor (author, name, releaseDate, pagesCount){
      super(name, releaseDate, pagesCount);
      this.type = "book";
      this.author = author;
  }
  }
   // Создаем типы кникг. 
  class NovelBook extends Book {
    constructor (author, name, releaseDate, pagesCount){
      super(author, name, releaseDate, pagesCount);
      this.type = "novel";  
  }
  }
   
  class FantasticBook extends Book {
    constructor (author, name, releaseDate, pagesCount){
      super(author, name, releaseDate, pagesCount);
      this.type = "fantastic";
  }
  }
   
  class DetectiveBook extends Book {
    constructor (author, name, releaseDate, pagesCount){
      super(author, name, releaseDate, pagesCount);
      this.type = "detective";
  }
  }
   
  // Библиотека
  class Library{
  constructor(name, books){
    this.name = name;
    this.books = [];
   }
   // Метод проверка книги на количество страницБ если ок то в массив 
   addBook(book) {
    if (book.state > 30){
      this.books.push(book);
    }
  }
   
    // метод проверяет наличие типа (автора или названия)
    findBookBy(type, value){
    return this.books.find(book => book[type] == value) || null;
  }
  
   
    giveBookByName(bookName) {
    const book = this.findBookBy('name', bookName);
    if (book) {
    this.books.splice(this.books.indexOf(book), 1);
    }
    return book;
    }
}