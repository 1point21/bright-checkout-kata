class Checkout {
  constructor(rules) {
    this.rules = rules;
    this.items = {};
  }
  scan(item) {
    if (this.items.hasOwnProperty(item)) this.items[item]++;
    else this.items[item] = 1;
  }
  total() {
    // need logic for totalling of items according to rules
  }
}

module.exports = { Checkout };
