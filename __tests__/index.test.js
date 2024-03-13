const { Checkout } = require("../index");

const rules = {
A: [50, { 3: 140 }],
B: [30, { 2: 45 }],
C: [20, null],
D: [15, null],
};

describe("Test Checkout class", () => {
  test("should be of type function", () => {
    expect(typeof Checkout).toBe('function');
  });
  
  test.only("should be an instance of class Checkout and have expected properties", () => {
    const newCheckout = new Checkout(rules);
    expect(newCheckout).toBeInstanceOf(Checkout);
    expect(typeof newCheckout).toBe('object')
    expect(newCheckout).toHaveProperty('rules')
    expect(newCheckout.rules).toHaveProperty('A')
  });

  
});
