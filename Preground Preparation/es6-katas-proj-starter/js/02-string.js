// *************************  String.Prototype.includes()
// Change the code below to make the code work:

// EX 1 - The code:
const string = 'xyz'
const searchString = 'x'

// Testing (dont touch)
console.log('EX 1:')
console.log('EXPECTED: string.includes(searchString) =', true)
console.log('ACTUAL: string.includes(searchString) =', string.includes(searchString))

// EX 2 - The code:
const isInAbc = (what) => 'ABC'.includes(what)

// Testing (dont touch)
console.log('\nEX 2:')
console.log('EXPECTED: isInAbc(A) =', true)
console.log('ACTUAL: isInAbc(A) =', isInAbc('A'))

// *************************  String.Prototype.repeat()

// EX 3 - The code:
const what = '✌'.repeat(3)

// testing (dont touch)
console.log('\nEX 3:')
console.log('EXPECTED:  ✌✌✌ ')
console.log('ACTUAL:', what)

// EX 4 - The code:
const items =JSON.stringify('*'.repeat(3).split('').map((symbol, index)=> ({ symbol, speed: (index+1)*10 })))

// testing (dont touch)
console.log('\nEX 4:')
console.log('EXPECTED: [{symbol: "*", speed:', 10, '},{symbol: "*", speed:', 20, '}, {symbol: "*", speed:', 30, '}]')
console.log('ACTUAL:', items)

// *************************  String.Prototype.startsWith()

// EX 5 - The code:
const nuclear = '☢ NO'

// testing (dont touch)
console.log('\nEX 5:')
console.log('EXPECTED: nuclear.startsWith(☢) =', true)
console.log('ACTUAL: nuclear.startsWith(☢) =', nuclear.startsWith('☢'))

// EX 6 - The code:
const s = 'the string s'
const position = 4

// testing (dont touch)
console.log('\nEX 6:')
console.log('EXPECTED: s.startsWith(str, position) =', true)
console.log('ACTUAL: s.startsWith(str, position) =', s.startsWith('str', position))

// *************************  String.Prototype.endsWith()

// EX 7 - The code:
const s1 = 'el finbaba'

// testing (dont touch)
console.log('\nEX 7:')
console.log('EXPECTED: s1.endsWith("baba") =', true)
console.log('ACTUAL: s1.endsWith("baba") =', s1.endsWith('baba'))



