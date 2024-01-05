// Change the code below to make the code work:
// Array:

// ***************** Array.prototype.fill()
// EX 1 - The code:
var arr = new Array(3).fill()

// Testing (dont touch)
console.log('EX 1:')
console.log('EXPECTED:', [5, 5, 5])
console.log('ACTUAL:', arr)

// EX 2 - The code:
const fillPosition = 0
arr = [11, 12, 13].fill(42, fillPosition)

// Testing (dont touch)
console.log('\nEX 2:')
console.log('EXPECTED:', [11, 12, 42])
console.log('ACTUAL:', arr)

// ***************** Array.prototype.find()

// EX 3 - The code:
const pets = [{ name: 'Charli' }, { name: 'Bobi' }]
var pet = pets.find(p => p.name === 'Nobi')

// Testing (dont touch)
console.log('\nEX 3:')
console.log('EXPECTED: pet =', { name: "Bobi" })
console.log('ACTUAL: pet =', pet)

// EX 4 - The code:
pet = pets.find(p => p.name === 'Charli')

// Testing (dont touch)
console.log('\nEX 4:')
console.log('EXPECTED: pet =', undefined)
console.log('ACTUAL: pet =', pet)

// ***************** Array.prototype.findIndex()

// EX 5 - The code:
var foundAt = [4, 9, 11, 2, 6].findIndex(x => x >= 9)

// Testing (dont touch)
console.log('\nEX 5:')
console.log('EXPECTED: foundAt =', 2)
console.log('ACTUAL: foundAt =', foundAt)

// EX 6 - The code:
foundAt1 = [1, 2, 3].findIndex(item => item < 0)

// Testing (dont touch)
console.log('\nEX 6:')
console.log('EXPECTED: foundAt1 =', 1)
console.log('ACTUAL: foundAt1 =', foundAt1)

// ***************** Array.prototype.from()

// EX 7 - The code:
var els = document.querySelectorAll('script')

// Testing (dont touch)
console.log('\nEX 7:')
console.log('EXPECTED: [script]')
console.log('ACTUAL: ', els)

// EX 8 - The code:
function foo() {
    return arguments.map(a => a * 10)
}

// Testing (dont touch)
console.log('\nEX 8:')
console.log('EXPECTED: arr =', [20, 30])
console.log('ACTUAL: arr =', foo(2, 3))


