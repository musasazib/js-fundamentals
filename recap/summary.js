// Variable -------------------

var skyColor = "white";

// Array ----------------------

var phone = ['iPhone', 'Poco', 'Samsung', 'Realme', 'Vivo'];
phone[3] = 'Redmi';

// Check oppo not exists in an array
if (phone.indexOf('Oppo') == -1) {
    console.log('Oppo! Amir Khan Oppo missing')
}
// if vivo is available
if (phone.indexOf('Vivo') != -1) {
    console.log('Vivo phone is available now');
}

// Loop -------------------------

var num = 0;
while (num <= 10) {
    num++
}

for (var i = 0; i < phone.length; i++) {

}

// Function ----------------------------

function addThreeNumbers(number1, number2, number3) {
    var total = number1 + number2 + number3;
    return total;
}
addThreeNumbers(30, 20, 10);

// Object ----------------------

var earphone = {
    brand: 'UiiSii',
    price: 450,
    color: 'black'
}