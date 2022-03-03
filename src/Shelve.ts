import ShelveItem from "./ShelveItem";
import ShelveType from "./enums/ShelveType";

class Shelve {
  private items: ShelveItem[];
  private name: string;

  constructor(type: ShelveType, name: string) {
    this.items = [];
    this.name = name;
  }

  add(shelveItem: ShelveItem): Shelve { 
    this.items.push(shelveItem); 
    return this; 
  }

  getItems(): ShelveItem[] {
    return this.items;
  }

  render() {
    const shelve = document.getElementById(this.name);
    const items = [];
    this.getItems().forEach(shelveItem => {
      const figure = shelveItem.render();
      shelve.appendChild(figure);
    });
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
