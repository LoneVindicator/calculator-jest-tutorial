const {add, subtract, multiply, divide } = require('./arithmetic');

// test('2 + 3 = 5', () => {
//     expect(add(2, 3)).toBe(5);
// });

// test('4 - 1 = 3', () => {
//     expect(subtract(4, 1)).toBe(3);
// });

// test('2 * 3 = 6', () => {
//     expect(multiply(2, 3)).toBe(6);
// });

// Paramaterized Tests for addition, subtraction, multiplication, and division

//Addition 
test.each([[5, 5, 10], [10, -2, 8], [9, 9, 18]])(
    '%i + %i equals %i', (a, b, expected) => {
        expect(add(a, b)).toBe(expected);
    },
)

//Subtraction
test.each([[10, 5, 5], [100, -50, 150], [0, 7, -7]])(
    '%i - %i equals %i', (a, b, expected) => {
        expect(subtract(a, b)).toBe(expected);
    },
)

//Multiplication
test.each([[2, 2, 4], [-6, 6, -36], [10, 10, 100]])(
    '%i * %i equals %i', (a, b, expected) => {
        expect(multiply(a, b)).toBe(expected);
    },
)

//Division
test.each([[100, 10, 10], [4, 2, 2], [50, 5, 10]])(
    '%i / %i equals %i', (a, b, expected) => {
        expect(divide(a, b)).toBe(expected);
    },
)


