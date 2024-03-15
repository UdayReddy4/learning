
    function factorial(n) {
        if (n === 0 || n === 1) {
            return 1;
        } else {
            let result = 1;
            for (let i = 2; i <= n; i++) {
                result *= i;
            }
            return result;
        }
    }
    
    // Example usage:
    const number = 5;
    console.log("Factorial of", number, "is", factorial(number));

    module.export= factorial;