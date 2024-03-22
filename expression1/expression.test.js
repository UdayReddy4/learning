// Importing the function to be tested
const regexVar = require('./expression');

// Test cases
describe('regexVar', () => {
    test('Matches string starting and ending with the same vowel', () => {
        expect(regexVar().test('abcda')).toBe(true);
        expect(regexVar().test('elphe')).toBe(true);
        expect(regexVar().test('urumu')).toBe(true);
    
        
    });

    test('Does not match string starting and ending with different vowels', () => {
        expect(regexVar().test('banana')).toBe(false);
        
    });

    test('Does not match string starting and ending with consonants', () => {
        expect(regexVar().test('car')).toBe(false);
        
    });

    test('Does not match empty string', () => {
        expect(regexVar().test('')).toBe(false);
    });

    test('Does not match string with single character', () => {
        expect(regexVar().test('a')).toBe(false);
        
    });

    test('Does not match string with non-alphabetic characters', () => {
        expect(regexVar().test('123')).toBe(false);
        expect(regexVar().test('!@#')).toBe(false);
    });
});
