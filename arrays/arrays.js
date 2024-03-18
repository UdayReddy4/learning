
function getSecondLarCgest(nums) {

    if (!Array.isArray(nums) || nums.length === 0) {
        throw new Error("Input should be a non-empty array");
    }
    // Sort the array in descending order
    nums.sort((a, b) => b - a);
    
    // Find the second element
    let secondLargest = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < secondLargest) {
            return nums[i];
        }
    }
    // If there is no distinct second largest, return the largest number
    return secondLargest;
}

module.exports = getSecondLarCgest;