let pet = {
    name: "Dave",
    type: "cat",
    age: 1,
    hunger: 50,
    thirst: 50,
    happiness: 50,
    energy: 50,
    love: 0,
    level: 1,
    maxHunger: 100,
    maxThirst: 100,
    maxHappiness: 100,
    maxEnergy: 100,
    maxLove: 100,
    creationdate: new Date().toISOString(),
    image: "cat.png"
};

function backgroundScroll() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  document.body.style.backgroundPosition = `center ${-scrollTop * 0.5}px`;
}

window.addEventListener('scroll', backgroundScroll);


function preview(petNumber) {
if (petNumber === 1) {
    document.getElementById("pet1").src = "../assets/pet/cat/happy.png";
    document.getElementById("pet2").src = "../assets/pet/fox/neutral.png";
    document.getElementById("pet3").src = "../assets/pet/cat/neutral.png";
    document.getElementById("pet4").src = "../assets/pet/cat/neutral.png";

}else if (petNumber === 2) {
    document.getElementById("pet1").src = "../assets/pet/cat/neutral.png";
    document.getElementById("pet2").src = "../assets/pet/fox/happy.png";
    document.getElementById("pet3").src = "../assets/pet/cat/neutral.png";
    document.getElementById("pet4").src = "../assets/pet/cat/neutral.png";
}else if (petNumber === 3) {
    document.getElementById("pet1").src = "../assets/pet/cat/neutral.png";
    document.getElementById("pet2").src = "../assets/pet/fox/neutral.png";
    document.getElementById("pet3").src = "../assets/pet/cat/happy.png";
    document.getElementById("pet4").src = "../assets/pet/cat/neutral.png";
}else if (petNumber === 4) {
    document.getElementById("pet1").src = "../assets/pet/cat/neutral.png";
    document.getElementById("pet2").src = "../assets/pet/fox/neutral.png";
    document.getElementById("pet3").src = "../assets/pet/cat/neutral.png";
    document.getElementById("pet4").src = "../assets/pet/cat/happy.png";
}
}
function choose(petNumber) {
    if (petNumber === 1) {
        if (document.getElementById("pet-name").value === "") {
            pet.name = "Garfield";
        }
        else {
            pet.name = document.getElementById("pet-name").value;
        }
        pet.type = "cat";
        localStorage.setItem("pet", JSON.stringify(pet));
        window.location.href = "hub.html";
    }
    else if (petNumber === 2) {
        if (document.getElementById("pet-name").value === "") {
            pet.name = "Luna";
        }
        else {
            pet.name = document.getElementById("pet-name").value;
        }
        pet.type = "fox";
        localStorage.setItem("pet", JSON.stringify(pet));
        window.location.href = "hub.html";
    }
    else if (petNumber === 3) {
        if (document.getElementById("pet-name").value === "") {
            pet.name = "Tweety";
        }
        else {
            pet.name = document.getElementById("pet-name").value;
        }
        pet.type = "bird";
        localStorage.setItem("pet", JSON.stringify(pet));
        window.location.href = "hub.html";
    }
    else if (petNumber === 4) {
        if (document.getElementById("pet-name").value === "") {
            pet.name = "Bucks";
        }
        else {
            pet.name = document.getElementById("pet-name").value;
        }
        pet.type = "rabbit";
        localStorage.setItem("pet", JSON.stringify(pet));
        window.location.href = "hub.html";
    }
}