function howManySmaller(arr,n){
    var smaller = 0;
    for(let i=0;i<arr.length;i++) {
        if(arr[i].toFixed(2) < n) {
            smaller++;
        }
    }
    return smaller;
}