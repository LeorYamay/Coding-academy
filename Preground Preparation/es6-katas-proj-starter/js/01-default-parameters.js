// change the code below to make the code work
// Default parameters:

// EX 1 - The code:
let func = (num = 0) => num

// testing (dont touch)
console.log('EX 1:')
console.log('EXPECTED:', 0)
console.log('ACTUAL:', func())

// EX 2 - The code:
let defaultValue = 42
function foo(method) {
    if (method){
        return method
    }
    return defaultValue
}

// testing (dont touch)
console.log('\nEX 2:')
console.log('EXPECTED: value: 42')
console.log('ACTUAL:', foo())



// EX 3 - The code:
function foo1(x, y = 10, z) {
    return x * y * z 
}

// testing (dont touch)
console.log('\nEX 3:')
console.log('EXPECTED: value: 60')
console.log('ACTUAL:', foo1(2, undefined, 3))
