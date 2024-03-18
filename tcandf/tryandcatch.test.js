const reverseString = require('./tryandcatch'); 

test('Reverse a valid string', () => {
    expect(reverseString('hello uday')).toEqual('yadu olleh');
});

test('Reverse an valid string', () => {
    expect(reverseString('manu')).toEqual('unam');
});

test('Input is not a string', () => {
    expect(() => {
        reverseString(123);
    }).toThrow('Input is not a string');
});

test('Input is not a string', () => {
    expect(() => {
        reverseString(55*5);
    }).toThrow('Input is not a string');
});
