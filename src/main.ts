import fillBookShelves from './bookshelve';
import './less/styles.less';
import Shelve from './Shelve';
import ShelveItem from './ShelveItem';
import ShelveType from './enums/ShelveType';
import BookShelveItem from './BookShelveItem';

import books from './data/books';
import Book from './models/Book';

fillBookShelves();
const readShelve = new Shelve(ShelveType.Books);
const bookShelveItems = books.map(bookProto => {
  const book = new Book();
    
  return new BookShelveItem(book);
});

// readShelve.add(new ShelveItem('lala'));
// document.querySelector('body').classList.add('styles');

