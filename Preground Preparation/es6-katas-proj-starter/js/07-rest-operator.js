// change the code below to make the code work
// Rest operator:

// EX 1 - The code:
const [x, y, z ,...dimensions] = [3, 2, 42, Math.PI, Math.E]

// testing (dont touch)
console.log('EX 1:')
console.log('EXPECTED: dimensions.length =', 2)
console.log('ACTUAL:', dimensions.length)

// EX 2 - The code:
function fn(...nums) {
    return nums
}

// testing (dont touch)
console.log('EX 2:')
console.log('EXPECTED: nums = [1, 2]')
console.log('ACTUAL: nums = ', fn(1, 2))

// EX 3 - The code:
function fn1(firstParam, secondParam,...nums) {
    return nums
}

// testing (dont touch)
console.log('\nEX 3:')
console.log('EXPECTED: nums =', [3, 4])
console.log('ACTUAL: nums = ', fn1('a', 2, 3, 4))

// EX 4 - The code:
// const [a, b, ...rest] = [1, [2, 3], 4, 5]
const [a, [b, part1],...part2] = [1, [2, 3], 4, 5]
const [...rest] = [part1,...part2]

// testing (dont touch)
console.log('\nEX 4:')
console.log('EXPECTED: a =', 1, 'b =', 2, 'rest =', [3, 4, 5])
console.log('ACTUAL: a =', a, 'b =', b, 'rest =', rest)
