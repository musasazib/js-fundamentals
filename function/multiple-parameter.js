function addTwoNumbers(number1, number2) {
    console.log(number1, number2);
    var total = number1 + number2;
    return total;
}
var firstNumber = 35;
var secondNumber = 47;
var result = addTwoNumbers(firstNumber, secondNumber);
console.log('Result value:', result);


function multiplyTwoNumbers(num1, num2) {
    var result = num1 * num2;
    return result;
}
var total = multiplyTwoNumbers(5, 100);
console.log('Total after multiplication', total);


function biyogTwoNumbers(number1, number2) {
    var biyogResult = number1 - number2;
    return biyogResult;
}
var valoAsi = 75;
var valoNai = 80;
var result = biyogTwoNumbers(valoAsi, valoNai);
console.log('Moner obostha:', result);