import Author from "./Author";
import BookCover from "./BookCover";
import Isbn from './Isbn';

class Book {
  public title: string;
  public author: Author;
  public cover: BookCover;
  public isbn: Isbn;

  constructor(proto: any) {
    this.title = proto.title;
    this.author =  new Author({ id: proto.author, name: proto.author });
    this.cover = new BookCover({ type: proto.cover.type, value: proto.cover.value });
    this.isbn = new Isbn({ isbn13: proto.isbn13 });
  }
}

export default Book;