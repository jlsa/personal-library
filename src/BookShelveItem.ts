import ShelveItem from "./ShelveItem";
import Book from "./models/Book";

const apiUrl = 'https://covers.openlibrary.org/b';

class BookShelveItem extends ShelveItem {
  private book: Book;
  
  constructor(book: Book) {
    super({ name: book.title });
    this.book = book;
  }

  getBook(): Book
  {
    return this.book;
  }

  render(): HTMLElement
  {
    // console.log(`${this.book.title} by ${this.book.author.name}`);

    const src = `${apiUrl}/${this.book.cover.type}/${this.book.cover.value}-L.jpg`;
    const caption = `<em>${this.book.title}</em><br><br><strong>${this.book.author.name}</strong>`;

    return this.getFigure(src, caption);
  }

  getFigure(imageSource: string, caption: string): HTMLElement {
    const figure = document.createElement('figure');
      figure.classList.add('card');
      figure.innerHTML = `<img src= "${imageSource}" /><figcaption>${caption}</figcaption>`;

      return figure;
      // parent.appendChild(figure);
  }
}

export default BookShelveItem;