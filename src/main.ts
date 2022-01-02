import App from './app';


class H1Element {
  private content: string;
  private element: HTMLElement; // find out what kind of element...
  private textNode: Text;

  constructor(content: string) {
    this.content = content;
    this.textNode = document.createTextNode(this.content);
    this.element = document.createElement('h1');  
    this.element.appendChild(this.textNode);
  }

  get() {
    return this.element;
  }
}

const myFunction = () => {
  var h = document.createElement("H1");
  var t = document.createTextNode("oooeh yeah babeh");
  h.appendChild(t);
  document.getElementById('app').appendChild(h);
}

const app = new App();
const element = document.getElementById('app');
const h1Element = new H1Element('test 1 2 3');

document.getElementById('app').appendChild(h1Element.get());

