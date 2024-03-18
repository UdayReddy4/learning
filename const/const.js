function calculateCircleArea(radius) {
    if (radius < 0) {
        throw new Error('Radius cannot be negative');
    }
    return Math.PI * radius * radius;
}

function calculateCirclePerimeter(radius) {
    if (radius < 0) {
        throw new Error('Radius cannot be negative');
    }
    return 2 * Math.PI * radius;
}

module.exports = { calculateCircleArea, calculateCirclePerimeter };
