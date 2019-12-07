function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    if (dolphin === true) {
        sharkSpeed = sharkSpeed / 2;
    }
    var howLongYou = pontoonDistance / youSpeed;
    var howLongShark = sharkDistance / sharkSpeed;
    return howLongShark > howLongYou ? "Alive!" : "Shark Bait!";
}