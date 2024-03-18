function isPositive(a) {

    if(a > 0){
        return "YES";
    }
    else if(a === 0){
        throw new Error("Zero Error");
        
    }
    else if (typeof a === 'string') {
        throw new Error("Invalid Input: Input should be a number");
    }
    else{
        throw new Error("Negative Error");
        
    }
    
};
module.exports = isPositive;