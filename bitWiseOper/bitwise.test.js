const getMaxLessThanK = require('./bitwise')


describe('getMaxLessThanK function', () => {
    test('should return the maximum value less than k for n=9 and k=2', () => {
        expect(getMaxLessThanK(9, 2)).toBe(1);
    });

    test('should return the maximum value less than k for n=8 and k=3', () => {
        expect(getMaxLessThanK(8, 3)).toBe(2);
    });

    test('should throw an error when k is greater than n', () => {
        expect(() => {
            getMaxLessThanK(3, 5);
        }).toThrow("Invalid input: k must be less than n.");
    });

    test('should return 0 when n=1 and k=1', () => {
        expect(getMaxLessThanK(1, 1)).toBe(0);
    });
    test('should return the maximum value less than k for n=6 and k=4', () => {
        expect(getMaxLessThanK(6, 4)).toBe(2);
    });
    test('should return 0 when n=9 and k=9', () => {
        expect(getMaxLessThanK(0, 0)).toEqual(0);
    });
    test('should throw an error when k is greater than n', () => {
        expect(() => {
            getMaxLessThanK(7, 9);
        }).toThrow("Invalid input: k must be less than n.");
    });

});
