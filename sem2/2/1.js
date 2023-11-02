"use strict";

/*
###Задание 1
Необходимо создать класс Library. Конструктор класса, должен принимать начальный 
список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив 
не содержит дубликатов; в противном случае необходимо выбросить ошибку.
1. Класс должен содержать приватное свойство #books, которое должно хранить 
книги, переданные при создании объекта.
2. Реализуйте геттер-функцию allBooks, которая возвращает текущий список книг.
3. Реализуйте метод addBook(title), который позволяет добавлять книгу в список. 
Если книга с таким названием уже существует в списке, выбросьте ошибку с 
соответствующим сообщением.
4. Реализуйте метод removeBook(title), который позволит удалять книгу из списка 
по названию. Если книги с таким названием нет в списке, выбросьте ошибку с 
соответствующим сообщением.
5. Реализуйте метод hasBook(title), который будет проверять наличие книги в 
библиотеке и возвращать true или false в зависимости от того, есть ли такая 
книга в списке или нет.
*/

class Library {
    #books = [];
  constructor(booksArr) {
    if (Array.from(new Set(booksArr)).length !== booksArr.length) {
      throw new Error("Есть дубликаты");
    }
    this.#books = booksArr;
  }

  get allBooks() {
    return this.#books;
  }

  /**
   * @param {String} title
   */
  addBook(title) {
    if (!this.#books.find((book) => book === title)) {
      this.#books.push(title);
    } else {
      throw new Error("Книга есть в списке");
    }
  }

  removeBook(title) {
    if (!this.#books.find((book) => book === title)) {
      throw new Error("Книги нет в списке");
    } else {
      this.#books = this.#books.filter((book) => book !== title);
    }
  }

  hasBook(title) {
    if (!this.#books.find((book) => book === title)) {
      return false;
    } else {
      return true;
    }
  }
};

let books = ["Пушкин", "Лермонтов", "Иосиф"];

const Books = new Library(books);
console.log(Books.allBooks);
Books.addBook("Пушкин");
console.log(Books.allBooks);
Books.removeBook("Тарантино");
console.log(Books.allBooks);
console.log(Books.hasBook("Иосиф"));
