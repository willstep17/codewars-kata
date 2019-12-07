function array(arr){
    var realArray = arr.split(",");
    if(realArray.length < 3) {
        return null;
    } else {
        realArray.shift();
        realArray.pop();
        var finalString = realArray.join(" ");
        return finalString;
    }
}