let pet = {};
window.onload = loadPetData();




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
        pet.energy += 1;
    }
    // pet gets unhappy when hungry
    if (pet.happiness > 0) {
        if (pet.hunger === 0) {
            pet.happiness -= 1;
        }
    }
}

function updateInfo() {
    let ageInDays = Math.floor((new Date() - new Date(pet.creationdate)) / (1000 * 60 * 60 * 24));
    pet.age = ageInDays * 86400; // convert days to seconds
    document.getElementById("pet-name").innerHTML = pet.name;
    document.getElementById("pet-hunger").innerHTML = `Hunger: ${pet.hunger}/${pet.maxHunger}`;
    document.getElementById("pet-happiness").innerHTML = `Happiness: ${pet.happiness}/${pet.maxHappiness}`;
    document.getElementById("pet-energy").innerHTML = `Energy: ${pet.energy}/${pet.maxEnergy}`;
    document.getElementById("pet-love").innerHTML = `Love: ${pet.love}/${pet.maxLove}`;
    document.getElementById("pet-age").innerHTML = `Age: ${Math.floor(pet.age / 86400)} days`;
    document.getElementById("pet-level").innerHTML = `Level: ${pet.level}`;


    //have to add a check for if any other face has to be displayed
    // update pet image based on various states
    if (pet.type === "Cat") {
        if (pet.happiness > 70) {
            document.getElementById("pet-display").src = "../assets/pet/cat/happy.png";
        } else if (pet.happiness > 30) {
            document.getElementById("pet-display").src = "../assets/pet/cat/neutral.png";
        } else {
            document.getElementById("pet-display").src = "../assets/pet/cat/sad.png";
        }
    /*
    }else if (pet.type === "Dog") {
        if (pet.happiness > 70) {
            document.getElementById("pet-display").src = "../assets/pet/dog/happy.png";
        } else if (pet.happiness > 30) {
            document.getElementById("pet-display").src = "../assets/pet/dog/neutral.png";
        } else {
            document.getElementById("pet-display").src = "../assets/pet/dog/sad.png";
        }
    }else if (pet.type === "Rabbit") {
        if (pet.happiness > 70) {
            document.getElementById("pet-display").src = "../assets/pet/rabbit/happy.png";
        } else if (pet.happiness > 30) {
            document.getElementById("pet-display").src = "../assets/pet/rabbit/neutral.png";
        } else {
            document.getElementById("pet-display").src = "../assets/pet/rabbit/sad.png";
        }
    }else if (pet.type === "Bird") {
        if (pet.happiness > 70) {
            document.getElementById("pet-display").src = "../assets/pet/bird/happy.png";
        } else if (pet.happiness > 30) {
            document.getElementById("pet-display").src = "../assets/pet/bird/neutral.png";
        } else {
            document.getElementById("pet-display").src = "../assets/pet/bird/sad.png";
        }
    */
    }
}