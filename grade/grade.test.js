const getGrade = require('./grade'); // Assuming the getGrade function is in a separate file called getGrade.js

describe('getGrade function', () => {
    it('should return correct grade for valid scores', () => {
        expect(getGrade(28)).toBe('A');
        expect(getGrade(23)).toBe('B');
        expect(getGrade(18)).toBe('C');
        expect(getGrade(13)).toBe('D');
        expect(getGrade(8)).toBe('E');
        expect(getGrade(3)).toBe('F');
    });

    it('should throw an error for non-numeric input', () => {
        expect(() => {
            getGrade('hello');
        }).toThrow('Input is not a number');
    });

    it('should throw an error for out-of-range scores', () => {
        expect(() => {
            getGrade(-1);
        }).toThrow('Input score is out of range');

        expect(() => {
            getGrade(31);
        }).toThrow('Input score is out of range');
    });
});
