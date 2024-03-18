function reverseString(s) {
    if (typeof s !== 'string') {
        throw new Error("Input is not a string");
    }

    try {
     
        return s.split('').reverse().join('');
        console.log(reverse);
    } catch (error) {
        console.log("Error occurred while reversing the string:", error.message);
        return ''; // Return an empty string in case of error
    }
};


module.exports = reverseString;