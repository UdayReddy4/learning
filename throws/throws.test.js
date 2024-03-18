const isPositive =require('./throws')

test('isPositive: positive number', () => {
    expect(isPositive(5)).toBe("YES");
});

test('isPositive: zero', () => {
    expect(() => {
        isPositive(0);
    }).toThrow(Error("Zero Error"));
});

test('isPositive: negative number', () => {
    expect(() => {
        isPositive(-5);
    }).toThrow(Error("Negative Error"));
});


    test('isPositive: string input', () => {
        expect(() => {
            isPositive("abc");
        }).toThrow(Error("Invalid Input: Input should be a number"));
    });