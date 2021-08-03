var bottleColor = "Light Green";
var waterQuantity = 2;
var isFull = false;

// Array 
var items = ['Bottle', 'Mug', 'Paper', 'pen', 'Mobile'];
items.indexOf('logens');  // -1
items.push("Watch");
items.pop();

// condition 
if (items.length >= 4) {
    console.log('You have too many stuff on your desk.')
}
else if (items == 4) {
    console.log('You only have one hali items')
}
else {
    console.log('WOW! You have a clean desk.')
}