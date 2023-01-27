// ----- Variable Basics -----
let a = 10;                                         // let is a variable that can be changed within the block it's defined in.
const b = 10;                                       // const is a variable that cannot be changed.
var c = 10;                                         // var is a variable that can be changed wboth within and outside of the block it's defined in.

// ----- Printing Variables to Console Task -----
let firstName = "Alisha";
let age = 21;
let universityStudent = false;
let favColour = "Purple"

console.log("My name is ", firstName);
console.log("I am ", age, " years old");
console.log("My current university status is", universityStudent);
console.log();

firstName = "Ellie";
age = 24;
universityStudent = true;

console.log("My name is ", firstName);
console.log("I am ", age, " years old");
console.log("My current university status is", universityStudent);
console.log();

console.log(`Hello, my name is ${firstName}, I am ${age} years old, and my favourite colour is ${favColour}.`);