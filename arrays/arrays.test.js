const getSecondLargest = require('./arrays'); 

describe('getSecondLargest', () => {
    test('should return the second largest number in the array', () => {
        expect(getSecondLargest([1, 2, 3, 4, 5])).toBe(4);
    });

    test('should return the second largest number in the array with duplicate numbers', () => {
        expect(getSecondLargest([5, 5, 4, 4, 3, 3])).toBe(4);
    });

    test('should handle negative numbers', () => {
        expect(getSecondLargest([-1, -2, -3, -4, -5])).toBe(-2);
    });

    test('should throw an error for empty array', () => {
        expect(() => {
            getSecondLargest([]);
        }).toThrow('Input should be a non-empty array');
    });
});
