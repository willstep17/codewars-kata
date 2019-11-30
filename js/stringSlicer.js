function cutIt(arr){
    var shortestString = arr[0];
    for(var i=0;i<arr.length;i++) {
        if(arr[i].length < shortestString.length) {
            shortestString = arr[i];
            console.log(shortestString);
        }
    }
    for(var j=0;j<arr.length;j++) {
        arr[j] = arr[j].slice(0, shortestString.length);
    }
    return arr;
}