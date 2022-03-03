import fillBookShelves from './bookshelve';
import './less/styles.less';
import './less/modal.less';
import Shelve from './Shelve';
import ShelveItem from './ShelveItem';
import ShelveType from './enums/ShelveType';
import BookShelveItem from './BookShelveItem';
import Author from './models/Author';

import books from './data/books';
import Book from './models/Book';
import BookCover from './models/BookCover';

const readShelve = new Shelve(ShelveType.Books, 'read-bookshelve');
const notReadShelve = new Shelve(ShelveType.Books, 'not-read-bookshelve');
const currentlyReadingShelve = new Shelve(ShelveType.Books, 'currently-reading-bookshelve');


books.forEach(bookProto => {
  const book = new Book(bookProto);
  if (bookProto.read) {
    readShelve.add(new BookShelveItem(book));
  }
  if (!bookProto.read) {
    notReadShelve.add(new BookShelveItem(book));
  }
  if (bookProto.reading) {
    currentlyReadingShelve.add(new BookShelveItem(book));
  }
});

readShelve.render();
notReadShelve.render();
currentlyReadingShelve.render();

// readShelve.add(new ShelveItem('lala'));
// document.querySelector('body').classList.add('styles');

fillBookShelves();