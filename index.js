class Checkout {
  constructor(products) {
    this.products = products;
    this._items = {};
  }

  // scan individual item
  scan(item) {
    if (this.products.hasOwnProperty(item)) {
      if (this._items.hasOwnProperty(item)) this._items[item]++;
      else this._items[item] = 1;
    }
  }

  // scan multiple items (pass in string of multiple letters)
  scanMultiple(multipleItems) {
    const itemArr = multipleItems.split("");
    itemArr.forEach((item) => {
      this.scan(item);
    });
  }

  // calculate total for items
  total() {
    let totalPrice = 0;
    for (let item in this._items) {
      if (this.products[item][1]) {
        const numberSpecials = Math.floor(
          this._items[item] / this.products[item][1].number
        );
        const remainder = this._items[item] % this.products[item][1].number;
        totalPrice +=
          numberSpecials * this.products[item][1].cost +
          remainder * this.products[item][0];
      } else {
        totalPrice += this._items[item] * this.products[item][0];
      }
    }
    return totalPrice;
  }
}

module.exports = { Checkout };
