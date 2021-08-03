var computer = {
    price: 29000,
    color: 'Silver',
    Storage: '156gb',
    processor: 'intel i5'
}
console.log(computer);
console.log(computer.processor);
// set a object properties value
computer.price = 22000;
console.log(computer);
var computerPrice = computer.price;
console.log(computerPrice);

// Different ways to set a value of an object property
var priceProperty = 'price';

computer.price = 20000;
computer['price'] = 23000;
computer[priceProperty] = 25000;

var storageProperty = 'Storage';
computer[storageProperty] = '512gb';

computer['color'] = "Light Silver";

computer.processor = 'intel core i5';

console.log(computer);