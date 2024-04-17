// 1.JavaScript Practice 002 Module 1.2
// Instruction:
// - Write class Book. Then, add a method to the object that outputs information about the book.
// Class Book
// Constructor
// • Constructor(title, author, yearPublished): This initializes the properties
// 'title', 'author', and 'yearPublished'. If they are empty, it assigns 'no title', 'no author', and 0 respectively. 
// Properties
// • title: type String
// • author: type String
// • yearPublished: type number
// Methods
// • getInfo(): This method return a string that combines the book's title, author,
// and year of publication.
// Initiate code:
// // Creating class Book // Insert your code here
// Book.js

class Book {
    constructor(title, author, yearPublished) {
      this.title = title || 'no title';
      this.author = author || 'no author';
      this.yearPublished = yearPublished || 0;
    }
  
    getInfo() {
      return `${this.title}, ${this.author}, ${this.yearPublished}`;
    }
  }
  
  // Example usage:
  const bookExample = new Book("Sample Title", "Sample Author", 2022);
  console.log(bookExample.getInfo());
  
  //  2.
  // Instruction:
  // - Create an object Book reference ‘practice 1’. Use a constructor Constructor(title, author, yearPublished. Additionally, use a 'getInfo()' method.
  // Initiate code:
  // // Insert your code here
  const practice1 = new Book("Sample Title", "Sample Author", 2022);
  
  
  // 3.
  // Instruction:
  // - Creating a library system using class Book and Library. Class Book:
  // Constructor
  // • Constructor(title, author, pages, genre): This initializes the properties 'title',
  // 'author' , ' pages' and 'genre'.
  // Properties
  // • title: type string
  // • author: type string
  // • pages: type number
  // • genre: type string
  // Methods
  // • getSummary() - Returns a string summary of the book ex: .
  // "Title: Harry Wick, Author: Conan, Pages: 345, Genre: Sci-Fi"
  
  class Book {
    constructor(title, author, pages, genre) {
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.genre = genre;
    }
  
    getSummary() {
      return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}, Genre: ${this.genre}`;
    }
  }
  
  
  // Class Library: Constructor
  // • Constructor(name): This initializes the properties 'name' and creates an empty array in the property books
  // Properties
  // • name: type string
  // • books: type array of Book objects, initially empty.
  // Methods
  // • addBook(newBook) - Accepts a Book object and adds it to the books array.
  // • getBooksByGenre(genre) - Returns an array of books that match the specified genre.
  // • getTotalPagesByGenre(genre) - Returns the total number of pages for all books of a specified genre.
  
  class Library {
    constructor(name) {
      this.name = name;
      this.books = [];
    }
  
    addBook(newBook) {
      this.books.push(newBook);
    }
  
    getBooksByGenre(genre) {
      return this.books.filter(book => book.genre === genre);
    }
  
    getTotalPagesByGenre(genre) {
      return this.books
        .filter(book => book.genre === genre)
        .reduce((totalPages, book) => totalPages + book.pages, 0);
    }
  }
  
  
  //   4
  //   Instruction:
  //   - Create a 'Book' object and a 'Library' object for 'Practice 3'. Use a constructor and methods in both classes.
  //   Initiate code:
  // Insert your code here
  
  const book1 = new Book("Harry Wick", "Conan", 345, "Sci-Fi");
  const library1 = new Library("Sample Library");
  
  library1.addBook(book1);
  
  // 5.
  console.log(library1.books);