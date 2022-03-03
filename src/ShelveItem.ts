interface ShelveItemArguments {
  name: string
};

class ShelveItem {
  name: string;
  constructor({ name }: ShelveItemArguments) {
    this.name = name;
  }

  render(): HTMLElement|null {
    // override me
    return null;
  }
}

export default ShelveItem;