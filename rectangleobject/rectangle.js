function Rectangle(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error("Invalid dimensions: Length and width must be numeric values");
    }

   else if (a <= 0 || b <= 0) {
        throw new Error("Invalid dimensions: Length and width must be greater than 0");
    }

    this.length = a;
    this.width = b;
    this.perimeter = 2 * (a + b);
    this.area = a * b;
};

module.exports=Rectangle;