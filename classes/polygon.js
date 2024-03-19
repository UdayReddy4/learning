class Polygon{
    constructor(sides){
        if(!Array.isArray(sides) || !sides.every(side =>Number.isInteger(side) && side >=0)){
            throw new Error('invalid input, Input must be an array of positive integer.');
        }
        else{
            this.sides = sides;
        }
    }
    perimeter(){
        let sum = 0;
        for (let i of this.sides){
            sum+=i;

        }
        return sum;
    }
}
module.exports = Polygon;