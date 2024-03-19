const { Rectangle, Square } = require('./rectangle'); // Change 'your-file-name' to the actual file name

test('Area of Rectangle with width 5 and height 4 should be 20', () => {
    const rectangle = new Rectangle(5, 4);
    expect(rectangle.area()).toBe(20);
});
test('Area of Square with side 5 should be 25', () => {
    const square = new Square(5);
    expect(square.area()).toBe(25);
});
test('Creating a Rectangle with number inputs should not throw an error', () => {
    expect(() => new Rectangle(5, 5)).not.toThrow();
});
test('Creating a Rectangle with string inputs should throw an error', () => {
    expect(() => new Rectangle('a', 5)).toThrowError('Both width and height must be numbers');
});