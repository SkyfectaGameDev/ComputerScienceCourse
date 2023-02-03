// ----- Examples of Classes -----
class Pet
{
    constructor(firstname, surname, age, type, breed, colour, time)
    {
        this.firstname = firstname;
        this.surname = surname;
        this.age = age;
        this.type = type;
        this.breed = breed;
        this.colour = colour;
        this.lastFed = time;
    }
    get petInfo()
    {
        return `${this.name} is a ${this.type}, ${this.age} year(s) old`
    }
    set fullName(name)
    {
        const array = name.split(" ");
        this.firstname = array[0];
        this.surname = array[1];
    }
    get fullName()
    {
        return `${this.firstname} ${this.surname}`;
    }
    feedPet(time)
    {
        this.lastFed = time;
        return `Last feed updated to: ${this.lastFed} for ${this.name}`;
    }
}

class PetMeds extends Pet
{
    constructor(firstname, surname, age, type, breed, colour, time, mtime)
    {
        super(firstname, surname, age, type, breed, colour, time);
        this.lastMeds = mtime;
    }
    giveMeds(time)
    {
        this.lastMeds = time;
        return `Last meds updated to: ${this.lastMeds} for ${this.name}`;
    }
}

const Bella = new Pet("Bella", "", 2, "Dog", "GS", "B&T", "08:00");
console.log(Bella.feedPet("15:00"));
Bella.fullName = "Bella Crompton"
console.log(Bella);
console.log(Bella.fullName);
const Penny = new PetMeds("Penny", "", 1, "Jumping Spider", "Phiddipus Regius", "Tan", "08:00", "14:00");
console.log(Penny.giveMeds("12:00"));
console.log();

// ----- Rental Store Activity -----
class Rental
{
    constructor(storeName, address, contactNumber, moviesAvailable)
    {
        this.storeName = storeName;
        this.address = address;
        this.contactNumber = contactNumber;
        this.moviesAvailable = moviesAvailable;
    }
    test() 
    {
        return `Store: ${this.storeName}  /  Address: ${this.address}  /  Contact Number: ${this.contactNumber}  /  Movies Available: ${this.moviesAvailable}`
    }
    movies()
    {
        console.log(`Movies Available at ${this.storeName}:`)
        for (let i = 0; i < this.moviesAvailable.length; i++)
        {
            console.log(this.moviesAvailable[i]);
        }
    }
    moviePrices()
    {
        console.log(`Movies Available at ${this.storeName}:`)
        for (let i = 0; i < this.moviesAvailable.length; i++)
        {
            console.log(`${this.moviesAvailable[i][0]}: $${this.moviesAvailable[i][1]}`);
        }
    }
}

let newMovies = [
    "Back to the Future Part III",
    "Terminator 2",
    "Total Recall"
]

const store = new Rental("HMV", "Arndale Shopping Center, Manchester", "01234567890", ["Spider-Man", "Bullet Train", "Free Guy"])
console.log(store.test());
const store2 = new Rental("Blockbuster", "The Past, 1991", "01219101985", newMovies)
console.log(store2.test());
console.log();

// ----- Rental Movies Activity -----
store.movies();
console.log();

store2.movies();
console.log();

// ----- Rental Movie Prices Activity -----
let pricedMovies = [
    ["Back to the Future Part III", 20.00.toFixed(2)],
    ["Terminator 2", 24.50.toFixed(2)],
    ["Total Recall", 25.00.toFixed(2)]
]
const store2Priced = new Rental("Blockbuster", "The Past, 1991", "01219101985", pricedMovies);
store2Priced.moviePrices();

// ----- Cyberpet Stretch Activity -----