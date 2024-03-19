class Rectangle {

    constructor(w, h) {
        if (typeof w !== 'number' || typeof h !== 'number') {
            throw new Error('Both width and height must be numbers');
        }
        this.w = w;
        this.h = h;
    }


/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 */
   area() {
    return this.w * this.h;
   }
}
 /* Create a Square class that inherits from Rectangle and implement its class constructor
 */
class Square extends Rectangle{
    constructor(side){
        super(side,side)
    }
}
module.exports={Rectangle,Square};
