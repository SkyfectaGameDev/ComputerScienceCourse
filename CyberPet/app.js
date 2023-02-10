class Pet {
    constructor(firstName, trait, health, hunger, thirst, comfort, social, hygiene) {
    this.firstName = firstName;
    this.trait = trait;
    this.health = health
    this.hunger = hunger;
    this.thirst = thirst;
    this.comfort = comfort;
    this.social = social;
    this.hygiene = hygiene;
    }

    feedPetMain () {
    this.hunger += 40;
    this.thirst -= 5;
    this.comfort -= 5;
    updateStats();
    }

    feedPetHealthy () {
    this.hunger += 30;
    this.social -= 5;
    this.hygiene += 10;
    updateStats();
        }

    feedPetSnack () {
    this.hunger += 10;
    this.thirst -= 5;
    this.social += 10;
    updateStats();
    }


    givePetDrink () {
    this.thirst += 40;
    this.comfort -= 5;
    this.hygiene -= 5;
    updateStats();
    }


    washPet () {
    this.hygiene += 30;
    this.comfort += 5;
    this.social -= 5;
    updateStats();
    }

    groomPet () {
    this.hygiene += 10;
    this.comfort += 5;
    this.social += 5;
    updateStats();
    }


    playWithPet () {
    this.social += 30;
    this.comfort += 5;
    this.thirst -= 5;
    this.hygene -= 5;
    updateStats();
    }

    petanimal () {
    this.social += 20;
    this.comfort += 10;
    this.hygene -= 10;
    updateStats();
    }

}

class penguin extends Pet {
    constructor(firstName, trait, health, hunger, thirst, comfort, social, hygiene) {
    super(firstName, trait, health, hunger, thirst, comfort, social, hygiene) ;
    }
    scrubBeak () {
    this.hygiene += 25;
    this.comfort -= 5;
    this.social -= 10;
    updateStats();
    }
    giveSpicyTunaFish () {
    this.hunger += 20;
    this.comfort -= 5;
    this.thirst -= 10;
    updateStats();
    }
}

class sloth extends Pet {
    constructor(firstName, trait, health, hunger, thirst, comfort, social, hygiene) {
    super(firstName, trait, health, hunger, thirst, comfort, social, hygiene) ;
    }
    trimClaws () {
    this.hygiene += 15;
    this.comfort += 15;
    this.social -= 5;
    updateStats();
    }
}


class elephant extends Pet {
    constructor(firstName, trait, health, hunger, thirst, comfort, social, hygiene) {
    super(firstName, trait, health, hunger, thirst, comfort, social, hygiene) ;
    }
    giveTrollDoll () {
    this.social += 30;
    this.comfort += 10;
    this.hygiene -= 5;
    updateStats();
    }
    giveSpiderFriend () {
    this.social += 40;
    this.comfort += 5;
    this.hygiene -= 10;
    updateStats();
    }
}

const updateStats = () => {
    console.log()
}


const elephant1 = new elephant("Name Here", "Shy", 100, 100, 100, 100, 100, 100)
const sloth1 = new sloth("Name Here", "Shy", 100, 100, 100, 100, 100, 100)
const penguin1 = new penguin("Name Here", "Shy", 100, 100, 100, 100, 100, 100)