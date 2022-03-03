import Book from "./Book";

interface AuthorArguments {
  id?: string,
  name?: string
  dateOfBirth?: Date
};

class Author { // extends Person {
  id: string; // UUID
  // part of person
  name: string;
  dateOfBirth?: Date;

  books: Book[];

  constructor({ id, name, dateOfBirth }: AuthorArguments) {
    this.id = id;
    this.name = name;
    this.dateOfBirth = dateOfBirth;
  }
}

export default Author;