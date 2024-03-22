function getMaxLessThanK(n, k) {

    if (k > n) {
        throw new Error("Invalid input: k must be less than n.");
    }
    let max = 0;
    for (let a = 1; a <= n; a++) {
        for (let b = a + 1; b <= n; b++) {
            let current = a & b;
            if (current < k && current > max) {
                max = current;
            }
        }
    }
    return max;
}

 module.exports=getMaxLessThanK;