const  solve = require('./operators')

describe('solve function', () => {
    test('calculates total cost correctly', () => {
        expect(solve(100, 10, 5)).toBe(115); 
    });

    test('throws error for non-numeric input', () => {
        expect(() => solve('abc', 10, 5)).toThrow('Invalid input: Arguments must be numbers.');
    });

    test('throws error for negative input', () => {
        expect(() => solve(100, -10, 5)).toThrow('Invalid input: Arguments cannot be negative.');
    });
});