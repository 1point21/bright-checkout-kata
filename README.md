# Checkout kata

## Background and brief

See original instructions below.

## Set-up

### Dependencies

You will need the following installed to run the tests and check the code:

1. node.js
2. npm
   
[Download here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

### Run tests

Clone this repository and then `cd` into the correct directory. Run `npm i` to install the dependencies. 

Running `npm run test` will automatically run all unit tests in the tests file.

## Approach

Although I used JavaScript to solve the kata, I chose to use an OOP approach given the instructions call for a class library to solve the problem. 

The solution uses just one class of `Checkout` which takes a set of products in its constructor. The methods are:

1. `scan()` - will scan an individual item and save it to a private* `items` object, counting individual instances of each separate item

2. `scanMultiple()` - really implemented as a helper method for development, but can scan multiple items and save them to the `items` object

3. `total()` - will add up all the items, taking into account the special prices provided in the dataset. 

_*this property is only notionally private, and can still be accessed directly. The `_` is a notation for developers but will allow testing with jest during developemnt. To make it truly private, the `#` should be used or a specific getter, although this would require rewriting the tests._

## Testing

The unit tests are written using `jest` testing framework. When writing the code I followed a red-green TDD approach, writing the tests first and then code to pass them. 

Changing the values in the data set allows the user to test different data. 

## Next steps / further development

Should I develop this further:

1. The code for the `total()` method of the `Checkout` class is verbose, but functional. It could and should be simplified, possibly using the `Product` class (see below)

2. `Product` class - the kata does not specify how the data should be input. I chose to use an object of nested arrays and objects, but this began to prove unwieldly for a simple solution. I later considered using a separate class for `Product` and drafted an example of this in the file `product.js`. 

3. Use getters and setters to achieve true **encapsulation**

## Original instructions for kata

In a normal supermarket, things are identified using Stock Keeping Units, or SKUs. In our shop, we’ll use individual letters of the alphabet (A, B, C, and so on). Our goods are priced individually. In addition, some items are multipriced: buy n of them, and they’ll cost you y pounds. For example, item ‘A’ might cost 50 pounds individually, but this week we have a special offer: buy three ‘A’s and they’ll cost you 130. The current pricing and offers are as follows:

| SKU | Unit Price | Special Price |
| --- | --- | --- |
| A | 50 | 3 for 130 |
| B | 30 | 2 for 45 |
| C | 20 |  |
| D | 15 |  |

Our checkout accepts items in any order, so that if we scan a B, an A, and another B, we’ll recognize the two B’s and price them at 45 (for a total price so far of 95). Because the pricing changes frequently, we need to be able to pass in a set of pricing rules each time we start handling a checkout transaction.

Here's a suggested interface for the checkout...

```cs
interface ICheckout
{
    void Scan(string item);
    int GetTotalPrice();
}
```

### Instructions

Implement a class library that satisfies the problem described above. The solution should be test driven.

We're as interested in the process that you go through to develop the code as the end result, so commit early and often so we can see the steps that you go through to arrive at your solution. We want to see a git repository containing your solution, ideally uploaded to your own github account.

If you've not done a kata before, there are some great reources on the web describing the process.

### Acknowledgements

Adapted from [http://codekata.com/kata/kata09-back-to-the-checkout/](http://codekata.com/kata/kata09-back-to-the-checkout/)