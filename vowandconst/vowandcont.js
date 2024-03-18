
function vowelsAndConsonants(s) {
    if (typeof s !== 'string') {
        throw new Error('Input must be a string');
    }

    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelChars = '';
    let consonantChars = '';

    for (let char of s) {
        if (vowels.includes(char)) {
            vowelChars += char;
        } else {
            consonantChars += char;
        }
    }

    return vowelChars + consonantChars;
}


module.exports = vowelsAndConsonants;