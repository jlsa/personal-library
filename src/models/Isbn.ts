interface IsbnArguments {
  isbn?: string,
  isbn13?: string
};

class Isbn {
  public isbn?: string;
  public isbn13?: string;

  constructor ({ isbn, isbn13 }: IsbnArguments) {
    this.isbn = isbn ? isbn : '';
    this.isbn13 = isbn13 ? isbn13 : '';
  }
}

export default Isbn;