const newGameBtn = document.getElementById("start-button")
const resetBtn = document.getElementById("reset-button")
const textInputBox = document.getElementById("text-input")
const instruct = document.getElementById("instructor")
const startInstruc = document.getElementById("starting-instructions")

// ----- Pet Text ------------

const petName = document.getElementById("pet-name")
const petAgeText = document.getElementById("pet-age")
const petTrait = document.getElementById("pet-trait")

// ----- Buttons ------------

const specialBtns = document.getElementsByClassName("special-button")

const slothBtn = document.getElementById("sloth-start")
const pengBtn = document.getElementById("peng-start")
const elephBtn = document.getElementById("eleph-start")

// ------- Dropdown Buttons -----------------

const feedBtn = document.getElementById("feedBtn")
const cleanBtn = document.getElementById("cleanBtn")
const interactBtn = document.getElementById("interactBtn")
const giveBtn = document.getElementById("giveBtn")

const feedDropMenu = document.getElementById("feed-dropdown")
const cleanDropMenu = document.getElementById("clean-dropdown")
const interactDropMenu = document.getElementById("interact-dropdown")
const giveDropMenu = document.getElementById("give-dropdown")

// ------- Action Buttons -----------------

const dinnerBtn = document.getElementById("dinner-button")
const healthyBtn = document.getElementById("healthy-button")
const washBtn = document.getElementById("wash-button")
const groomBtn = document.getElementById("groom-button")
const playBtn = document.getElementById("play-button")
const strokeBtn = document.getElementById("stroking-button")
const drinkBtn = document.getElementById("drink-button")
const toyBtn = document.getElementById("toy-button")

// ------- Special Buttons -----------------

const iceLollyBtn = document.getElementById("ice-lolly")
const trimClawsBtn = document.getElementById("trim-claws")
const teachDisgBtn = document.getElementById("teach-trick-disguise")
const giveWatch = document.getElementById("give-watch")

const spicyTunaBtn = document.getElementById("spicy-tuna")
const blowDryBtn = document.getElementById("blow-dry")
const danceBtn = document.getElementById("teach-trick-dance")
const giveHatBtn = document.getElementById("give-hat")

const chilliBowlBtn = document.getElementById("chilli-bowl")
const takeBathBtn = document.getElementById("take-bath")
const balanceBtn = document.getElementById("teach-trick-balance")
const giveTrollBtn = document.getElementById("give-troll")

// ----- Status Text ------------

const emoteText = document.getElementById("pet-emote")
const actionText = document.getElementById("pet-action")
const ripText = document.getElementById("pet-rip")


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

// 0 = egg, 
// sloth: 1: crying, 2: chill, 3: happy, 4: lolly, 5: trim, 6: disguise, 7: watch
// penguin: 8: chill, 9: spicy, 10: happy, 11: snoozing, 12: sad, 13: dance, 14: blow dry
// elephant: 15: mad, 16: chill, 17: troll, 18: happy, 19: chilli (eat) 20: bath, 21: balance

const slothStan = document.getElementById("slothChill")  // not needed anymore but some may still have code in that referes to them
const pengSwing = document.getElementById("penChill")
const pengFire = document.getElementById("penMad")
const elephStan = document.getElementById("eleChill")


for (x=1; x < backgrounds.length; x++) {               // Turns off all background images off at the start apart from starter background
    backgrounds[x].style.display = "none"
}
for (x=1; x < petImages.length; x++) {              // Turns off all main pet images off at the start apart from starter egg
    petImages[x].style.display = "none"
}
for (x=0; x < specialBtns.length; x++) {            // Turns off all special buttons at the start
    specialBtns[x].style.display = "none"
}

const traits = ["Restless", "Greedy", "Playful", "Calm", "Lazy", "Messy"]      // a list of possible traits our pet might have

let givenName = ""                  // sets up a few empty variables that are used later on for scope purposes
let givenTrait = ""
let yourPet = {}
let petLiving = false
let gameReset = true
const unpressable = [false, false, false, false, false, false, false, false]
let specialBtnPressed = false

class Pet {                     // creates our pet class with standard action functions
    constructor(firstName, trait, age, type, health, hunger, thirst, comfort, social, hygiene) {
    this.firstName = firstName;
    this.trait = trait;
    this.age = age;
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
    if (this.hunger > 100){
        this.hunger = 100}
    this.thirst -= 5;
    if (this.thirst < 0){
        this.thirst = 0}
    this.comfort -= 5;
    if (this.comfort < 0){
        this.comfort = 0}
    }
    feedPetHealthy () {
    this.hunger += 15;
    if (this.hunger > 100){
        this.hunger = 100}
    this.social -= 5;
    if (this.social < 0){
        this.social = 0}
    this.hygiene += 10;
    if (this.hygiene > 100){
        this.hygiene= 100}
    }

    washPet () {
    this.hygiene += 20;
    if (this.hygiene > 100){
        this.hygiene= 100}
    this.comfort += 5;
    if (this.comfort > 100){
        this.comfort = 100}
    this.social -= 5;
    if (this.social < 0){
        this.social = 0}
    }
    groomPet () {
    this.hygiene += 10;
    if (this.hygiene > 100){
        this.hygiene= 100}
    this.comfort += 5;
    if (this.comfort > 100){
        this.comfort = 100}
    this.social += 5;
    if (this.social > 100){
        this.social = 100}
    }

    playWithPet () {
    this.social += 25;
    if (this.social > 100){
        this.social = 100}
    this.comfort += 5;
    if (this.comfort > 100){
        this.comfort = 100}
    this.thirst -= 5;
    if (this.thirst < 0){
        this.thirst = 0}
    this.hygiene -= 5;
    if (this.hygiene < 0){
        this.hygiene = 0}

    }
    petAnimal () {
    this.social += 15;
    if (this.social > 100){
        this.social = 100}
    this.comfort += 10;
    if (this.comfort > 100){
        this.comfort = 100}
    this.hygiene -= 5;
    if (this.hygiene < 0){
        this.hygiene = 0}
    }

    givePetDrink () {
    this.thirst += 40;
    if (this.thirst > 100){
        this.thirst = 100}
    this.comfort -= 5;
    if (this.comfort < 0){
        this.comfort = 0}
    this.hygiene -= 5;
    if (this.hygiene < 0){
        this.hygiene = 0}
    }

    givePetToy () {
    this.social += 15;
    if (this.social > 100){
        this.social = 100}
    this.comfort += 10;
    if (this.comfort > 100){
        this.comfort = 100}
    this.hunger -= 5;
    if (this.hunger < 0){
        this.hunger = 0}
    }

}

class penguin extends Pet {                   // creates our penguin sub class with special action functions
    constructor(firstName, trait, age, type, health, hunger, thirst, comfort, social, hygiene) {
    super(firstName, trait, age, type, health, hunger, thirst, comfort, social, hygiene) ;
    }
    giveSnoozingHat () {
    this.social += 10;
    if (this.social > 100){
        this.social = 100}
    this.comfort += 35;
    if (this.comfort > 100){
        this.comfort = 100}
    this.hunger -= 5;
    if (this.hunger < 0){
        this.hunger = 0}
    }
    feedSpicyTunaFish () {
    this.hunger += 40;
    if (this.hunger > 100){
        this.hunger = 100}
    this.social += 10;
    if (this.social > 100){
        this.social = 100}
    this.thirst -= 10;
    if (this.thirst < 0){
        this.thirst = 0}
    }
    teachTrickDance () {
    this.social += 30;
    if (this.social > 100){
        this.social = 100}
    this.comfort += 15;
    if (this.comfort > 100){
        this.comfort = 100}
    this.thirst -= 5;
    if (this.thirst < 0){
        this.thirst = 0}
    }
    blowDry () {
    this.hygiene += 15;
    if (this.hygiene > 100){
        this.hygiene = 100}
    this.comfort += 15;
    if (this.comfort > 100){
        this.comfort = 100}
    this.social += 10;
    if (this.social > 100){
        this.social = 100}
    }
}

class sloth extends Pet {                        // creates our sloth sub class with special action functions
    constructor(firstName, trait, age, type, health, hunger, thirst, comfort, social, hygiene) {
    super(firstName, trait, age, type, health, hunger, thirst, comfort, social, hygiene) ;
    }
    trimClaws () {
    this.hygiene += 15;
    if (this.hygiene > 100){
        this.hygiene = 100}
    this.comfort += 15;
    if (this.comfort > 100){
        this.comfort = 100}
    this.social += 10;
    if (this.social > 100){
        this.social = 100}
    }
    feedIceLolly () {
    this.hunger += 20;
    if (this.hunger > 100){
        this.hunger = 100}
    this.thirst += 10;
    if (this.thirst > 100){
        this.thirst = 100}
    this.social += 10;
    if (this.social > 100){
        this.social = 100}
    }
    teachTrickDisguise () {
    this.social += 30;
    if (this.social > 100){
        this.social = 100}
    this.hygiene += 5;
    if (this.hygiene > 100){
        this.hygiene = 100}
    this.comfort += 5;
    if (this.comfort > 100){
        this.comfort = 100}
    }
    giveWatch () {
    this.social += 30;
    if (this.social > 100){
        this.social = 100}
    this.comfort += 5;
    if (this.comfort > 100){
        this.comfort = 100}
    this.hygiene += 5;
    if (this.hygiene > 100){
        this.hygiene = 100}
    }
}


class elephant extends Pet {                         // creates our elephant sub class with special action functions
    constructor(firstName, trait, age, type, health, hunger, thirst, comfort, social, hygiene) {
    super(firstName, trait, age, type, health, hunger, thirst, comfort, social, hygiene) ;
    }
    giveTrollDoll () {
    this.social += 30;
    if (this.social > 100){
        this.social = 100}
    this.comfort += 10;
    if (this.comfort > 100){
        this.comfort = 100}
    }
    takeBath () {
    this.hygiene += 25;
    if (this.hygiene > 100){
        this.hygiene = 100}
    this.social += 10;
    if (this.social > 100){
        this.social = 100}
    this.comfort += 5;
    if (this.comfort > 100){
        this.comfort = 100}
    }
    teachTrickBalance () {
    this.social += 35;
    if (this.social > 100){
        this.social = 100}
    this.hygiene += 10;
    if (this.hygiene > 100){
        this.hygiene = 100}
    this.comfort -= 5;
    if (this.comfort < 0){
        this.comfort = 0}
    }
    feedChilli () {
    this.hunger += 25;
    if (this.hunger > 100){
        this.hunger = 100}
    this.thirst -= 5;
    if (this.thirst < 0){
        this.thirst = 0}
    this.social += 10;
    if (this.social > 100){
        this.social = 100}
        }

}

newGameBtn.addEventListener("click", ()=> {                     // start button code
    if (petLiving == false && gameReset == true) {          // only works if there is no pet and the game has been reset
    startInstruc.style.display = "flex";                   // reveals the input text box and the 3 starter buttons
    textInputBox.value = "";
    instruct.textContent = "Please enter a name for your pet, and then select a pet from the 3 options below. ";
    }
    })

slothBtn.addEventListener("click", ()=> {
    givenName = textInputBox.value;
    if (givenName.length == 0) {
        instruct.textContent = "You must enter a name for your pet. ";  
    }
    else if (givenName.length > 12) {
        instruct.textContent = "Your pet name cannot be more than 12 characters. "; 
    }
    else{
    givenTrait = traits[(Math.floor(Math.random() * 6))]
    console.log(givenName)
    startInstruc.style.display = "none"
    petImages[0].style.display = "none"
    backgrounds[0].style.display = "none"
    jungleBack.style.display = "block"
    petImages[2].style.display = "block"
    yourPet = new sloth(`${givenName}`, `${givenTrait}`, 0, "Sloth", 50, 50, 50, 50, 50, 50);
    petLiving = true
    gameReset = false
    petName.textContent = yourPet.firstName
    petAgeText.textContent = `0 Days Old`
    petTrait.textContent = yourPet.trait

    iceLollyBtn.style.display = "block"    // puts the special buttons for the sloth back in
    trimClawsBtn.style.display = "block"
    teachDisgBtn.style.display = "block"
    giveWatch.style.display = "block"

    updateStats(yourPet);
    timingFunction(yourPet);
    }})

pengBtn.addEventListener("click", ()=> {
    givenName = textInputBox.value;
    if (givenName.length == 0) {
        instruct.textContent = "You must enter a name for your pet. ";  
    }
    else if (givenName.length > 12) {
        instruct.textContent = "Your pet name cannot be more than 12 characters. "; 
    }
    else{
    givenTrait = traits[(Math.floor(Math.random() * 6))]
    startInstruc.style.display = "none"
    petImages[0].style.display = "none"
    backgrounds[0].style.display = "none"
    snowBack.style.display = "block"
    petImages[8].style.display = "block"
    yourPet = new penguin(`${givenName}`, `${givenTrait}`, 0, "Penguin", 50, 50, 50, 50, 50, 50);
    petLiving = true
    gameReset = false
    petName.textContent = yourPet.firstName
    petAgeText.textContent = `0 Days Old`
    petTrait.textContent = yourPet.trait

    spicyTunaBtn.style.display = "block"    // puts the special buttons for the penguin back in
    blowDryBtn.style.display = "block"
    danceBtn.style.display = "block"
    giveHatBtn.style.display = "block"

    updateStats(yourPet) 
    timingFunction(yourPet);
    }})

elephBtn.addEventListener("click", ()=> {
    givenName = textInputBox.value;
    if (givenName.length == 0) {
        instruct.textContent = "You must enter a name for your pet. ";  
    }
    else if (givenName.length > 12) {
        instruct.textContent = "Your pet name cannot be more than 12 characters. "; 
    }
    else{
    givenTrait = traits[(Math.floor(Math.random() * 6))]
    startInstruc.style.display = "none"
    petImages[0].style.display = "none"
    backgrounds[0].style.display = "none"
    desertBack.style.display = "block"
    petImages[16].style.display = "block"
    yourPet = new elephant(`${givenName}`, `${givenTrait}`, 0, "Elephant", 50, 50, 50, 50, 50, 50);
    petLiving = true
    gameReset = false
    petName.textContent = yourPet.firstName
    petAgeText.textContent = `0 Days Old`
    petTrait.textContent = yourPet.trait

    chilliBowlBtn.style.display = "block"    // puts the special buttons for the elephant back in
    takeBathBtn.style.display = "block"
    balanceBtn.style.display = "block"
    giveTrollBtn.style.display = "block"

    updateStats(yourPet) 
    timingFunction(yourPet);
    }})

resetBtn.addEventListener("click", ()=> {
    for (x=0; x < backgrounds.length; x++) {
        backgrounds[x].style.display = "none";
    }
    for (x=0; x < petImages.length; x++) {
        petImages[x].style.display = "none"
    }
    for (x=0; x < specialBtns.length; x++) {
        specialBtns[x].style.display = "none"
    }
    backgrounds[0].style.display = "block";
    petImages[0].style.display = "block";
    emoteText.textContent = "A new egg is hatching ";
    actionText.textContent = "";
    ripText.style.display = "none";
    ripText.textContent = "";
    givenName = "";
    givenTrait = "";
    yourPet = {};
    petLiving = false;
    gameReset = true;
})

// const petName = document.getElementById("pet-name")
// const petAgeText = document.getElementById("pet-age")
// const petTrait = document.getElementById("pet-trait")

// -------------------------------- dropdown button presses ------------------------

window.onclick = function(event) {
    if (!event.target.matches('.dropdown-button')) {
        feedDropMenu.style.display = "none"
        cleanDropMenu.style.display = "none"
        interactDropMenu.style.display = "none"
        giveDropMenu.style.display = "none"
    }
}

feedBtn.addEventListener("mouseover", ()=> {
    if(feedDropMenu.style.display == "block") {
    feedDropMenu.style.display = "none"}
    else {feedDropMenu.style.display = "block"}
})

cleanBtn.addEventListener("mouseover", ()=> {
    if(cleanDropMenu.style.display == "block") {
    cleanDropMenu.style.display = "none"}
    else {cleanDropMenu.style.display = "block"}
})

interactBtn.addEventListener("mouseover", ()=> {
    if(interactDropMenu.style.display == "block") {
    interactDropMenu.style.display = "none"}
    else {interactDropMenu.style.display = "block"}
})

giveBtn.addEventListener("mouseover", ()=> {
    if(giveDropMenu.style.display == "block") {
    giveDropMenu.style.display = "none"}
    else {giveDropMenu.style.display = "block"}
})




// -------------------------------- action button presses --------------------------

dinnerBtn.addEventListener("click", ()=> {
    if (unpressable[0] == false) {
        unpressable[0] = true
        yourPet.feedPetMain();                  // runs action funtion
        updateStats(yourPet);                   // updates stat changes on screen
        actionText.textContent = `You fed ${yourPet.firstName} a large meal `      // Updates action text on screen
        dinnerBtn.style.backgroundColor = "Red"
        window.setTimeout(() => {
            dinnerBtn.style.backgroundColor = "White" 
            unpressable[0] = false
            }, 5000); 
    }   
})

healthyBtn.addEventListener("click", ()=> {
    if (unpressable[1] == false) {
        unpressable[1] = true
        yourPet.feedPetHealthy();                  // runs action funtion
        updateStats(yourPet);                   // updates stat changes on screen
        actionText.textContent = `You fed ${yourPet.firstName} a healthy meal `      // Updates action text on screen
        healthyBtn.style.backgroundColor = "Red"
        window.setTimeout(() => {
            healthyBtn.style.backgroundColor = "White" 
            unpressable[1] = false
            }, 5000);
    }
})


washBtn.addEventListener("click", ()=> {
    if (unpressable[2] == false) {
        unpressable[2] = true
        yourPet.washPet();                  // runs action funtion
        updateStats(yourPet);                   // updates stat changes on screen
        actionText.textContent = `You washed ${yourPet.firstName} `      // Updates action text on screen
        washBtn.style.backgroundColor = "Red"
        window.setTimeout(() => {
            washBtn.style.backgroundColor = "White" 
            unpressable[2] = false
            }, 5000); 
    }
})

groomBtn.addEventListener("click", ()=> {
    if (unpressable[3] == false) {
        unpressable[3] = true
        yourPet.groomPet();                  // runs action funtion
        updateStats(yourPet);                   // updates stat changes on screen
        actionText.textContent = `You groomed ${yourPet.firstName} `      // Updates action text on screen
        groomBtn.style.backgroundColor = "Red"
        window.setTimeout(() => {
            groomBtn.style.backgroundColor = "White" 
            unpressable[3] = false
            }, 5000); 
    }
})

playBtn.addEventListener("click", ()=> {
    if (unpressable[4] == false) {
        unpressable[4] = true
        yourPet.playWithPet();                  // runs action funtion
        updateStats(yourPet);                   // updates stat changes on screen
        actionText.textContent = `You played with ${yourPet.firstName} `      // Updates action text on screen
        playBtn.style.backgroundColor = "Red"
        window.setTimeout(() => {
            playBtn.style.backgroundColor = "White" 
            unpressable[4] = false
            }, 5000); 
    }
}) 

strokeBtn.addEventListener("click", ()=> {
    if (unpressable[5] == false) {
        unpressable[5] = true
        yourPet.petAnimal();                  // runs action funtion
        updateStats(yourPet);                   // updates stat changes on screen
        actionText.textContent = `You petted ${yourPet.firstName} `      // Updates action text on screen
        strokeBtn.style.backgroundColor = "Red"
        window.setTimeout(() => {
            strokeBtn.style.backgroundColor = "White" 
            unpressable[5] = false
            }, 5000); 
    }
}) 

drinkBtn.addEventListener("click", ()=> {
    if (unpressable[6] == false) {
        unpressable[6] = true
        yourPet.givePetDrink();                  // runs action funtion
        updateStats(yourPet);                   // updates stat changes on screen
        actionText.textContent = `You gave ${yourPet.firstName} a large drink `      // Updates action text on screen
        drinkBtn.style.backgroundColor = "Red"
        window.setTimeout(() => {
            drinkBtn.style.backgroundColor = "White" 
            unpressable[6] = false
            }, 5000); 
    }
}) 

toyBtn.addEventListener("click", ()=> {
    if (unpressable[7] == false) {
        unpressable[7] = true
        yourPet.givePetToy();                  // runs action funtion
        updateStats(yourPet);                   // updates stat changes on screen
        actionText.textContent = `You gave ${yourPet.firstName} a little toy `      // Updates action text on screen
        toyBtn.style.backgroundColor = "Red"
        window.setTimeout(() => {
            toyBtn.style.backgroundColor = "White" 
            unpressable[7] = false
            }, 5000); 
    }
})



// ---------------- special button presses ---------------------------------------

// Sloth ---------------

iceLollyBtn.addEventListener("click", ()=> {
    if (specialBtnPressed == false) {
    specialBtnPressed = true                    // sets special button pressed to true to block other images coming over the top
    yourPet.feedIceLolly();                     // runs action funtion
    updateStats(yourPet);                       // updates stat changes on screen
    actionText.textContent = `You gave ${yourPet.firstName} an ice lolly `      // Updates action text on screen
    petImages[1].style.display = "none" 
    petImages[3].style.display = "none" 
    petImages[2].style.display = "none"              // turns off the standard image 
    petImages[4].style.display = "block"              // turns on the corresponding image         
    window.setTimeout(() => {
    petImages[4].style.display = "none"         // turns the image off after a time delay
    specialBtnPressed = false                   // returns special button pressed to false so that other images may resume
    updateEmote(yourPet)
    }, 4000);
    }})

trimClawsBtn.addEventListener("click", ()=> {
    if (specialBtnPressed == false) {
    specialBtnPressed = true                    // sets special button pressed to true to block other images coming over the top
    yourPet.trimClaws();                     // runs action funtion
    updateStats(yourPet);                       // updates stat changes on screen
    actionText.textContent = `You trim ${yourPet.firstName} claws `      // Updates action text on screen
    petImages[1].style.display = "none" 
    petImages[3].style.display = "none" 
    petImages[2].style.display = "none"              // turns off the standard image 
    petImages[5].style.display = "block"              // turns on the corresponding image         
    window.setTimeout(() => {
    petImages[5].style.display = "none"         // turns the image off after a time delay
    specialBtnPressed = false                   // returns special button pressed to false so that other images may resume
    updateEmote(yourPet)
    }, 4000);
    }})

teachDisgBtn.addEventListener("click", ()=> {
    if (specialBtnPressed == false) {
    specialBtnPressed = true                    // sets special button pressed to true to block other images coming over the top
    yourPet.teachTrickDisguise();                     // runs action funtion
    updateStats(yourPet);                       // updates stat changes on screen
    actionText.textContent = `You teach ${yourPet.firstName} how to disguise `      // Updates action text on screen
    petImages[1].style.display = "none" 
    petImages[3].style.display = "none" 
    petImages[2].style.display = "none"              // turns off the standard image 
    petImages[6].style.display = "block"              // turns on the corresponding image         
    window.setTimeout(() => {
    petImages[6].style.display = "none"         // turns the image off after a time delay
    specialBtnPressed = false                   // returns special button pressed to false so that other images may resume
    updateEmote(yourPet)
    }, 4000);
    }})
           
giveWatch.addEventListener("click", ()=> {
    if (specialBtnPressed == false) {
    specialBtnPressed = true                    // sets special button pressed to true to block other images coming over the top
    yourPet.giveWatch();                     // runs action funtion
    updateStats(yourPet);                       // updates stat changes on screen
    actionText.textContent = `You give ${yourPet.firstName} a watch `      // Updates action text on screen
    petImages[1].style.display = "none" 
    petImages[3].style.display = "none" 
    petImages[2].style.display = "none"              // turns off the standard image 
    petImages[7].style.display = "block"              // turns on the corresponding image         
    window.setTimeout(() => {
    petImages[7].style.display = "none"         // turns the image off after a time delay
    specialBtnPressed = false                   // returns special button pressed to false so that other images may resume
    updateEmote(yourPet)
    }, 4000);
    }})

 // Penguin ---------------

spicyTunaBtn.addEventListener("click", ()=> {
    if (specialBtnPressed == false) {
    specialBtnPressed = true                    // sets special button pressed to true to block other images coming over the top
    yourPet.feedSpicyTunaFish();                     // runs action funtion
    updateStats(yourPet);                       // updates stat changes on screen
    actionText.textContent = `You give ${yourPet.firstName} a spicy tuna fish `      // Updates action text on screen
    petImages[12].style.display = "none" 
    petImages[10].style.display = "none" 
    petImages[8].style.display = "none"              // turns off the standard image 
    petImages[9].style.display = "block"              // turns on the corresponding image         
    window.setTimeout(() => {
    petImages[9].style.display = "none"         // turns the image off after a time delay
    specialBtnPressed = false                   // returns special button pressed to false so that other images may resume
    updateEmote(yourPet)
    }, 4000);
    }})    
                    
blowDryBtn.addEventListener("click", ()=> {
    if (specialBtnPressed == false) {
    specialBtnPressed = true                    // sets special button pressed to true to block other images coming over the top
    yourPet.blowDry();                     // runs action funtion
    updateStats(yourPet);                       // updates stat changes on screen
    actionText.textContent = `You blow dry ${yourPet.firstName}  `      // Updates action text on screen
    petImages[12].style.display = "none" 
    petImages[10].style.display = "none" 
    petImages[8].style.display = "none"               // turns off the standard image 
    petImages[14].style.display = "block"              // turns on the corresponding image         
    window.setTimeout(() => {
    petImages[14].style.display = "none"         // turns the image off after a time delay
    specialBtnPressed = false                   // returns special button pressed to false so that other images may resume
    updateEmote(yourPet)
    }, 4000);
    }})   


danceBtn.addEventListener("click", ()=> {
    if (specialBtnPressed == false) {
    specialBtnPressed = true                    // sets special button pressed to true to block other images coming over the top
    yourPet.teachTrickDance();                     // runs action funtion
    updateStats(yourPet);                       // updates stat changes on screen
    actionText.textContent = `You teach ${yourPet.firstName} how to dance! `      // Updates action text on screen
    petImages[12].style.display = "none" 
    petImages[10].style.display = "none" 
    petImages[8].style.display = "none"               // turns off the standard image 
    petImages[13].style.display = "block"              // turns on the corresponding image         
    window.setTimeout(() => {
    petImages[13].style.display = "none"         // turns the image off after a time delay
    specialBtnPressed = false                   // returns special button pressed to false so that other images may resume
    updateEmote(yourPet)
    }, 4000);
    }})  

giveHatBtn.addEventListener("click", ()=> {
    if (specialBtnPressed == false) {
    specialBtnPressed = true                    // sets special button pressed to true to block other images coming over the top
    yourPet.giveSnoozingHat();                     // runs action funtion
    updateStats(yourPet);                       // updates stat changes on screen
    actionText.textContent = `You give ${yourPet.firstName} a comfy hat `      // Updates action text on screen
    petImages[12].style.display = "none" 
    petImages[10].style.display = "none" 
    petImages[8].style.display = "none"               // turns off the standard image 
    petImages[11].style.display = "block"              // turns on the corresponding image         
    window.setTimeout(() => {
    petImages[11].style.display = "none"         // turns the image off after a time delay
    specialBtnPressed = false                   // returns special button pressed to false so that other images may resume
    updateEmote(yourPet)
    }, 4000);
    }}) 
    
// elephant ---------------
                    
chilliBowlBtn.addEventListener("click", ()=> {
    if (specialBtnPressed == false) {
    specialBtnPressed = true                    // sets special button pressed to true to block other images coming over the top
    yourPet.feedChilli();                     // runs action funtion
    updateStats(yourPet);                       // updates stat changes on screen
    actionText.textContent = `You give ${yourPet.firstName} a bowl of chilli `      // Updates action text on screen
    petImages[15].style.display = "none" 
    petImages[16].style.display = "none" 
    petImages[18].style.display = "none"               // turns off the standard image 
    petImages[19].style.display = "block"              // turns on the corresponding image         
    window.setTimeout(() => {
    petImages[19].style.display = "none"         // turns the image off after a time delay
    specialBtnPressed = false                   // returns special button pressed to false so that other images may resume
    updateEmote(yourPet)
    }, 4000);
    }}) 

takeBathBtn.addEventListener("click", ()=> {
    if (specialBtnPressed == false) {
    specialBtnPressed = true                    // sets special button pressed to true to block other images coming over the top
    yourPet.takeBath();                     // runs action funtion
    updateStats(yourPet);                       // updates stat changes on screen
    actionText.textContent = `You give ${yourPet.firstName} a nice warm bath `      // Updates action text on screen
    petImages[15].style.display = "none" 
    petImages[16].style.display = "none" 
    petImages[18].style.display = "none"               // turns off the standard image 
    petImages[20].style.display = "block"              // turns on the corresponding image         
    window.setTimeout(() => {
    petImages[20].style.display = "none"         // turns the image off after a time delay
    specialBtnPressed = false                   // returns special button pressed to false so that other images may resume
    updateEmote(yourPet)
    }, 4000);
    }}) 

balanceBtn.addEventListener("click", ()=> {
    if (specialBtnPressed == false) {
    specialBtnPressed = true                    // sets special button pressed to true to block other images coming over the top
    yourPet.teachTrickBalance();                     // runs action funtion
    updateStats(yourPet);                       // updates stat changes on screen
    actionText.textContent = `You teach ${yourPet.firstName} how to balance! `      // Updates action text on screen
    petImages[15].style.display = "none" 
    petImages[16].style.display = "none" 
    petImages[18].style.display = "none"               // turns off the standard image 
    petImages[21].style.display = "block"              // turns on the corresponding image         
    window.setTimeout(() => {
    petImages[21].style.display = "none"         // turns the image off after a time delay
    specialBtnPressed = false                   // returns special button pressed to false so that other images may resume
    updateEmote(yourPet)
    }, 4000);
    }}) 

giveTrollBtn.addEventListener("click", ()=> {
    if (specialBtnPressed == false) {
    specialBtnPressed = true                    // sets special button pressed to true to block other images coming over the top
    yourPet.giveTrollDoll();                     // runs action funtion
    updateStats(yourPet);                       // updates stat changes on screen
    actionText.textContent = `You give ${yourPet.firstName} a troll doll to play with! `      // Updates action text on screen
    petImages[15].style.display = "none" 
    petImages[16].style.display = "none" 
    petImages[18].style.display = "none"               // turns off the standard image 
    petImages[17].style.display = "block"              // turns on the corresponding image         
    window.setTimeout(() => {
    petImages[17].style.display = "none"         // turns the image off after a time delay
    specialBtnPressed = false                   // returns special button pressed to false so that other images may resume
    updateEmote(yourPet)
    }, 4000);
    }}) 


const updateStats = (yourPet) => {
    if (petLiving == true) {
    yourPet.health = Math.floor(((yourPet.hunger + yourPet.thirst + yourPet.hygiene + yourPet.comfort + yourPet.social) / 5));  // creates the health stat based on the values of the other 5 stats

    healthNum.textContent = yourPet.health;                 // displays the current stat values on screen
    hungerNum.textContent = yourPet.hunger;
    thirstNum.textContent = yourPet.thirst;
    comfortNum.textContent = yourPet.comfort;
    socialNum.textContent = yourPet.social;
    hygieneNum.textContent = yourPet.hygiene;
    if (yourPet.age >= 1 && yourPet.age < 2) {
        petAgeText.textContent = `${Math.floor(yourPet.age)} day old`;
    }
    else{
    petAgeText.textContent = `${Math.floor(yourPet.age)} days old`;
    }
    updateStatBars(yourPet);
}
}

const updateStatBars = (yourPet) => {    // alters the length and colour of the status bars based on the stat value at the time

    // ----- Health Bar -----
    if (yourPet.health >= 75) {
        healthNum.style.width = "110px";
        healthNum.style.backgroundColor = "lime";
        emoteText.textContent = `${yourPet.firstName} is happy `
    }
    else if (yourPet.health < 75 && yourPet.health > 35) {
        healthNum.style.width = "55px";
        healthNum.style.backgroundColor = "Yellow";
        emoteText.textContent = `${yourPet.firstName} is doing okay `
    }
    else {
        healthNum.style.width = "35px";
        healthNum.style.backgroundColor = "Red";
        emoteText.textContent = `${yourPet.firstName} is feeling neglected `
    }
    // ----- Hunger Bar -----
    if (yourPet.hunger >= 75) {
        hungerNum.style.width = "110px";
        hungerNum.style.backgroundColor = "lime";
    }
    else if (yourPet.hunger < 75 && yourPet.hunger > 35) {
        hungerNum.style.width = "55px";
        hungerNum.style.backgroundColor = "Yellow";
    }
    else {
        hungerNum.style.width = "35px";
        hungerNum.style.backgroundColor = "Red";
    }
    // ----- Thirst Bar -----
    if (yourPet.thirst >= 75) {
        thirstNum.style.width = "110px";
        thirstNum.style.backgroundColor = "lime";
    }
    else if (yourPet.thirst < 75 && yourPet.thirst > 35) {
        thirstNum.style.width = "55px";
        thirstNum.style.backgroundColor = "Yellow";
    }
    else {
        thirstNum.style.width = "35px";
        thirstNum.style.backgroundColor = "Red";
    }
    // ----- Social Bar -----
    if (yourPet.social >= 75) {
        socialNum.style.width = "110px";
        socialNum.style.backgroundColor = "lime";
    }
    else if (yourPet.social < 75 && yourPet.social > 35) {
        socialNum.style.width = "55px";
        socialNum.style.backgroundColor = "Yellow";
    }
    else {
        socialNum.style.width = "35px";
        socialNum.style.backgroundColor = "Red";
    }
    // ----- Hygiene Bar -----
    if (yourPet.hygiene >= 75) {
        hygieneNum.style.width = "110px";
        hygieneNum.style.backgroundColor = "lime";
    }
    else if (yourPet.hygiene < 75 && yourPet.hygiene > 35) {
        hygieneNum.style.width = "55px";
        hygieneNum.style.backgroundColor = "Yellow";
    }
    else {
        hygieneNum.style.width = "35px";
        hygieneNum.style.backgroundColor = "Red";
    }
    // ----- Comfort Bar -----
    if (yourPet.comfort >= 75) {
        comfortNum.style.width = "110px";
        comfortNum.style.backgroundColor = "lime";
    }
    else if (yourPet.comfort < 75 && yourPet.comfort > 35) {
        comfortNum.style.width = "55px";
        comfortNum.style.backgroundColor = "Yellow";
    }
    else {
        comfortNum.style.width = "35px";
        comfortNum.style.backgroundColor = "Red";
    }
    updateEmote(yourPet);
}

const updateEmote = (yourPet) => {              // changes the image of your pet based on its happiness value
    if (specialBtnPressed == false) {
        if (yourPet.health == 0) {
            petLiving = false
            emoteText.textContent = `${yourPet.firstName} has passed away `;
            petImages[1].style.display = "none";
            petImages[12].style.display = "none";
            petImages[15].style.display = "none";
            petImages[22].style.display = "block";
            ripText.style.display = "block";
            ripText.textContent = `${yourPet.firstName}`;
        }
        else if (yourPet.health >= 75) {
            emoteText.textContent = `${yourPet.firstName} is happy `;
            if (yourPet.type == "Sloth") {
                petImages[2].style.display = "none";
                petImages[3].style.display = "block";
            }
            else if (yourPet.type == "Penguin") {
                petImages[8].style.display = "none";
                petImages[10].style.display = "block";
            }
            else if (yourPet.type == "Elephant") {
                petImages[16].style.display = "none";
                petImages[18].style.display = "block";
            }
        }
        else if (yourPet.health < 35) {
            emoteText.textContent = `${yourPet.firstName} is feeling neglected `;
            if (yourPet.type == "Sloth") {
                petImages[2].style.display = "none";
                petImages[1].style.display = "block";
            }
            else if (yourPet.type == "Penguin") {
                petImages[8].style.display = "none";
                petImages[12].style.display = "block";
            }
            else if (yourPet.type == "Elephant") {
                petImages[16].style.display = "none";
                petImages[15].style.display = "block";
            }
        }
        else {
            emoteText.textContent = `${yourPet.firstName} is doing okay `;
            if (yourPet.type == "Sloth") {
                petImages[1].style.display = "none";
                petImages[3].style.display = "none";
                petImages[2].style.display = "block";
            }
            else if (yourPet.type == "Penguin") {
                petImages[12].style.display = "none";
                petImages[10].style.display = "none";
                petImages[8].style.display = "block";
                
            }
            else if (yourPet.type == "Elephant") {
                petImages[15].style.display = "none";
                petImages[18].style.display = "none";
                petImages[16].style.display = "block";  
            }
        }
    }
    if (yourPet.hunger < 35) {                                         // displays text if an individual stat is low
        emoteText.textContent = `${yourPet.firstName} is starving `;
    }
    else if (yourPet.thirst < 35) {
        emoteText.textContent = `${yourPet.firstName} is parched `;
    }
    else if (yourPet.hygiene < 35) {
        emoteText.textContent = `${yourPet.firstName} is starting to smell `;
    }
    else if (yourPet.social < 35) {
        emoteText.textContent = `${yourPet.firstName} is feeling lonely `;
    }
    else if (yourPet.comfort < 35) {
        emoteText.textContent = `${yourPet.firstName} is uncomfortable `;
    }
}

const timingFunction = (yourPet) => {                   // this reduces each stat by a set amout every 2 seconds, whilst stopping them going below zero
    if (petLiving == true && gameReset == false) {  
    window.setTimeout(() => {
        yourPet.hunger -= 2;
        if (yourPet.trait == "Greedy") {
            yourPet.hunger -= 1;}
        if (yourPet.hunger < 0){
            yourPet.hunger = 0}
        yourPet.thirst -= 2;
        if (yourPet.thirst < 0){
            yourPet.thirst = 0}
        yourPet.comfort -= 2;
        if (yourPet.trait == "Restless") {
            yourPet.comfort -= 1;}
        if (yourPet.comfort < 0){
            yourPet.comfort = 0}
        yourPet.social -= 2;
        if (yourPet.trait == "Playful") {
            yourPet.social -= 1;}
        if (yourPet.social < 0){
            yourPet.social = 0}
        yourPet.hygiene -= 2;
        if (yourPet.trait == "Messy") {
            yourPet.hygiene -= 1;}
        if (yourPet.hygiene < 0){
            yourPet.hygiene = 0}
        yourPet.age += (1/12)
        updateStats(yourPet);
        timingFunction(yourPet);
    }, 4000);
    }
}