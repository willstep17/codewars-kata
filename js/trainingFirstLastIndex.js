function firstToLast(str,c){
    var first = str.indexOf(c), last = str.lastIndexOf(c);
    if(first === -1) {
        return first;
    } else {
        return last - first;
    }
}