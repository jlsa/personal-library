interface BookCoverArguments {
  type: string, 
  value: string
};

class BookCover { // extends Cover
  public type: string;
  public value: string

  constructor({ type, value }: BookCoverArguments) {
    this.type = type;
    this.value = value;
  }

}

export default BookCover;