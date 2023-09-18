export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems() {
    this._renderedItems.forEach((item) => {
      const cardEl = this._renderer(item, this._container)
      this.addItem(cardEl);
    });
  }

  addItem(element) {
    this._container.prepend(element);
  }
}
