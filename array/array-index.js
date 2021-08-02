// Element er position 
var bookPages = ['Gulapo', 'Chhora', 'Kobita', 'Gaan', 'Songgit'];

var elementPosition = bookPages.indexOf('Kobita');
console.log(elementPosition);    // Value na thakle result asbe = -1

// Position ki ase dekhaaa 
var elementPositionWho = bookPages[3];
console.log(elementPositionWho);      // Value na thakle result asbe = Undefined

// Elements value change 
bookPages[3] = 'Song';
console.log(bookPages);