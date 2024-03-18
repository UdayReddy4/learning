const  vowelsAndConsonants  = require('./vowandcont');

describe('vowelsAndConsonants', () => {
    
    test('should return empty string when input is empty', () => {
        expect(vowelsAndConsonants('')).toBe('');
    });

    test('should return vowels when input has only vowels', () => {
        expect(vowelsAndConsonants('aeiou')).toBe('aeiou');
    });

    test('should return consonants when input has only consonants', () => {
        expect(vowelsAndConsonants('bcdfghjklmnpqrstvwxyz')).toBe('bcdfghjklmnpqrstvwxyz');
    });

    test('should throw an error if input is not a string', () => {
        expect(() => vowelsAndConsonants(123)).toThrow('Input must be a string');
    });

});