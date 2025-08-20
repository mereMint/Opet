let pet = {
    name: "Dave",
    type: "Cat",
    age: 1,
    hunger: 50,
    happiness: 50,
    energy: 50,
    love: 0,
    level: 1,
    maxHunger: 100,
    maxHappiness: 100,
    maxEnergy: 100,
    maxLove: 100,
    image: "cat.png"
};

window.BeforeUnload = savePetData;
window.onload = loadPetData();




function loadPetData() {
    pet = JSON.parse(localStorage.getItem("pet"));
}

function savePetData() {
    localStorage.setItem("pet", JSON.stringify(pet));
}


setTimeout(() => update(), 1000);

function update() {