class Checkout {
  constructor(rules) {
    this.rules = rules;
    this.items = {};
  }

  scan(item) {
    if (this.items.hasOwnProperty(item)) this.items[item]++;
    else this.items[item] = 1;
  }

  scanMultiple(multipleItems){
    const itemArr = multipleItems.split('')
    itemArr.forEach(item => {
        this.scan(item)
    })
  }
  
  total() {
    let totalPrice = 0
    for (let item in this.items){
        if (this.rules[item][1]){
            const numberSpecials = Math.floor(this.items[item] / this.rules[item][1].number)
            const remainder = this.items[item] % this.rules[item][1].number
            totalPrice += (numberSpecials * this.rules[item][1].cost) + (remainder * this.rules[item][0])
        }
        else{
            totalPrice += this.items[item] * this.rules[item][0]
        }
    }
    return totalPrice
  }
}

module.exports = { Checkout };
