import Book from "./Book";

class Author { // extends Person {
  id: string; // UUID
  // part of person
  name: string;
  dateOfBirth: Date;

  books: Book[];
}

export default Author;