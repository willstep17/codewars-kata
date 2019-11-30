function giveMeFive(obj){
    var returnArray = [];
    for(var key in obj) {
        if(key.length === 5) {
            returnArray.push(key);
        }
        if(obj[key].length === 5) {
            returnArray.push(obj[key]);
        }
    }
    return returnArray;
}