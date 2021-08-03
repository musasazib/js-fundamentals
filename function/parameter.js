function bringSingara(taka) {
    console.log('Singara Price', taka);
}
var money = 200;
bringSingara(money);




function bringSingara(taka) {
    console.log('Singara Price', taka);
    var singaraPrice = 10;
    var singaraQuantity = taka / singaraPrice;
    return singaraQuantity
}
var money = 200;
var singara = bringSingara(money);
console.log('Singara', singara, 'pice');