// ----- For Loops Introduction -----
let favHolidayDestinations = [
    "Venice, Italy",
    "Paris, France",
    "Barcelona, Spain"
]
// ----- Manual Repeating -----
console.log("Manually inputting each entry:")
console.log(favHolidayDestinations[0]);                         //  This block of code displays the same as the block below, however the block below will never need to
console.log(favHolidayDestinations[1]);                         //  change, as it automatically continues until there's no more entries. This block will need to be
console.log(favHolidayDestinations[2]);                         //  manually updated to keep up with the entries.
console.log();                                                  //  

// ----- Repeating using a for loop -----
console.log("Using a for loop to do it automatically:")
for (let i = 0; i < favHolidayDestinations.length; i++)
{
    console.log(favHolidayDestinations[i]);
}
console.log();

// ----- Changing the Initial Expression Activity -----
favHolidayDestinations.unshift("Tokyo, Japan", "Vancouver, Canada")
console.log(favHolidayDestinations);
for (let i = 1; i < favHolidayDestinations.length; i++)
{
    console.log(favHolidayDestinations[i]);
}
console.log();

// ----- Even Numbers in Reverse Activity -----
for (let i = 9; i<= 10; i++)
{
    console.log(i +=2);
}

let evenNumbers = [];
for (let n = 0; n <= 20; n++)
{
    if (n % 2 == 0)
    {
        evenNumbers.push(n);
    }
}
console.log(`The even numbers between 0 and 20 are: ${evenNumbers}`);

evenNumbers = [];
for (let n = 20; n >= 0; n--)
{
    if (n % 2 == 0)
    {
        evenNumbers.push(n);
    }
}
console.log(`The even numbers between 0 and 20 in reverse order are: ${evenNumbers}`);
console.log();

// ----- Odd Numbers Activity -----
let oddNumbers = [];
for (let n = 0; n <= 30; n++)
{
    if (n % 2 != 0)
    {
        oddNumbers.push(n);
    }
}
console.log(`The odd numbers between 0 and 30 are: ${oddNumbers}`);
console.log();

// ----- While Loops Introduction -----
let lives = 3;

console.log("Losing lives:");
while (lives > 0)
{
    console.log("Well done! You're still in the game.");
    lives--;
}
console.log("Game Over!");
console.log();

// ----- Dice Roll Example -----
let currentDiceRoll = 3;

console.log("Rolling a dice until it lands on 1:");
while(currentDiceRoll !=1)
{
    console.log(currentDiceRoll);
    currentDiceRoll = Math.floor(Math.random()*6)+1;
}
console.log(currentDiceRoll);
console.log();

// ----- Age Check Loop Activity -----
let age = 1;

console.log("Age check:")
while(age < 18)
{
    console.log(`Your age: ${age} - You're still a child.`)
    age++;
}
console.log(`Your age: ${age} - You're finally an adult!`);
console.log();

// ----- 6 Random Numbers Activity -----
let numCount = 0;

console.log("Generating 6 random numbers:")
while(numCount < 6)
{
    console.log(Math.random()* 10);
    numCount++;
}
console.log();

// ----- Movie List Check Activity -----
let favMovies = [
    "Forrest Gump",
    "Back to the Future",
    "Ghostbusters",
    "Pulp Fiction"
]

console.log("Checking for Ghostbusters as the 3rd entry:")
for (let i = 0; i < favMovies.length; i++)
{
    if(i == 2 && favMovies[i] == "Ghostbusters")
    {
        console.log("Yay, it's Ghosbusters!")
    }
    else{
        console.log("Boo, we want Ghostbusters!")
    }
}
console.log();

// ----- Random Numbers Divisible by 7 Activity -----
numCount = 0;
let randNum = 0;

console.log("Random numbers divisible by 7 check:")
while(numCount < 6)
{
    randNum = Math.floor(Math.random()* 30);

    if(randNum % 7 == 0)
    {
        console.log(randNum, "is divisible by 7.")
    }
    else
    {
        console.log(randNum, "is not divisible by 7.")
    }

    numCount ++;
}
console.log();

// ----- Mutual Followers Activity -----
let nameCheck = "";

let bobsFollowers = [
    "Charlie",
    "Mac",
    "Frank",
    "Dennis"
]

let hannahsFollowers = [
    "Dennis",
    "Dee",
    "Artemis",
    "Mac"
]

console.log("Bob's followers:", bobsFollowers);
console.log("Hannah's Followers:", hannahsFollowers);
console.log("Checking for mutual followers:")
for (let i = 0; i < bobsFollowers.length; i++)
{
    nameCheck = bobsFollowers[i];
    for (let i2 = 0; i2 < hannahsFollowers.length; i2++)
    {
        if (hannahsFollowers[i2] == nameCheck)
        {
            console.log("Mutual follower found:", hannahsFollowers[i2]);
        }
    }
}