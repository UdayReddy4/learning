
 
function getCount(objects) {
    if (!Array.isArray(objects)) {
        throw new Error("Invalid input type. Expected an array.");
    }

    let count = 0;
    for (let i = 0; i < objects.length; i++) {
        if (typeof objects[i].x !== 'number' || typeof objects[i].y !== 'number') {
            throw new Error("Invalid object type.");
        }
        if (objects[i].x === objects[i].y) {
            count++;
        }
    }
    return count;
}
module.exports=getCount;
