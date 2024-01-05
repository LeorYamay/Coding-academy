// Arrow functions:
// Are shorter to write
// Instead of: function(){} we have: () => {}
// Change the code below to make the code work:

// EX 1 - The code:
var func = () => { return 17 }

// Testing (dont touch)
console.log('EX 1:')
console.log('EXPECTED:', 17)
console.log('ACTUAL:', func())

// Instead `{}` use an expression, as return value
// (If the function is one-line we can emit the {} and the return)
// EX 2 - The code:
func = () => "I return too"

// Testing (dont touch)
console.log('\nEX 2:')
console.log('EXPECTED: "I return too"')
console.log('ACTUAL:', func())

// One parameter can be written without parens
// EX 3 - The code:
func = p => p - 1

// Testing (dont touch)
console.log('\nEX 3:')
console.log('EXPECTED:', 27)
console.log('ACTUAL: ', func(28))

// More than one param require parens
// EX 4 - The code:
func = (p1, p2) => p1 + p2

// Testing (dont touch)
console.log('\nEX 4:')
console.log('EXPECTED:', 27)
console.log('ACTUAL:', func(19, 8))

// The function body needs parens to return an object
// EX 5 - The code:
func = () => ({ val: 8 })

// Testing (dont touch)
console.log('\nEX 5:')
console.log('EXPECTED:', { val: 8 })
console.log('ACTUAL:', func())