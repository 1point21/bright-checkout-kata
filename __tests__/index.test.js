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
  
  test("should be an instance of class Checkout and have expected properties", () => {
    const newCheckout = new Checkout(rules);
    expect(newCheckout).toBeInstanceOf(Checkout);
    expect(typeof newCheckout).toBe('object')
    expect(newCheckout).toHaveProperty('rules')
    expect(newCheckout.rules).toHaveProperty('A')
  });
});

describe('Test scan function', () => {
    test.only('should add correct items to items object', () => {
        const newCheckout = new Checkout(rules)
        const item = 'A'
        newCheckout.scan(item)
        expect(newCheckout.items).toHaveProperty('A')
        expect(newCheckout.items.A).toBe(1)
        newCheckout.scan(item)
        expect(newCheckout.items.A).toBe(2)
      });
});
