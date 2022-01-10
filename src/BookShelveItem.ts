import ShelveItem from "./ShelveItem";
import Book from "./models/Book";

class BookShelveItem extends ShelveItem {
  private book: Book;
  
  constructor(book: Book) {
    super(book.title);
    this.book = book;
  }

  getBook(): Book
  {
    return this.book;
  }

  display(): void
  {
    
  }
}

export default BookShelveItem;