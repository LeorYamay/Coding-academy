// change the code below to make the code work
// Spread operator:

// EX 1 - The code:
const middle = [1, 2, 3]
const arr = [0, ...middle, 4]

// testing (dont touch)
console.log('EX 1:')
console.log('EXPECTED: arr =', [0, 1, 2, 3, 4])
console.log('ACTUAL: arr = ', arr)

// EX 2 - The code:
const theEnd = [3, 4]
const allInOne = [1, 2, ...theEnd]

// testing (dont touch)
console.log('\nEX 2:')
console.log('EXPECTED: allInOne =', [1, 2, 3, 4])
console.log('ACTUAL: allInOne = ', allInOne)