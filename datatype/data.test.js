const performOperation =require('./data')


test('Test Case 1', () => {
    // Mocking console.log to capture the output
    const consoleLog = jest.spyOn(console, 'log').mockImplementation();
    performOperation("7", "3.5", "is awesome");

    // Expectations
    expect(consoleLog).toHaveBeenNthCalledWith(1, 11);                    // sum of firstInteger and secondInteger
    expect(consoleLog).toHaveBeenNthCalledWith(2, 7.5);                   // sum of firstDecimal and secondDecimal
    expect(consoleLog).toHaveBeenNthCalledWith(3, 'HackerRank is awesome'); // concatenation of firstString and secondString


    // Restoring console.log
    consoleLog.mockRestore();
});

test('Test Case 2', () => {
    const consoleLog = jest.spyOn(console, 'log').mockImplementation();
    performOperation("-2", "-1.5", "");

    expect(consoleLog).toHaveBeenNthCalledWith(1, 2);
    expect(consoleLog).toHaveBeenNthCalledWith(2, 2.5);
    expect(consoleLog).toHaveBeenNthCalledWith(3, 'HackerRank ');

    consoleLog.mockRestore();
});

test('Test Case 3', () => {
    const consoleLog = jest.spyOn(console, 'log').mockImplementation();
    performOperation("0", "0", "!@#$%");

    expect(consoleLog).toHaveBeenNthCalledWith(1, 4)
    expect(consoleLog).toHaveBeenNthCalledWith(2,5.0);
    expect(consoleLog).toHaveBeenNthCalledWith(3, 'HackerRank !@#$%');

    consoleLog.mockRestore();
});