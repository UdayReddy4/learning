function solve(meal_cost, tip_percent, tax_percent) {
    // Write your code here
    if (typeof meal_cost !== 'number' || typeof tip_percent !== 'number' || typeof tax_percent !== 'number') {
        throw new Error('Invalid input: Arguments must be numbers.');
    }

    if (meal_cost < 0 || tip_percent < 0 || tax_percent < 0) {
        throw new Error('Invalid input: Arguments cannot be negative.');
    }

    const tip = (meal_cost * tip_percent) / 100;
    const tax = (meal_cost * tax_percent) / 100;
    const totalCost = meal_cost + tip + tax;
    return Math.round(totalCost); 
};
module.exports = solve;