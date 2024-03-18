function throws(n) {
    if (isNaN(n) || !Number.isInteger(n)) {
        throw new Error('Invalid input: Input must be an integer.');
    }

    if (n % 2 !== 0) {
        return "Weird";
    } else {
        if (n >= 2 && n <= 5) {
            return "Not Weird";
        } else if (n >= 6 && n <= 20) {
            return "Weird";
        } else {
            return "Not Weird";
        }
    }
}
module.exports= throws;