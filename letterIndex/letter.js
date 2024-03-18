function getLetter(s) {
    // Check if the input is a string
    if (typeof s !== 'string') {
        throw new Error('Input must be a string');
    }

    // Check if the input string is empty
    if (s.length === 0) {
        throw new Error('Input string cannot be empty');
    }

    let letter;
    const firstChar = s[0].toLowerCase(); // Convert to lowercase for case-insensitivity
    switch (firstChar) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            letter = 'A';
            break;
        case 'b':
        case 'c':
        case 'd':
        case 'f':
        case 'g':
            letter = 'B';
            break;
        case 'h':
        case 'j':
        case 'k':
        case 'l':
        case 'm':
            letter = 'C';
            break;
        default:
            letter = 'D';
    }
    
    return letter;
}

module.exports = getLetter;
