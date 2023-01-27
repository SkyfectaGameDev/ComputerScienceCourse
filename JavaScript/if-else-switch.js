// ----- If, Else If & Else Statements -----

let music = "dance";

// ----- String Equals Statements -----
if (music == "classical")
{
    console.log("Oh, how relaxing.")
}
else if (music == "disco")
{
    console.log("Where are my dancing shoes?")
}
else if (music == "dance")
{
    console.log("Where's the party?")
}
else
{
    console.log("Turn it down.")
}
console.log();

// ----- Statement types -----

// ==   Checks if values are equal.
// ===  Checks if values and types are equal.
// !=   Checks if values are not equal.
// !==  Checks if values and types are not equal.
// >=   Checks if parameter 1 is greater than or equal to parameter 2.
// >    Checks if parameter 1 is greater than parameter 2.
// <=   Checks if parameter 1 is less than or equal to parameter 2.
// <    Checks if parameter 1 is less than parameter 2.
// %    Returns the remainder after parameter 1 is divided by parameter 2.

if ( 4 === "4")
{
    console.log(true);
}
else
{
    console. log (false);
}

if ( 4 != "4")
{
    console.log(true);
}
else
{
    console. log (false);
}
console.log();

// ----- Age & Country Activity -----
let age     = 21;
let country = "UK"

if (age > 17 || country == "UK")
{
    console.log("What would you like?")
}
else
{
    console.log("Sorry, but you aren't old enough.")
}
console.log();

// ----- Food Activity -----
let food    = "ice cream";
let hunger  = "full";

if (hunger == "full" && food == "ice cream")
{
    console.log("Of course, who wouldn't?");
}
else if (hunger == "hungry && food" == "ice cream")
{
    console.log("Yes please - I'm starving. Could I also have a pizza?");
}
else if (hunger == "hungry" && food == "sprouts")
{
    console.log("Actually, I can wait...");
}
else
{
    console.log("No thanks, I'm stuffed");
}
console.log();

// ----- Food Activity 2 -----
food    = "chps";

if (food == "ice cream" || food == "pizza")
{
    console.log("Let's eat!");
}
else if (food == "sprouts" || food == "broccoli")
{
    console.log("No thanks.");
}
else
{
    console.log("Sure, why not.");
}
console.log();

// ----- Weekend Alarm Activity -----
let day = "Saturday";

if (day == "Saturday" || day == "Sunday")
{
    console.log("Ah, it's the weekend!")
}
else
{
    console.log("Oh no, work again...")
}
console.log();

// ----- Switch Case Activity -----
food = "sprouts";

switch (food)
{
    case "ice cream":
    case "pizza":
        console.log("Delicious!");
        break;
    case "sprouts":
    case "broccoli":
        console.log("Disgusting...");
        break;
    default:
        console.log("Sure, why not.")
}
console.log();

// ----- Pizza Toppings Activity -----
let topping = "pepperoni";

switch (topping)
{
    case "pepperoni":
    case "chicken":
    case "bacon":
    case "sweetcorn":
        console.log("One of my favourite pizza toppings!");
        break;
    case "peppers":
    case "beef":
        console.log("Not my favourite, but I don't mind it.");
        break;
    case "onion":
    case "anchovies":
        console.log("Keep those away from my pizza!");
}
console.log();

// ----- Password Activity -----
let password = "Password_123";

if (password.length <= 8)
{
    console.log("Password is too short.");
}
else
{
    console.log(password);
}
console.log();

// ----- Fizz Buzz Activity -----
let num = 15;

if (num % 3 == 0 && num % 5 != 0)
{
    console.log("Fizz");
}
else if (num % 5 == 0 && num % 3 != 0)
{
    console.log("Buzz");
}
else if (num % 3 == 0 && num % 5 == 0)
{
    console.log("Fizz Buzz");
}
else
{
    console.log(num);
}
console.log();

// ----- Work Time Activity -----
let time = 8;
let placeOfWork = 9;
let townOfHome = 7;

if (time <= townOfHome)
{
    console.log(`At ${time}am, I will be at home.`);
}
else if (time >= placeOfWork)
{
    console.log(`At ${time}am, I will be at work.`);
}
else
{
    console.log(`At ${time}am, I will be commuting.`);
}
console.log();

// ----- Last Vowel Activity -----
let lastVowel = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";

console.log("Last vowel positions in rising order:")

console.log("a:", lastVowel.lastIndexOf("a"));
console.log("o:", lastVowel.lastIndexOf("o"));
console.log("u:", lastVowel.lastIndexOf("u"));
console.log("e:", lastVowel.lastIndexOf("e"));
console.log("i:", lastVowel.lastIndexOf("i"));
console.log();

// ----- Last & First Letter Activity -----
let word = "this string compares if the last letter is the same as the first";
let start = word.charAt(0);
let end = word.charAt(word.length-1);

console.log("The first letter is the same as the last:");

if (start == end)
{
    console.log(true);
}
else
{
    console.log(false);
}
console.log()

// ----- Even Or Odd Activity -----
let num1 = 20;
let num2 = 30;
let sum = (num1 + num2);

if (sum % 2 == 0)
{
    console.log(sum);
}
else
{
    console.log(num1 * num2);
}
console.log()

// ----- Palindrome Activity -----
num = "4302";

console.log(`${num} backwards is ${num.charAt(3)}${num.charAt(2)}${num.charAt(1)}${num.charAt(0)}`)

if (num.charAt(0) == num.charAt(3) && num.charAt(1) == num.charAt(2))
{
    console.log(num, "is a palindrome!")
}
else
{
    console.log(num, "is not a palindrome.")
}