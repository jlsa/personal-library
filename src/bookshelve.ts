import bookData from "./data/books";
const apiUrl = 'https://covers.openlibrary.org/b';

function fillBookShelves() {
  fillBooks('read-bookshelve');
  fillCurrentlyReadingBooks('currently-reading-bookshelve');
}

function fillBooks(shelveName: string) {
  const bookShelve = document.getElementById(shelveName);

  bookData.forEach((book) => {
    if (book.read) {
      const src = `${apiUrl}/${book.cover.type}/${book.cover.value}-L.jpg`;
      const caption = `<strong>${book.author}</strong><br><em>${book.title}</em>`;
      addShelveItemTo(bookShelve, src, caption);
    }
  });
}

function fillCurrentlyReadingBooks(shelveName: string) {
  const bookShelve = document.getElementById(shelveName);

  bookData.forEach((book) => {
    if (book.reading) {
      const src = `${apiUrl}/${book.cover.type}/${book.cover.value}-L.jpg`;
      const caption = `<strong>${book.author}</strong><br><em>${book.title}</em>`;
      addShelveItemTo(bookShelve, src, caption);
    }
  });
}

function addShelveItemTo(parent, imageSource: string, caption: string) {
  const figure = document.createElement('figure');
    figure.classList.add('card');
    figure.innerHTML = `<img src= "${imageSource}" /><figcaption>${caption}</figcaption>`;
    parent.appendChild(figure);
}

export default fillBookShelves;
