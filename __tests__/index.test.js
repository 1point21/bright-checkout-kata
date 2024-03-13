const { Checkout } = require("../index");

const rules = {
A: [50, { number: 3, cost: 140 }],
B: [30, { number: 2, cost: 45 }],
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
    test('should add correct item to items object (one item)', () => {
        const newCheckout = new Checkout(rules)
        const item = 'A'
        newCheckout.scan(item)
        expect(newCheckout._items).toHaveProperty('A')
        expect(newCheckout._items.A).toBe(1)
        newCheckout.scan(item)
        expect(newCheckout._items.A).toBe(2)
      });

    test('should NOT add item to items object if does not exist in shop', () => {
        const newCheckout = new Checkout(rules)
        const item = 'Z'
        newCheckout.scan(item)
        expect(newCheckout._items).not.toHaveProperty('Z')
    });

      test('should add correct items to items object (multiple items)', () => {
        const newCheckout = new Checkout(rules)
        const item = 'ABCAA'
        const itemArr = item.split('')
        itemArr.forEach(item => newCheckout.scan(item))
        expect(newCheckout._items).toMatchObject({
            A: 3,
            B: 1,
            C: 1
        })
      });

      test('should add correct items to items object (using scanMultiple function)', () => {
        const newCheckout = new Checkout(rules)
        const itemList = 'ABZCAQA'
        newCheckout.scanMultiple(itemList)
        expect(newCheckout._items).toMatchObject({
            A: 3,
            B: 1,
            C: 1
        })
      });
});

describe('Test total function', () => {
    test('should return the correct value (one type of item)', () => {
        const newCheckout = new Checkout(rules) 
        const item = 'A'
        const priceArray = [50, 100, 140, 190, 240, 280, 330]
        priceArray.forEach((price, index) => {
            newCheckout.scan(item)
            expect(newCheckout.total()).toEqual(price)
        })
    });
    test('should return correct value (multiple types of item)', () => {
        const itemList = ['ABCAA', 'BBBCC', 'AABBCCDD', 'DDDDCCCC', 'FGH']
        const priceList = [190, 115, 215, 140, 0]
        itemList.forEach((item, index) => {
            const newCheckout = new Checkout(rules)
            newCheckout.scanMultiple(item)
            expect(newCheckout.total()).toEqual(priceList[index])
        })
    });
});
