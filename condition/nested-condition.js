var danishPrice = 50;
var butterBreadPrice = 25;
var toastBiscuitPrice = 10;
var myBudget = 60;
var packedWell = true;

if (danishPrice < myBudget) {
    console.log("Danish khaye danish jaboo");
}
else if (butterBreadPrice < myBudget) {
    console.log("Butter Bread is best");
}
else if (toastBiscuitPrice < myBudget) {
    console.log("Toast Biscuit diye Chaaa");
}
else {
    console.log('Poket Faka ')
}


if (danishPrice < myBudget) {
    if (packedWell == true) {
        console.log('Yes!!!!!!!!!! Danish good');
    }
    else {
        console.log('No!!!!!!!!!!!! Danish bad');
    }
}
else {
    console.log('Danish khabo naaaaaaa')
}