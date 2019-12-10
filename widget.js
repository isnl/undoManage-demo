class Widget {
  constructor() {
    this.elem = null;
  }
  render() {
    let elem = document.getElementById('root');
    const length = elem.children.length;
    this.elem = document.createElement('div');
    this.elem.innerHTML = length + 1;
    elem.appendChild(this.elem);
  }
  remove() {
    let elem = document.getElementById('root');
    elem.removeChild(this.elem);
  }
}