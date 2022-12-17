// ARITHMETIC OPERATORS

// let x = 10;
// let y = 3;

// console.log(x + y);  //addition operator
// console.log(x - y);  //subtraction operator
// console.log(x * y);  //multiplication operator
// console.log(x / y);  //division operator
// console.log(x % y);  //remainder of division operator
// console.log(x ** y);  //exponentiation operator (x to the power of y)

// console.log(++x); // increment (+1)
// console.log(--x); //decrement (-1)







// ASSIGNMENT OPERATORS

// let x = 10;

// x = x + 5;
// x += 5;

// x = x * 3;
// x *= 3;







// // COMPARISON OPERATOR

// let x = 1;

// //Relational 

// console.log(x > 0);
// console.log(x >= 1);
// console.log(x < 1);
// console.log(x <= 1);

// //Equality 

// console.log(x === 1);
// console.log(x !== 1); // not equal






//EQUALITY OPERATORS

// //Strict equality (type + value)

// console.log(1 === 1); //true
// console.log('1' === 1); // false

// //Lose equality (value)
// console.log(1 == 1);     //true
// console.log('1' == 1);   //true
// console.log(true == 1);  //true





//TERNARY OPERATOR 

// let points = 90;
// let type = points > 100 ? 'gold' : 'silver';

// console.log(type);





// LOGICAL OPERATORS 

// logical AND (&&) returns true if both operational are TRUE

// console.log(true && false); //return false

// let highIncome = false;
// let goodCreditScore = true;
// let eligibleForLoan = highIncome && goodCreditScore;

// console.log( 'Eligible', eligibleForLoan);

// // logical OR(||) returns TRUE if one of the operands is TRUE

// //NOT (!) will produce the opposed 
// let applicationRefused = ! eligibleForLoan;
// console.log('Application refused', applicationRefused);




// LOGICAL OPERATORS WITH NON-BOOLEANS 

// Falsy (false)
// Undefined
// Null
// 0
// false
// ''
// NaN

// Anything that is not Falsy -> Truthy

// Short-circuiting    false || 1 || 2       = 1

// // Example
// let userColor = undefined;
// let defaultColor = 'blue';
// let currentColor = userColor || defaultColor;

// console.log(currentColor);