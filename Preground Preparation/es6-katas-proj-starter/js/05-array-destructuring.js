// Change the code below to make the code work:
// Destructuring:
// array:

// EX 1 - The code:
const all = ['muki', 'fuki', 'shuki']
const [item1] = all

// Testing (dont touch)
console.log('EX 1:')
console.log('EXPECTED: muki')
console.log('ACTUAL:', item1)

// EX 2 - The code:
const [, , item2] = all

// Testing (dont touch)
console.log('\nEX 2:')
console.log('EXPECTED: shuki')
console.log('ACTUAL:', item2)

// EX 3 - The code:
function f() {
    return [8, 44, 1, 33, 2]
}
var [,a , ,b , ] = f()

// Testing (dont touch)
console.log('\nEX 3:')
console.log('EXPECTED: a=44, b=33')
console.log('ACTUAL:', `a=${a}, b=${b}`)

// EX 4 - The code:
var [f, g, ...rest] = [-1, -2, 3, 4, 5]

// Testing (dont touch)
console.log('\nEX 4:')
console.log('EXPECTED: f=', -1, ', g=', -2, 'rest=', [3, 4, 5])
console.log('ACTUAL: f=', f, 'g=', g, 'rest= ', rest)

// EX 5 - The code:
var [f, ...rest] = [1, 2, 3, 4, 5]

console.log('\nEX 5:')
console.log('EXPECTED: rest.length =', 4)
console.log('ACTUAL: rest.length =', rest.length)