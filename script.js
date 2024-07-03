// Exercises variables data types
console.log(`Hello, World!`);

// Exercise 1
console.log(`Exercise 1`);
let age = 28;
// There are two versions
console.log(`I am ` + age + ` years old`);
console.log(`I am ${age} years old`);

// Exercise 2
console.log(`Exercise 2`);
var myAge = 28;
let myTown = `Vallentuna`;
const myName = `Louise`;
console.log(`Hello! My name is ${myName}, I am ${age} years old. I live in ${myTown}`);

// Exercise 3
console.log(`Exercise 3`);
var FavoriteMovie = "Interstellar";
let myBike = "Crescent";
const myHouse = "House";
console.log(
  `My favorite movie is ${FavoriteMovie}. My bike is a ${myBike}. I live in a ${myHouse}`
);

// Exercise 4
console.log(`Exercise 4`);
const name1 = "Louise";
console.log(name1);
//name2 = `Kristina`;
//console.log(name2);
//console.log(`${name}`); // use backticks
//const name = "Kristina";
//console.log(`${name}`);

// Exercise 5
// We can use a boolean value when we need true or false values, like in conditional statements, loops, logical parameters

// Exercise 6
// If we do not want to change the value of a variable, we should use const. Const stands for constant.

// Exercise 7
console.log(`Exercise 7`);
let number1 = 9;
let number2 = 3;
let result = number1 + number2;
console.log(result);

// Exercise 8
console.log(`Exercise 8`);
let result1 = number1 - number2;
let result2 = number1 * number2;
let result3 = number1 / number2;

console.log(result1);
console.log(result2);
console.log(result3);

// Exercise 9
console.log(`Exercise 9`);
let a = 1;
console.log(a);
a = a + 5;
console.log(a);
// other way to write
a += 5;
console.log(a);

// Exercise 10
console.log(`Exercise 10`);
let b = 10; // a is 10
b = b - 4; // 10 - 4 is 6
b = 7; // a is 7, overwrites previous value
b = b + 2; // new value becomes 9 (7 + 2 = 9)

console.log(b);
// The value is 9 in the end. After initially assigning it 10, it gets reassigned several times first to 6 then directly to 7, and finally 9

// Other way to write
// let b = 10;
//b -= 4;
//b = 7;
//b += 2;
//console.log(b);
