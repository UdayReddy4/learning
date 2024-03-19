// Importing the Rectangle class from the provided code
const Rectangle = require('./rectangle');

describe('Rectangle', () => {
    test('Valid dimensions', () => {
        const rec = new Rectangle(5, 10);
        expect(rec.length).toBe(5);
        expect(rec.width).toBe(10);
        expect(rec.perimeter).toBe(30);
        expect(rec.area).toBe(50);
    });

    test('Invalid dimensions: Length zero', () => {
        expect(() => new Rectangle(0, 10)).toThrow('Invalid dimensions: Length and width must be greater than 0');
    });

    test('Invalid dimensions: Width zero', () => {
        expect(() => new Rectangle(5, 0)).toThrow('Invalid dimensions: Length and width must be greater than 0');
    });

    test('Invalid dimensions: String', () => {
        expect(() => new Rectangle('invalid', 10)).toThrow('Invalid dimensions: Length and width must be numeric values');
    });
});
