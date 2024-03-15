const factorial = require('./function')
// test ('test case 1: factorial function is positive ',() =>
// {
//     expect(factorial(3).toBe(6));
// }
// );
//Test Case 1: Testing factorial of 0
test('factorial of 0 should be 1', () => {
    expect(factorial(0)).toBe(1);
});

// Test Case 2: Testing factorial of 5
test('factorial of 5 should be 120', () => {
    expect(factorial(5)).toBe(120);
});
test('factorial of negative number should throw an error', () => {
    expect(() => {
        factorial(-1);
    }).toThrow();
});