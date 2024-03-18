const getLetter = require('./letter');

test('Input starts with a vowel', () => {
    expect(getLetter('apple')).toBe('A');
});

// Test case 2: Input starts with a consonant in group B
test('Input starts with a consonant in group B', () => {
    expect(getLetter('banana')).toBe('B');
});
// Test case: Input is not a string
test('Input is not a string', () => {
    expect(() => getLetter(123)).toThrow('Input must be a string');
});

// Test case: Input string is empty
test('Input string is empty', () => {
    expect(() => getLetter('')).toThrow('Input string cannot be empty');
});
