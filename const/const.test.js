const { calculateCircleArea, calculateCirclePerimeter } = require('./const');

describe('Circle calculations', () => {
    test('should calculate the area correctly', () => {
        expect(calculateCircleArea(5)).toBeCloseTo(78.53982); // Rounding to 5 decimal places
        expect(calculateCircleArea(10)).toBeCloseTo(314.15927); // Rounding to 5 decimal places
    });

    test('should calculate the perimeter correctly', () => {
        expect(calculateCirclePerimeter(5)).toBeCloseTo(31.41593); // Rounding to 5 decimal places
        expect(calculateCirclePerimeter(10)).toBeCloseTo(62.83185); // Rounding to 5 decimal places
    });

    test('should throw an error if radius is negative', () => {
        expect(() => calculateCircleArea(-5)).toThrow('Radius cannot be negative');
        expect(() => calculateCirclePerimeter(-5)).toThrow('Radius cannot be negative');
    });
});