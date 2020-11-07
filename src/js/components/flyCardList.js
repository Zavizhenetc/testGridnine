export default class flyCardList {
  constructor(container) {
    this.container = container;
  }

  _addCard(card) {
    this.container.append(card);
  }
  render(array) {
    array.forEach((elem) => this._addCard(elem));
  }
  remove() {
    this.container.innerHTML = '';
  }

}