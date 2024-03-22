const getDayName =require('./dates')

describe('getDayName function', () => {
    // it('should return the correct day name for a valid date string (Saturday)', () => {
    //     expect(getDayName('2024-03-24')).toBe('monday');
    // });
it('should throw an error for an invalid date string', () => {
    expect(() => {
        getDayName('date is not working');
    }).toThrow('Invalid date');
});

it('should handle upper and lower case characters in the date string', () => {
    expect(getDayName('2024-03-22')).toBe(getDayName('2024-03-22'));
    expect(getDayName('2024-03-22')).toBe(getDayName('2024-03-22'.toUpperCase()));
    expect(getDayName('2024-03-22')).toBe(getDayName('2024-03-22'.toLowerCase()));
});

// it('should handle different date formats', () => {
//     expect(getDayName('03/22/2024')).toBe('Tuesday');
//     expect(getDayName('22-03-2024')).toBe('Tuesday');
//     expect(getDayName('Mar 22, 2024')).toBe('Tuesday');
// })
});
