// change the code below to make the code work
// Set:
// basics:

// EX 1 - The code:
let set = new Set()
set.add(1)
set.add(1)

// testing (dont touch)
console.log('EX 1:')
console.log('EXPECTED: set.size =', 2)
console.log('ACTUAL: set.size =', set.size)


// set.add():

// EX 2 - The code:
let set1 = new Set()

set1.add(2)

// testing (dont touch)
console.log('\nEX 2:')
console.log('EXPECTED: set.has(2) =', true)
console.log('ACTUAL: set.has(2) =', set1.has(2))


// set.delete():

// EX 3 - The code:
let set2 = new Set()
set2.add('one')
const returns = set2.delete('two')

// testing (dont touch)
console.log('\nEX 3:')
console.log('EXPECTED: returns =', true)
console.log('ACTUAL: returns =', returns)


// set.clear() , set3.size:

// EX 4 - The code:
let set3 = new Set
set3.add('one').add(2)
set3.clear()
var expectedSize

// testing (dont touch)
console.log('\nEX 4:')
console.log('EXPECTED: expectedSize =', 0)
console.log('ACTUAL: expectedSize =', expectedSize)