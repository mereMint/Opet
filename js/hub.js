let pet = {};
let faceblock = false; // to block face updates when pet is being fed or played with
let state = 0;
penalty = 0; // fuck ups counter
actionsleep = false;
window.onload = loadPetData();



let settings = {
}

window.onload = function () {
    settings = JSON.parse(localStorage.getItem("settings"));
    startHours = new Date().getHours();
    startMinutes = new Date().getMinutes();
    startSeconds = new Date().getSeconds();

}


//Everything audio related


let muisc = new Audio('../assets/sounds/main.ogg')
let click = new Audio('../assets/sounds/click.ogg')
let ack = new Audio('../assets/sounds/ack.ogg')

muisc.loop = true;
muisc.volume = 0.25;
source = 0;



function noise() {
  if (settings.Hub) {
    settings.Hub = false;
    console.log("Settings saved")
    localStorage.setItem("settings", JSON.stringify(settings));
  } else {
    settings.Hub = true;
    console.log("Settings saved")
    localStorage.setItem("settings", JSON.stringify(settings));
  }
}

setInterval(function () {
    if (settings.Hub) {
    muisc.play();
    document.getElementById("audio").src = `../assets/actions/play.png`;
  } else {
    muisc.pause();
    document.getElementById("audio").src = `../assets/actions/mute.png`;
  }
  if (source === 0 && state === 0){
    muisc.src = '../assets/sounds/main.ogg';
    muisc.volume = 0.25;
    source = 1;
  }
  if (source === 1 && state === 1){
    muisc.src = '../assets/sounds/sleep.ogg';
    muisc.volume = 0.75;
    source = 0;
  }
},100)

function clickSound() {
  if(settings.Hub){
    click.play();
  }
}

function AckSound() {
  if(settings.Hub){
    ack.play();
  }
}


function cuddle() {
    if (faceblock === false) {
        clickSound();
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
            
        }
        setTimeout(() => {
                faceblock = false;
                AckSound();
            }, 500);
    }    
}

function action1() {
    // food
    if (faceblock === false) {
        clickSound();
        faceblock = true; 
        pet.hunger += 10;
        pet.energy -= 2;
        if (pet.hunger > pet.maxHunger) {
            pet.hunger = pet.maxHunger;
        }

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
            if (pet.energy < 0) {
                pet.energy = 0;
            }
        }else{
            if (pet.hunger > pet.maxHunger || pet.energy < 0){
                document.getElementById("pet-display").src = `../assets/pet/${pet.type}/dislike.png`;
                if (pet.hunger > pet.maxHunger) {
                    pet.hunger = pet.maxHunger;
                }
                pet.happiness -= 10;
                pet.love -= 5;
                if (pet.happiness < 0) {
                    pet.happiness = 0;
                }
                if (pet.love < 0) {
                    pet.love = 0;
                }
                if (pet.energy < 0) {
                    pet.energy = 0;
                }
            }else{
                if (pet.happiness > (pet.maxHappiness * (2/3))){
                    document.getElementById("pet-display").src = `../assets/pet/${pet.type}/love.png`;
                }else{
                    document.getElementById("pet-display").src = `../assets/pet/${pet.type}/happy.png`;
                }

            }
        }
        


        
        // for animation
        setTimeout(() => {
            faceblock = false;
            AckSound();
            }, 500);
    }
}

function action2() {
    // give water
    if (faceblock === false) {
        clickSound();
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
            AckSound();
        }, 500);
    }
}

function action3() {
    // train
    if (faceblock === false) {
        clickSound();
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
            AckSound();
        }, 500);
    }
}

function action4() {
    // sleep
    if (faceblock === false && state === 0) {
        clickSound();
        console.log("sleeping");
        faceblock = true;
        state = 1;
        actionsleep = true;
        document.getElementById("pet-display").classList.add("Slept");
        document.getElementById("pet-display").src = `../assets/pet/${pet.type}/sleep.png`;
        setTimeout(() => {
            document.getElementById("pet-display").classList.remove("Slept");
            document.getElementById("pet-display").classList.add("endgame");
            console.log("wave 2"); 
            setTimeout(() => {
                faceblock = false;
                state = 0;
                actionsleep = false;
                document.getElementById("pet-display").classList.remove("endgame");
                console.log("finished sleeping")
                AckSound();
            }, 500); // animation 2
        }, 1000*30); // animation 1
    }
}

function loadPetData() {
    pet = JSON.parse(localStorage.getItem("pet"));
}

function savePetData() {
    localStorage.setItem("pet", JSON.stringify(pet));
}


//Intervals 
setInterval(() => savePetData(), 1000);
setInterval(() => updatePet(), 5000);
setInterval(() => updateInfo(), 100);
setInterval(() => sleepBenefits(), 1000 * 30);
setInterval(() => moodChanges(), 1000 * 60);



function updatePet() {
    // time wise sleep
    time = new Date().getHours();
    if(!actionsleep && time < 8 || !actionsleep && time > 22 || pet.mood === "Tired"){
        state = 1;
        document.getElementById("box").classList.add("sleepy");
        document.getElementById("box").classList.remove("wakey");
        document.getElementById("pet-display").classList.add("backgroundSleepPet");

    }else if(!actionsleep){
        state = 0;
        document.getElementById("box").classList.remove("sleepy");
        document.getElementById("pet-display").classList.remove("backgroundSleepPet");
        document.getElementById("box").classList.add("wakey");
    }else{

    }
    if (state === 0) { // when awake
        // pet gets hungrier and add energy
        if (pet.hunger > 0) {
            pet.hunger -= 1;
            if (pet.mood === "Hungry"){
                pet.hunger -= 5;           
            }
            if (pet.hunger < 0)
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
            if (pet.happiness < 0) {
                pet.happiness = 0;
            }
        }
    }

    if (state === 0){ // when awake
        // pet gets thirsty
        if (pet.thirst > 0) {
            pet.thirst -= 2;
            if (pet.mood === "Thirsty"){
                pet.thirst -= 5;           
            }
            if (pet.thirst < 0) {
                pet.thirst = 0;
            }
            pet.energy += 1;
            if (pet.energy > pet.maxEnergy) {
                pet.energy = pet.maxEnergy;
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

    if (pet.happiness === pet.maxHappiness){
        pet.energy += 2;
        if (pet.mood === "Happy"){
            pet.energy += 1;           
        }
        if (pet.energy > pet.maxEnergy){
            pet.energy = pet.maxEnergy;
        }
    }


    if (pet.mood === "Depressed"){
        pet.happiness = 5;
    }

    if (pet.mood === "Sad"){
        pet.happiness -=5;
        if (pet.happiness < 5 && pet.love > (pet.maxLove/10)) {
            pet.happiness = 5;
        }
    }

    if (pet.mood === "Angry"){
        pet.happiness -=2;
        if (pet.happiness < 5) {
            pet.happiness = 5;
        }
        pet.energy -= 1;
        if (pet.energy < 0) {
            pet.energy = 0;
        }
        pet.hunger -= 1;
        if (pet.hunger < 0) {
            pet.hunger = 0;
        }
        pet.thirst -= 1;
        if (pet.thirst < 0) {
            pet.thirst = 0;
        }
    }
}

function updateInfo() {
    let ageInDays = (new Date() - new Date(pet.creationdate)) / (1000 * 60 * 60 * 24);
    
    pet.age = ageInDays
    document.getElementById("pet-name").innerHTML = pet.name;
    document.getElementById("pet-hunger").innerHTML = `Hunger: ${pet.hunger}/${pet.maxHunger}`;
    document.getElementById("pet-thirst").innerHTML = `Thirst: ${pet.thirst}/${pet.maxThirst}`;
    document.getElementById("pet-happiness").innerHTML = `Happy: ${pet.happiness}/${pet.maxHappiness}`;
    document.getElementById("pet-energy").innerHTML = `Energy: ${pet.energy}/${pet.maxEnergy}`;
    document.getElementById("pet-love").innerHTML = `Love: ${pet.love}/${pet.maxLove}`;
    document.getElementById("pet-age").innerHTML = `Age: ${Math.floor(pet.age)} days`;
    document.getElementById("pet-level").innerHTML = `Level: ${pet.level}`;
    document.getElementById("pet-mood").innerHTML = `Mood: ${pet.mood}`;
    document.getElementById("session").innerHTML = `${getSessionTime()}`;



    //have to add a check for if any other face has to be displayed
    // update pet image based on various states
    if (faceblock=== false) {
        if (pet.happiness > (pet.maxHappiness * (2/3)) && state === 0) {
            document.getElementById("pet-display").src = `../assets/pet/${pet.type}/happy.png`;
        } else if (pet.happiness >(pet.maxHappiness * (1/3)) && state === 0) {
            document.getElementById("pet-display").src = `../assets/pet/${pet.type}/neutral.png`;
        } else if (state === 0) {
            document.getElementById("pet-display").src = `../assets/pet/${pet.type}/cry.png`;
        }else{
            document.getElementById("pet-display").src = `../assets/pet/${pet.type}/sleep.png`;
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
    pet.maxThirst += 10;
    pet.maxLove = pet.maxLove * 2;
    love = 0; // reset love after leveling up
}

function sleepBenefits() {
    if (state === 1) {
        pet.happiness += 1;
        pet.energy += 10;
        penalty -= 1;
    }
    if (pet.happiness > pet.maxHappiness){
        pet.happiness = pet.maxHappiness;
    }
    if (pet.energy > pet.maxEnergy){
        pet.energy = pet.maxEnergy;
    }
    if (penalty < 0) {
        penalty = 0;
    }

}

function moodChanges() {
    let rand = Math.floor(Math.random() * 100);
    
    if (rand < 10 && rand > 0){
        pet.mood = "Happy";
    }else if (rand < 35 && rand > 10){
        pet.mood = "Neutral";
    }else if (rand < 45 && rand > 35){
        pet.mood = "Sad";
    }else if (rand < 60 && rand > 45){
        pet.mood = "Hungry";
    }else if (rand < 70 && rand > 60){
        pet.mood = "Thirsty";
    }else if (rand < 80 && rand > 70){
        pet.mood = "Angry";
    }else if (rand < 85 && rand > 80){
        pet.mood = "Tired";
    }else if (rand < 90 && rand > 85){
        pet.mood = "Depressed";
    }else{
        pet.mood = "Neutral";
    }

    /*
        Happy = 10%
        Neutral = 35%
        Sad = 15%
        Hungry = 10 %
        Thirsty = 10%
        Angry = 5%
        Depressed = 5%
        Tired = 5%
    */
   console.log("Mood changed to: " + pet.mood);
    setTimeout(()=>{
        pet.mood = "Neutral";
        console.log("Mood changed back to: " + pet.mood);
    },1000*30)
}

function getSessionTime() {
    let currentHours = new Date().getHours();
    let currentMinutes = new Date().getMinutes();
    let currentSeconds = new Date().getSeconds();

    // Calculate elapsed time
    let elapsedHours = currentHours - startHours;
    let elapsedMinutes = currentMinutes - startMinutes;
    let elapsedSeconds = currentSeconds - startSeconds;

    // Handle negative values (carry over)
    if (elapsedSeconds < 0) {
        elapsedSeconds += 60;
        elapsedMinutes--;
    }
    if (elapsedMinutes < 0) {
        elapsedMinutes += 60;
        elapsedHours--;
    }
    if (elapsedHours < 0) {
        elapsedHours += 24; // Handle day rollover
    }

    // Pad with leading zeros
    let hours = elapsedHours.toString().padStart(2, '0');
    let minutes = elapsedMinutes.toString().padStart(2, '0');
    let seconds = elapsedSeconds.toString().padStart(2, '0');

    let sessionTime = `Session: ${hours}:${minutes}:${seconds}`;
    return sessionTime;
}