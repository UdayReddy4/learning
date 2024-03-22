function getDayName(dateString) {
    // if (typeof dateString !== 'string' || !/^[a-zA-Z0-9]+$/.test(dateString)) {
    //     throw new Error("Invalid input: Date string must contain only characters and numbers.");
    // }
    let dayName;

     let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
     
    let date = new Date(dateString);

     if (isNaN(date)) {
        throw new Error("Invalid date");
    }
    let dayIndex = date.getDay();
     dayName = daysOfWeek[dayIndex];
    return dayName;
}

 module.exports=getDayName;