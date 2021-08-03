// Break
var i = 0;
while (i < 15) {
    console.log(i);
    if (i == 7) {
        break;
    }
    i++;
}

for (var i = 0; i < 20; i++) {
    console.log(i);
    if (i == 10) {
        break;
    }
}

var numbers = [21, 32, 43, 54, 65, 76, 87, 98, 90, 101, 95, 345, 54, 87];

for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    console.log(number);
    if (number > 100) {
        break;
    }
}

// Continue
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 90) {
        continue;
    }
    console.log(number);
}