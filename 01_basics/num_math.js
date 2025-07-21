var balance = new Number (100) 
console.log(balance);
//Output : [Number : 100] // can opertae Number functions

console.log(balance.toString().length);
//Output : 3 //string length

console.log(balance.toFixed(1));
//Output : 100.0 //Decimal Value

var otherNumber = 1123.8966
console.log(otherNumber.toPrecision(3))
;
//Output : 124 // consider staring or precised value, rather than the whole value.


const hundereds = 10000000
console.log(hundereds.toLocaleString());
// Output : 1,000,000 // according to US scale.

console.log(hundereds.toLocaleString('en-IN'));
//Ouput : 10,00,000 // changed to Indian Scale



// M A T H S in Js
// math is a inbuilt library in js, It is consdiered as an object(key , value) having some function like sqrt, abs, pow.

console.log(Math.abs(-6));
console.log(Math.round(4.3));
console.log(Math.ceil(4.3)); // Top element i.e. 5
console.log(Math.floor(4.3)); // Bottom element i.e. 4


console.log(Math.min(4,9,2,6,1,7,3));
console.log(Math.max(4,9,2,6,1,7,3));

console.log(Math.random()); // Default Range : 0-1.
console.log(Math.random()*10); //  Range : Shifted values from 0.4 or0.2 to .
console.log(Math.random()*10 + 1); //   10. +1 : rsnge 1-9, avoiding "0"


const min = 10;
const max = 20
console.log(Math.random()*10 + 1); //   10. +1 : rsnge 1-9, avoiding "0"
console.log(Math.random()*10 + 1); //   10. +1 : rsnge 1-9, avoiding "0"





