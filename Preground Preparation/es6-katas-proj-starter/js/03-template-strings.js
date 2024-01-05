// Change the code below to make the code work:
// Template strings:
// basics:

// EX 1 - The code:
var x = 3
var evaluated = `x=${x}`

// Testing (dont touch)
console.log('EX 1')
console.log('EXPECTED: x=3')
console.log('ACTUAL: ', evaluated)

// multiline:
// EX 2 - The code:
var multiline = `


`

// Testing (dont touch)
console.log('\nEX 2')
console.log('EXPECTED: 4')
console.log('ACTUAL: ', multiline.split('\n').length)

// all inside "${...}" gets evaluated
// EX 3 - The code:
var x = 9,
    y = 8
var evaluated = `${x+y}`

// Testing (dont touch)
console.log('\nEX 3')
console.log('EXPECTED: 17')
console.log('ACTUAL: ', evaluated)

// inside "${...}" can also be a function call
var str = `res = ${Math.min(3, -5) /0}`

// Testing (dont touch)
console.log('\nEX 4')
console.log('EXPECTED: res = -Infinity')
console.log('ACTUAL:', str)