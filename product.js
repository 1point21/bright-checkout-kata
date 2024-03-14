// NOTE: example only, not used in final solution. See documentation

const Checkout = require("./index");

class Product {
  constructor(name, price, special = null) {
    (this.name = name), (this.price = price);
    this.special = special;
  }
}

const a = new Product("A", 50, { number: 3, cost: 140 });
const b = new Product("B", 30, { number: 2, cost: 45 });
const c = new Product("C", 20);
const d = new Product("D", 15);

const products = [a, b, c, d];

const newCheckout = new Checkout(products);
