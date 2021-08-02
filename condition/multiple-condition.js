var gotJob = false;
var moneySaved = 200000;
var hasFlat = true;
var hasHouse = true;

if (gotJob == true && moneySaved > 250000) {
    console.log("Biya Done !!!!!!!!!!!!")
}
else {
    console.log('Kopale Biya Nai !!!!!!!!!!')
}



if (gotJob == true && moneySaved > 250000 && hasFlat == true) {
    console.log("Biya Done !!!!!!!!!!!!")
}
else {
    console.log('Kopale Biya Nai !!!!!!!!!!')
}



if (gotJob == true || moneySaved > 250000) {
    console.log("Biya Done !!!!!!!!!!!!")
}
else {
    console.log('Kopale Biya Nai !!!!!!!!!!')
}



if ((gotJob == true && moneySaved > 250000) || hasHouse == true) {
    console.log("Biya Done !!!!!!!!!!!!")
}
else {
    console.log('Kopale Biya Nai !!!!!!!!!!')
}


