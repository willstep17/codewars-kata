function generateRange(min, max, step){
    var returnArray = [];
    for (var i = min; i <= max; i += step) {
        returnArray.push(i);
    }
    return returnArray;
}