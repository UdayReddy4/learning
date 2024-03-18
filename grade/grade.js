function getGrade(score) {
    if(isNaN(score)){
        throw new Error('Input is not a number');
    }
    
    let grade;
    
    if(score > 25 && score <= 30){
        grade = "A";
    }
    else if(score > 20 && score <= 25){
        grade = "B";
    }
    else if(score > 15 && score <= 20){
        grade = "C";
    }
    else if(score > 10 && score <= 15){
        grade = "D";
    }
    else if(score > 5 && score <= 10){
        grade = "E";
    }
    else if(score >= 0 && score <= 5){
        grade = "F";
    }
    else {
        throw new Error('Input score is out of range');
    }
    
    return grade;
}


module.exports =getGrade;