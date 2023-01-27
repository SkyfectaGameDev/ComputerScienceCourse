// ----- Introduction to Functions -----
const holidayDestination = () =>
{
    console.log("I'm going on holiday!");
}
holidayDestination();
console.log();

// ----- Say Hello Activity -----
const sayHello = () =>
{
    console.log("Hello, how are you?");
}
sayHello();
console.log();

// ----- Parameters Activity -----
const sayHello2 = (myName, drink) =>
{
    console.log(`Hello, my name is ${myName}. Would you like a ${drink}?`);
}
sayHello2("Alisha", "Coffee");
console.log();

// ----- Return Example -----
const multiply = (num1, num2) =>
{
    return num1 * num2;
}
console.log(multiply(2,5));
console.log();

// ----- Decleration Function Example -----
function addMe(num1, num2)
{
    return num1 + num2;
}
console.log(addMe(4,5));
console.log()

// ----- Expression/Anonymous Function Example -----
const addMe2 = function(num1, num2)
{
    return num1 + num2;
}
console.log(addMe2(12,23));
console.log()