'use strict';

// function isInteger(num) {
//   return (num ^ 0) == num;
// }

// alert( isInteger (1)); // true
// alert( isInteger (1.5)); // false
// alert( isInteger (-0.5)); // false




// Верно ли, что для любых a и b выполняются равенства ниже?
let a, b;

alert ((a ^ b) == (b ^ a));
alert ((a & b) == (b & a));
alert ((a | b) == (b | a));  
// так


// Почему побитовые операции в примерах ниже не меняют число? Что они делают внутри?
alert( 123 ^ 0 ); 
alert( 0 ^ 123 ); 
alert( ~~123 ); 
// ~ перетворює 0 в 1, і навпаки; ~~ нічого не змінює


