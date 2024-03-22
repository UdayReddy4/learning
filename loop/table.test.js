
const main =require('./table')

describe('main function', () => {
    test('should throw error if input is not a number', () => {
      expect(() => main('abc')).toThrow('Input must be a number');
    });
  
    test('should throw error if input is not an integer', () => {
      expect(() => main(5.5)).toThrow('Input must be a number');
    });
  
    test('should throw error if input is zero', () => {
      expect(() => main(0)).toThrow('Input must be a number');
    });
  
    test('should throw error if input is negative', () => {
      expect(() => main(-5)).toThrow('Input must be a number');
    });
  
    test('should print multiplication table for positine integer', () => {
      const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
      main(5);
      expect(consoleLogSpy).toHaveBeenCalledTimes(10); // Check if console.log is called 10 times
      expect(consoleLogSpy).toHaveBeenCalledWith('5 x 1 = 5');
      expect(consoleLogSpy).toHaveBeenCalledWith('5 x 2 = 10');
      consoleLogSpy.mockRestore(); // Restore console.log
    });
  });