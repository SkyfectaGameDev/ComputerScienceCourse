const newGameBtn = document.getElementById("start-button")
const textInputBox = document.getElementById("text-input")
const instruct = document.getElementById("instructor")
const startInstruc = document.getElementById("starting-instructions")

// ----- Buttons ------------

const slothBtn = document.getElementById("sloth-start")
const pengBtn = document.getElementById("peng-start")
const elephBtn = document.getElementById("eleph-start")

// ----- Status Text ------------

const healthNum = document.getElementById("status-health")
const hungerNum = document.getElementById("status-hunger")
const thirstNum = document.getElementById("status-thirst")
const comfortNum = document.getElementById("status-comfort")
const socialNum = document.getElementById("status-social")
const hygieneNum = document.getElementById("status-hygiene")

// ----- Images ------------

const startBack = document.getElementById("starter-background")
const jungleBack = document.getElementById("jungle-background")
const snowBack = document.getElementById("snow-background")
const desertBack = document.getElementById("desert-background")

const backgrounds = document.getElementsByClassName("backgroundImage")
const petImages = document.getElementsByClassName("mainImage")

const slothStan = document.getElementById("slothChill")

const pengSwing = document.getElementById("penChill")
const pengFire = document.getElementById("penMad")

const elephStan = document.getElementById("eleChill")


for (x=1; x < backgrounds.length; x++) {
    backgrounds[x].style.display = "none"
}
for (x=1; x < petImages.length; x++) {
    petImages[x].style.display = "none"
}

const traits = ["Shy", "Greedy", "Playful", "Calm", "Lazy", "Messy"]

let givenName = ""
let givenTrait = ""

class Pet {
    constructor(firstName, trait, type, health, hunger, thirst, comfort, social, hygiene) {
    this.firstName = firstName;
    this.trait = trait;
    this.type = type;
    this.health = health
    this.hunger = hunger;
    this.thirst = thirst;
    this.comfort = comfort;
    this.social = social;
    this.hygiene = hygiene;
    }

    feedPetMain () {
    this.hunger += 30;
    this.thirst -= 5;
    this.comfort -= 5;
    }
    feedPetHealthy () {
    this.hunger += 15;
    this.social -= 5;
    this.hygiene += 10;
    }

    washPet () {
    this.hygiene += 20;
    this.comfort += 5;
    this.social -= 5;
    }
    groomPet () {
    this.hygiene += 10;
    this.comfort += 5;
    this.social += 5;
    }

    playWithPet () {
    this.social += 25;
    this.comfort += 5;
    this.thirst -= 5;
    this.hygiene -= 5;
    }
    petanimal () {
    this.social += 15;
    this.comfort += 10;
    this.hygiene -= 5;
    }

    givePetDrink () {
    this.thirst += 40;
    this.comfort -= 5;
    this.hygiene -= 5;
    }

}

class penguin extends Pet {
    constructor(firstName, trait, type, health, hunger, thirst, comfort, social, hygiene) {
    super(firstName, trait, type, health, hunger, thirst, comfort, social, hygiene) ;
    }
    giveSnoozingHat () {
    this.social += 10;
    this.comfort += 35;
    this.hunger -= 5;
    }
    feedSpicyTunaFish () {
    this.hunger += 40;
    this.social += 10;
    this.thirst -= 10;
    }
    teachTrickDance () {
    this.social += 30;
    this.comfort += 15;
    this.thirst -= 5;
    }
    blowDry () {
    this.hygiene += 15;
    this.comfort += 15;
    this.social += 10;
    }
}

class sloth extends Pet {
    constructor(firstName, trait, type, health, hunger, thirst, comfort, social, hygiene) {
    super(firstName, trait, type, health, hunger, thirst, comfort, social, hygiene) ;
    }
    trimClaws () {
    this.hygiene += 15;
    this.comfort += 15;
    this.social += 10;
    }
    feedIceLolly () {
    this.hunger += 20;
    this.thirst += 10;
    this.social += 10;
    }
    teachTrickDisguise () {
    this.social += 30;
    this.hygiene += 5;
    this.comfort += 5;
    }
    giveSnoozingHat () {
    this.social += 30;
    this.comfort += 5;
    this.hygiene += 5;
    }
}


class elephant extends Pet {
    constructor(firstName, trait, type, health, hunger, thirst, comfort, social, hygiene) {
    super(firstName, trait, type, health, hunger, thirst, comfort, social, hygiene) ;
    }
    giveTrollDoll () {
    this.social += 30;
    this.comfort += 10;
    }
    takeBath () {
    this.hygiene += 25;
    this.social += 10;
    this.comfort += 5;
    }
    teachTrickBalance () {
    this.social += 35;
    this.hygiene += 10;
    this.comfort -= 5;
    }
    feedChilli () {
    this.hunger += 25;
    this.thirst -= 5;
    this.social += 10;
        }

}

newGameBtn.addEventListener("click", ()=> {
    startInstruc.style.display = "block"
    instruct.textContent = "Please enter a name for your pet, and then select a pet from the 3 options below. ";
    givenName = textInputBox.value;

    givenTrait = traits[(Math.floor(Math.random() * 6))]
    console.log(givenTrait)
    })

slothBtn.addEventListener("click", ()=> {
    startInstruc.style.display = "none"
    petImages[0].style.display = "none"
    backgrounds[0].style.display = "none"
    jungleBack.style.display = "block"
    slothStan.style.display = "block"
    const yourPet = new sloth(`${givenName}`, `${givenTrait}`, "Sloth", 50, 50, 50, 50, 50, 50);
    updateStats(yourPet)
    })

pengBtn.addEventListener("click", ()=> {
    startInstruc.style.display = "none"
    petImages[0].style.display = "none"
    backgrounds[0].style.display = "none"
    snowBack.style.display = "block"
    pengSwing.style.display = "block"
    const yourPet = new penguin(`${givenName}`, `${givenTrait}`, "Penguin", 50, 50, 50, 50, 50, 50);
    updateStats(yourPet) 
    })

elephBtn.addEventListener("click", ()=> {
    startInstruc.style.display = "none"
    petImages[0].style.display = "none"
    backgrounds[0].style.display = "none"
    desertBack.style.display = "block"
    elephStan.style.display = "block"
    const yourPet = new elephant(`${givenName}`, `${givenTrait}`, "Elephant", 50, 50, 50, 50, 50, 50);
    updateStats(yourPet) 
    })

const updateStats = (yourPet) => {
    yourPet.health = (((yourPet.hunger + yourPet.thirst + yourPet.hygiene + yourPet.comfort + yourPet.social) / 5) - 5)

    healthNum.textContent = yourPet.health
    hungerNum.textContent = yourPet.hunger
    thirstNum.textContent = yourPet.thirst
    comfortNum.textContent = yourPet.comfort
    socialNum.textContent = yourPet.social
    hygieneNum.textContent = yourPet.hygiene

    if (yourPet.health < 30){
        // image of standard pet hidden
        // image of sad/angry pet shown
        // text box displays with "${this.firstname} is feeling neglected!"
    }
    else if (yourPet.hunger < 30) {
        // text box displays with "${this.firstname} is hungry!"
    }
    else if (yourPet.thirst < 30) {
        // text box displays with "${this.firstname} is thirsty!"
    }
    else if (yourPet.social< 30) {
        // text box displays with "${this.firstname} needs some attention!"
    }
    else if (yourPet.hygiene < 30) {
        // text box displays with "${this.firstname} could use a bath!"
    }
    else if (yourPet.comfort< 30) {
        // text box displays with "${this.firstname} is uncomfy!"
    }

    else if (yourPet.health < 75) {
        // image of standard pet hidden
        // image of happy/lovey pet shown
        // text box displays with "${this.firstname} is happy!."
    }
    else {
        // image of sad/angry pet hidden
        // image of standard pet shown
        // text box displays with "${this.firstname} is doing okay."
    }
  
}
