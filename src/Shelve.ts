import ShelveItem from "./ShelveItem";
import ShelveType from "./enums/ShelveType";

class Shelve {
  private items: ShelveItem[];

  constructor(type: ShelveType) {
    this.items = [];
  }

  add(shelveItem: ShelveItem): Shelve { 
    this.items.push(shelveItem); 
    return this; 
  }

  getItems(): ShelveItem[] {
    return this.items;
  }
}

// function fillGameShelve() {
//   // fillFavoriteGames('read-bookshelve');
//   // fillPlayedGames('read-bookshelve');
//   // fillCurrentlyReadingBooks('currently-reading-bookshelve');
// }

// function fillBooks(shelveName: string) {
//   const bookShelve = document.getElementById(shelveName);

//   bookData.forEach((book) => {
//     if (book.read) {
//       const src = `${apiUrl}/${book.cover.type}/${book.cover.value}-L.jpg`;
//       const caption = `<strong>${book.author}</strong><br><em>${book.title}</em>`;
//       addShelveItemTo(bookShelve, src, caption);
//     }
//   });
// }

// function fillCurrentlyReadingBooks(shelveName: string) {
//   const bookShelve = document.getElementById(shelveName);

//   bookData.forEach((book) => {
//     if (book.reading) {
//       const src = `${apiUrl}/${book.cover.type}/${book.cover.value}-L.jpg`;
//       const caption = `<strong>${book.author}</strong><br><em>${book.title}</em>`;
//       addShelveItemTo(bookShelve, src, caption);
//     }
//   });
// }

// function addShelveItemTo(parent, imageSource: string, caption: string) {
//   const figure = document.createElement('figure');
//     figure.classList.add('card');
//     figure.innerHTML = `<img src= "${imageSource}" /><figcaption>${caption}</figcaption>`;
//     parent.appendChild(figure);
// }

export default Shelve;
