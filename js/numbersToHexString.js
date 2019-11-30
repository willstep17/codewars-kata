function colorOf(r,g,b){
    var red = r.toString(16);
    if(red.length === 1) {
        red = "0" + red;
    }
    var green = g.toString(16);
    if(green.length === 1) {
        green = "0" + green;
    }
    var blue = b.toString(16);
    if(blue.length === 1) {
        blue = "0" + blue;
    }
    return "#" + red + green + blue;
}