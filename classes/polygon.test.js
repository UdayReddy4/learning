const Polygon = require('./polygon');

describe('Polygon', () => {
    describe('constructor', () => {
        test('should create a Polygon object with given side lengths array', () => {
            const polygon = new Polygon([3, 4, 5]);
            expect(polygon.sides).toEqual([3, 4, 5]);
        });

        test('should throw an error if sides is not an array', () => {
            expect(() => new Polygon("not an array")).toThrow('invalid input, Input must be an array of positive integer.');
        });

        test('should throw an error if sides contain non-integer elements', () => {
            expect(() => new Polygon([3, 4.5, 5])).toThrow('invalid input, Input must be an array of positive integer.');
        });

        test('should throw an error if sides contain negative elements', () => {
            expect(() => new Polygon([3, 4, -5])).toThrow('invalid input, Input must be an array of positive integer.');
        });
    });

    describe('perimeter', () => {
        test('should calculate the perimeter of a polygon with given side lengths', () => {
            const polygon = new Polygon([3, 4, 5]);
            expect(polygon.perimeter()).toBe(12);
        });

        test('should return 0 for a polygon with no sides', () => {
            const polygon = new Polygon([]);
            expect(polygon.perimeter()).toBe(0);
        });
    });
});
