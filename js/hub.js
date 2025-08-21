let pet = {};
let faceblock = false; // to block face updates when pet is being fed or played with
let state = 0;
penalty = 0; // fuck ups counter
window.onload = loadPetData();

function cuddle() {
    if (faceblock === false) {
        faceblock = true;
        pet.energy -= 25;
        if (state === 1){ // if sleeping penatly
            document.getElementById("pet-display").src = `../assets/pet/${pet.type}/angry.png`;
            pet.happiness -= 25;
            pet.love -= 10;
            penalty += 1;
            if (pet.happiness < 0) {
                pet.happiness = 0;
            }
            if (pet.love < 0) {
                pet.love = 0;
            }
        }else if (state === 0){ // awake
            // penatly if no energy and animal is not happy
            if (pet.energy < 0 || pet.happiness < 26) {
                pet.energy = 0;
                pet.love -= 5;
                penalty += 1;
                if (pet.love < 0) {
                    pet.love = 0;
                }
                document.getElementById("pet-display").src = `../assets/pet/${pet.type}/dislike.png`;
            }else{
                pet.love += 5;
                document.getElementById("pet-display").src = `../assets/pet/${pet.type}/love.png`;
            }
            setTimeout(() => {
                faceblock = false;
            }, 1000);
        }
    }    
}

function action1() {
    // food
    if (faceblock === false) {
        faceblock = true;
        if (pet.happiness > 70){
            document.getElementById("pet-display").src = `../assets/pet/${pet.type}/love.png`;
        }else{
            document.getElementById("pet-display").src = `../assets/pet/${pet.type}/happy.png`;
        }
        
        pet.hunger += 10;
        // too much food penalty
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
            document.getElementById("pet-display").src = `../assets/pet/${pet.type}/dislike.png`;
        }
        // eating takes energy
        energy = pet.energy - 5;
        if (energy < 0) {
            energy = 0;
        }
        // if sleeping penatly
        if (state === 1){
                pet.happiness -= 25;
                pet.love -= 5;
                if (pet.happiness < 0) {
                    pet.happiness = 0;
                }
                if (pet.love < 0) {
                    pet.love = 0;
                }
            }
        // for animation
        setTimeout(() => {
            faceblock = false;
            }, 1000);
    }
}

function action2() {
    // give water
    if (faceblock === false) {
        faceblock = true;
        if (pet.happiness > 70){
            document.getElementById("pet-display").src = `../assets/pet/${pet.type}/love.png`;
        }else{
            document.getElementById("pet-display").src = `../assets/pet/${pet.type}/happy.png`;
        }
        pet.thirst += 20;
        // too much water penalty
        if (pet.thirst > pet.maxThirst) {
            pet.happiness -= 25;
            pet.thirst = pet.maxThirst;
            if (pet.happiness < 0) {
                pet.happiness = 0;
            }
        }

        // if sleeping penatly
        if (state === 1){
            pet.happiness -= 25;
            pet.love -= 5;
            penalty += 1;
            document.getElementById("pet-display").src = `../assets/pet/${pet.type}/angry.png`;
            if (pet.happiness < 0) {
                pet.happiness = 0;
            }
            if (pet.love < 0) {
                pet.love = 0;
            }
        }

        // for animation
        setTimeout(() => {
            faceblock = false;
        }, 1000);
    }
}

function action3() {
    // train
    if (faceblock === false) {
        faceblock = true;
        pet.energy -=40;
        if (pet.energy < 0) { // no energy doens't succed
            pet.energy = 0;
            pet.happiness -= 20;
            penalty += 1;
            pet.love -= 5;
            if (pet.happiness < 0) {
                pet.happiness = 0;
            }
            if (pet.love < 0) {
                pet.love = 0;
            } // gets annoyed
            document.getElementById("pet-display").src = `../assets/pet/${pet.type}/angry.png`;
        }else{
            if (state === 1){ // sleep penatly
                document.getElementById("pet-display").src = `../assets/pet/${pet.type}/angry.png`;
                pet.happiness -= 25;
                pet.love -= 10;
                penalty += 1;
                if (pet.happiness < 0) {
                    pet.happiness = 0;
                }
                if (pet.love < 0) {
                    pet.love = 0;
                }
            }else if (state === 0){ // if awake and enough energy then success
                document.getElementById("pet-display").src = `../assets/pet/${pet.type}/love.png`;
                pet.happiness += 15;
                pet.love += 20;

                if (pet.happiness > pet.maxHappiness) {
                    pet.happiness = pet.maxHappiness;
                }
                if (pet.love > pet.maxLove) {
                    pet.love = pet.maxLove;
                }
            
            }
        }        
        setTimeout(() => {
            faceblock = false;
        }, 1000);
    }
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

    // time wise sleep
    time = new Date().getHours();
    if(time < 8 && time > 22){
        state = 1;
        document.getElementById("box").classList.add("sleepy");
        document.getElementById("box").classList.remove("wakey");

    }else{
        state = 0;
        document.getElementById("box").classList.add("wakey");
        document.getElementById("box").classList.remove("sleepy");
    }
    if (state === 0) { // when awake
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
    }
    
    // pet gets unhappy when hungry
    if (pet.happiness > 0) {
        if (pet.hunger === 0) {
            pet.happiness -= 1;
        }
    }

    if (state === 0){ // when awake
        // pet gets thirsty
        if (pet.thirst > 0) {
            pet.thirst -= 2;
            if (pet.thirst < 0) {
                pet.thirst = 0;
            }
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
    // happy if there is energy + 50% < thirst + 50% < hunger = +1 happiness
    if (pet.energy > 0 && pet.thirst > pet.maxThirst / 2 && pet.hunger > pet.maxHunger / 2) {
        pet.happiness += 1;
        if (pet.happiness > pet.maxHappiness){
            pet.happiness = pet.maxHappiness;
        
        }
    }
    // when a lot of energy and good enough food and thrist then more happy
    if (pet.energy > 50 && pet.thirst > pet.maxThirst / 2 && pet.hunger > pet.maxHunger / 2) {
        pet.happiness += 3;
        if (pet.happiness > pet.maxHappiness){
            pet.happiness = pet.maxHappiness;
        
        }
    }
}

function updateInfo() {
    let ageInDays = (new Date() - new Date(pet.creationdate)) / (1000 * 60 * 60 * 24);
    pet.age = ageInDays
    console.clear();
    console.log(pet);
    console.log(ageInDays);
    document.getElementById("pet-name").innerHTML = pet.name;
    document.getElementById("pet-hunger").innerHTML = `Hunger: ${pet.hunger}/${pet.maxHunger}`;
    document.getElementById("pet-thirst").innerHTML = `Thirst: ${pet.thirst}/${pet.maxThirst}`;
    document.getElementById("pet-happiness").innerHTML = `Happy: ${pet.happiness}/${pet.maxHappiness}`;
    document.getElementById("pet-energy").innerHTML = `Energy: ${pet.energy}/${pet.maxEnergy}`;
    document.getElementById("pet-love").innerHTML = `Love: ${pet.love}/${pet.maxLove}`;
    document.getElementById("pet-age").innerHTML = `Age: ${Math.floor(pet.age)} days`;
    document.getElementById("pet-level").innerHTML = `Level: ${pet.level}`;


    //have to add a check for if any other face has to be displayed
    // update pet image based on various states
    if (faceblock=== false) {
        if (pet.happiness > (pet.maxHappiness * (2/3))) {
            document.getElementById("pet-display").src = `../assets/pet/${pet.type}/happy.png`;
        } else if (pet.happiness >(pet.maxHappiness * (1/3))) {
            document.getElementById("pet-display").src = `../assets/pet/${pet.type}/neutral.png`;
        } else {
            document.getElementById("pet-display").src = `../assets/pet/${pet.type}/cry.png`;
        }
    }

    if (pet.love === pet.maxLove) {
        levelUp();
    }
    if (penalty >= 10) {
        document.getElementById("pet-display").src = `../assets/pet/${pet.type}/angry.png`;
        penalty = 0; // reset penalty counter
        pet.happiness = 0;
        pet.love = 0;
        pet.level -= 1; // lose a level
        if (pet.level < 1) {
            pet.level = 1; // prevent going below level 1
        }
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