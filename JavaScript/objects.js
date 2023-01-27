// ----- Introductions to Objects -----
const person =
{
    firstName: "Alisha",
    lastName: "Skye",
    age: 21,
    occupation: "Junior Programmer",
    married: false,
    homeOwner: false,
    hobbies: ["Play Games", "Read Books", "Watch Shows"]
}

console.log(person.firstName);
console.log(person["firstName"]);
console.log();

// ----- Pets Activity -----
const pet =
{
    petName: "Penny",
    typeOfPet: "Regal Jumping Spider",
    age: "3 Months",
    colour: "Sandy Brown"
}
console.log(`I have a pet ${pet.typeOfPet}. Its name is ${pet.petName}, its ${pet.age} old, and it looks ${pet.colour}.`);
console.log();

// ----- Pet Colour Change Activity -----
pet.colour = "White"
console.log(`I have a pet ${pet.typeOfPet}. Its name is ${pet.petName}, its ${pet.age} old, and it looks ${pet.colour}.`);
console.log();

// ----- Pet Features Activity -----
const pet2 =
{
    petName: "Penny",
    typeOfPet: "Regal Jumping Spider",
    age: "3 Months",
    petFeatures: ["Sandy Brown", "Shy", "Long Eyelashes"]
}
console.log("My pet has these features:", pet2.petFeatures);
console.log();

// ----- Work Day Activity -----
let day = "Tuesday";

if (day === "Saturday" || day === "Sunday")
{
    console.log(`Nice, it's ${day}! Let's ${person.hobbies[0]}`)
}
else
{
    console.log(`Ugh, it's ${day}. I enjoy being a ${person.occupation}, but I just want to be home today.`)
}
console.log();

// ----- Method Activity -----
const pet3 =
{
    petName: "Penny",
    typeOfPet: "Regal Jumping Spider",
    age: "3 Months",
    petFeatures: ["Sandy Brown", "Shy", "Long Eyelashes"],
    hungry: true,
    foodPresent: true,
    thirsty: true,
    waterPresent: false,
    eat()
    {
        if(this.hungry == true && this.foodPresent == true)
        {
            return "Your pet is eating."
        }
        else if (this.hungry == true && this.foodPresent == false)
        {
            return "Your pet is hungry. Consider feeding."
        }
        else if (this.hungry == false && this.foodPresent == true)
        {
            return "Your pet will eat later."
        }
        else
        {
            return "Your pet is not hungry right now."
        }
    },
    drink()
    {
        if(this.thirsty == true && this.waterPresent == true)
        {
            return "Your pet is drinking."
        }
        else if (this.thirsty == true && this.waterPresent == false)
        {
            return "Your pet is thirsty. Consider giving water."
        }
        else if (this.thirsty == false && this.waterPresent == true)
        {
            "Your pet will drink later."
        }
        else
        {
            return "Your pet is not thirsty right now."
        }
    }
}

console.log(pet3.eat());
console.log(pet3.drink());
console.log();

// ----- Coffee Shop Activity -----
const coffeeShop =
{
    branch: ["North Branch", "South Branch", "East Branch", "West Branch"],
    drinks: ["Latte - £1.75", "Cappucino - £1.85", "Tea - £1.50"],
    food: ["Cake - £2.50", "Croissant - £1.50", "Flapjack - £2.00"],
    drinksOrdered()
    {
        let item1 = this.drinks[Math.floor(Math.random()*2)]
        let item2 = this.drinks[Math.floor(Math.random()*2)]
        let cost1 = parseFloat(item1.substr(-4));
        let cost2 = parseFloat(item2.substr(-4)); 
        let total = cost1 + cost2;
        console.log(`${this.branch[Math.floor(Math.random()*3)]} Order:`)
        console.log(`${item1}, ${item2}`)
        console.log(`Total: £${total.toFixed(2)}`)
        return "Thanks for ordering!"
    },
    foodOrdered()
    {
        let item1 = this.food[Math.floor(Math.random()*2)]
        let item2 = this.food[Math.floor(Math.random()*2)]
        let cost1 = parseFloat(item1.substr(-4));
        let cost2 = parseFloat(item2.substr(-4)); 
        let total = cost1 + cost2;
        console.log(`${this.branch[Math.floor(Math.random()*3)]} Order:`)
        console.log(`${item1}, ${item2}`)
        console.log(`Total: £${total.toFixed(2)}`)
        return "Thanks for ordering!"
    }
}

console.log(coffeeShop.foodOrdered());
console.log();
console.log(coffeeShop.drinksOrdered());
console.log();