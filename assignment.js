
function kilometerToMeter(kilometer){
    var meter = kilometer*1000;
    return meter;
}
var result=kilometerToMeter(10);


function budgetCalculator(){

}

function hotelCost(rent){
    cost = 0;
    if(rent<=10){
        cost=rent*100;
    }
    else if(rent<=20){
        firstPart = 10 * 100;
        var remaining = rent - 10;
        secondPart = remaining * 80;
        cost = firstPart + secondPart ;
    }
    else{
        firstPart = 10 * 100;
        secondPart = 20 * 80;
        var remaining = rent - 20;
        thirdPart = remaining * 50;
        cost = firstPart + secondPart + thirdPart;
    }
    return cost;
}


megaFriend