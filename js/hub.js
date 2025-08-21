let pet = {};
let faceblock = false; // to block face updates when pet is being fed or played with
window.onload = loadPetData();

function cuddle() {
    faceblock = true;
    
    
    pet.energy -= 25;
    if (pet.energy < 0) {
        pet.energy = 0;
        document.getElementById("pet-display").src = `../assets/pet/${pet.type}/sad.png`;
    }else{
        pet.love += 5;
        document.getElementById("pet-display").src = `../assets/pet/${pet.type}/love.png`;
    }
    setTimeout(() => {
        faceblock = false;
    }, 1000);
}

function action1() {
    faceblock = true;
    document.getElementById("pet-display").src = `../assets/pet/${pet.type}/love.png`;
    pet.hunger += 10;
    if (pet.hunger > pet.maxHunger) {
        pet.happiness -= 25;
        pet.love -= 5;
        if (pet.happiness < 0) {
            pet.happiness = 0;
        }
        if (pet.love < 0) {
            pet.love = 0;
        }
        pet.hunger = pet.maxHunger;
        document.getElementById("pet-display").src = `../assets/pet/${pet.type}/sad.png`;
    }
    energy = pet.energy - 5;
    if (energy < 0) {
        energy = 0;
    }
    pet.happiness += 5;
    if (pet.happiness > pet.maxHappiness) {
        pet.happiness = pet.maxHappiness;
    }
    setTimeout(() => {
        
        faceblock = false;
    }, 1000);
}


function loadPetData() {
    pet = JSON.parse(localStorage.getItem("pet"));
}

function savePetData() {
    localStorage.setItem("pet", JSON.stringify(pet));
}

setInterval(() => savePetData(), 1000);
setInterval(() => updatePet(), 5000);
setInterval(() => updateInfo(), 100);


function updatePet() {
    // pet gets hungrier and add energy
    if (pet.hunger > 0) {
        pet.hunger -= 1;
        if (pet.hunger < 0) {
            pet.hunger = 0;
        }
        pet.energy += 1;
        if (pet.energy > pet.maxEnergy) {
            pet.energy = pet.maxEnergy;
        }
    }
    // pet gets unhappy when hungry
    if (pet.happiness > 0) {
        if (pet.hunger === 0) {
            pet.happiness -= 1;
        }
    }

    // pet gets thirsty
    if (pet.thirst > 0) {
        pet.thirst -= 2;
        if (pet.thirst < 0) {
            pet.thirst = 0;
        }
    }

    // pet gets sad when thirsty
    if (pet.happiness > 0) {
        if (pet.thirst < pet.maxThirst / 4) {
            pet.happiness -= 1;
        }
    }
    // if sad then energy goes down
    if (pet.happiness < 30) {
        pet.energy -= 1;
        if (pet.energy < 0) {
            pet.energy = 0;
        }
    }
}

function updateInfo() {
    let ageInDays = Math.floor((new Date() - new Date(pet.creationdate)) / (1000 * 60 * 60 * 24));
    pet.age = ageInDays * 86400; // convert days to seconds
    document.getElementById("pet-name").innerHTML = pet.name;
    document.getElementById("pet-hunger").innerHTML = `Hunger: ${pet.hunger}/${pet.maxHunger}`;
    document.getElementById("pet-thirst").innerHTML = `Thirst: ${pet.thirst}/${pet.maxThirst}`;
    document.getElementById("pet-happiness").innerHTML = `Happiness: ${pet.happiness}/${pet.maxHappiness}`;
    document.getElementById("pet-energy").innerHTML = `Energy: ${pet.energy}/${pet.maxEnergy}`;
    document.getElementById("pet-love").innerHTML = `Love: ${pet.love}/${pet.maxLove}`;
    document.getElementById("pet-age").innerHTML = `Age: ${Math.floor(pet.age / 86400)} days`;
    document.getElementById("pet-level").innerHTML = `Level: ${pet.level}`;


    //have to add a check for if any other face has to be displayed
    // update pet image based on various states
    if (faceblock=== false) {
        if (pet.happiness > 70) {
            document.getElementById("pet-display").src = `../assets/pet/${pet.type}/happy.png`;
        } else if (pet.happiness > 30) {
            document.getElementById("pet-display").src = `../assets/pet/${pet.type}/neutral.png`;
        } else {
            document.getElementById("pet-display").src = `../assets/pet/${pet.type}/sad.png`;
        }
    }

    if (pet.love === pet.maxLove) {
        levelUp();
    }
}

function levelUp() {
    pet.level += 1;
    pet.maxHunger += 10;
    pet.maxHappiness += 10;
    pet.maxEnergy += 10;
    pet.maxLove = pet.maxLove * 2;
    love = 0; // reset love after leveling up
}