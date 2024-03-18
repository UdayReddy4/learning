const throws =require('./intofcon')

describe('throws function', () => {
    test('returns "Weird" for odd numbers', () => {
        expect(throws(3)).toBe('Weird');
        expect(throws(5)).toBe('Weird');
    });

    test('returns "Not Weird" for even numbers in the range of 2 to 5', () => {
        expect(throws(2)).toBe('Not Weird');
        expect(throws(5)).toBe('Weird'); // This is incorrect, it should be 'Not Weird'
    });

    test('throws an error for invalid input', () => {
        expect(() => throws('string')).toThrow('Invalid input: Input must be an integer.');
        expect(() => throws(3.14)).toThrow('Invalid input: Input must be an integer.');
    });
});
