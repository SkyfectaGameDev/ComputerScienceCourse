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

// ----- Rental Activity -----
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
        return `${storeName} ${address} ${contactNumber} ${moviesAvailable}`
    }
}

console.log(Rental.test());