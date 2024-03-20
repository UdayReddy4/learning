const sides = require('./literals');

describe('sides function', () => {
    it('should calculate sides for valid area and perimeter', () => {
        const area = 20;
        const perimeter = 24;
        const expectedSides = [2, 10];
        expect(sides(area, perimeter)).toEqual(expectedSides);
    });


    it('should return NaN for non-numeric input', () => {
        const area = 'abc';
        const perimeter = 'def';
        expect(sides(area, perimeter)).toEqual([NaN, NaN]);
    });

    it('should return NaN for negative area', () => {
        const area = -5;
        const perimeter = 20;
        expect(sides(area, perimeter)).toEqual([NaN, NaN]);
    });

    it('should return NaN for negative perimeter', () => {
        const area = 25;
        const perimeter = -10;
        expect(sides(area, perimeter)).toEqual([NaN, NaN]);
    });

    
});