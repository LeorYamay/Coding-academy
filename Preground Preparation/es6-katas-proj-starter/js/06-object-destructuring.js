// Change the code below to make the code work:
// Destructuring Objects:

// EX 1 - The code:
const obj = { str: 'moo', val: 19 }
var { str } = obj

// Testing (dont touch)
console.log('EX 1:')
console.log('EXPECTED: moo')
console.log('ACTUAL:', str)

// EX 2 - The code:
var { str, val } = obj

// Testing (dont touch)
console.log('\nEX 2:')
console.log('EXPECTED: 19')
console.log('ACTUAL:', val)

// EX 3 - The code:
var { str, val, p1, p = 5 } = obj

// Testing (dont touch)
console.log('\nEX 3:')
console.log('EXPECTED: p =', 5)
console.log('ACTUAL:', 'p =', p)

// EX 4 - The code:
var { j = 4, k = 5 } = { k: 33 }

// Testing (dont touch)
console.log('\nEX 4:')
console.log('EXPECTED: j=4, k=33')
console.log('ACTUAL:', `j=${j}, k=${k}`)

// EX 5 - The code:
function getTotalPrice({ price, tax }) {
  return price + price * tax
}
const product = { name: 'TV', price: 1000, tax: 0.1 }

// Testing (dont touch)
console.log('\nEX 5:')
console.log('EXPECTED: 1100')
console.log('ACTUAL:', getTotalPrice(product))
